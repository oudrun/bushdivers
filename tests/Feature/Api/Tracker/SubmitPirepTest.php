<?php

namespace Tests\Feature\Api\Tracker;

use App\Events\PirepFiled;
use App\Models\Aircraft;
use App\Models\Booking;
use App\Models\Fleet;
use App\Models\Flight;
use App\Models\Pirep;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Event;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class SubmitPirepTest extends TestCase
{
    use RefreshDatabase;

    protected Model $user;
    protected Model $pirep;
    protected Model $flight;
    protected Model $fleet;
    protected Model $aircraft;
    protected Model $booking;

    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $this->user = User::factory()->create();
        $this->fleet = Fleet::factory()->create();
        $this->aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id
        ]);
        $this->flight = Flight::factory()->create();
        $this->booking = Booking::factory()->create([
            'flight_id' => $this->flight->id,
            'user_id' => $this->user->id
        ]);
        $this->pirep = Pirep::factory()->create([
            'user_id' => $this->user->id,
            'flight_id' => $this->flight->id,
            'booking_id' => $this->booking->id,
            'aircraft_id' => $this->aircraft
        ]);

        $this->booking->has_dispatch = $this->pirep->id;
        $this->booking->save();

    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_pirep_submitted_successfully()
    {
        Sanctum::actingAs(
            $this->user,
            ['*']
        );
        $data = [
            'pirep_id' => $this->pirep->id,
            'fuel_used' => 25,
            'distance' => 76,
            'flight_time' => 45,
            'landing_rate' => -149.12,
            'block_off_time'=> Carbon::now()->addHours(-1),
            'block_on_time' => Carbon::now()->addMinutes(-5)
        ];

        $response = $this->putJson('/api/pirep/submit', $data);

        $response->assertStatus(200);
    }

    public function test_pilot_calcs_peformed_when_pirep_submitted()
    {
        Event::fake();

        Sanctum::actingAs(
            $this->user,
            ['*']
        );
        $data = [
            'pirep_id' => $this->pirep->id,
            'fuel_used' => 25,
            'distance' => 76,
            'flight_time' => 45,
            'landing_rate' => -149.12,
            'block_off_time'=> Carbon::now()->addHours(-1),
            'block_on_time' => Carbon::now()->addMinutes(-5)
        ];

        $response = $this->putJson('/api/pirep/submit', $data);

        Event::assertDispatched(PirepFiled::class);
    }

    public function test_pilot_pay_calc_when_pirep_submitted()
    {
        Artisan::call('db:seed --class=RankSeeder');
        Sanctum::actingAs(
            $this->user,
            ['*']
        );
        $data = [
            'pirep_id' => $this->pirep->id,
            'fuel_used' => 25,
            'distance' => 76,
            'flight_time' => 45,
            'landing_rate' => -149.12,
            'block_off_time'=> Carbon::now()->addHours(-1),
            'block_on_time' => Carbon::now()->addMinutes(-5)
        ];

        $this->putJson('/api/pirep/submit', $data);
        $pay = 25.00 * (45 / 60);

        $this->assertDatabaseHas('users', [
            'account_balance' => $pay
        ]);
    }

    public function test_pilot_location_and_flights_updated()
    {
        Artisan::call('db:seed --class=RankSeeder');
        Sanctum::actingAs(
            $this->user,
            ['*']
        );
        $data = [
            'pirep_id' => $this->pirep->id,
            'fuel_used' => 25,
            'distance' => 76,
            'flight_time' => 45,
            'landing_rate' => -149.12,
            'block_off_time'=> Carbon::now()->addHours(-1),
            'block_on_time' => Carbon::now()->addMinutes(-5)
        ];

        $this->putJson('/api/pirep/submit', $data);
        $pay = 25.00 * (45 / 60);

        $this->assertDatabaseHas('users', [
            'current_airport_id' => $this->flight->arr_airport_id,
            'flights_time' => $this->user->flights_time + 45,
            'flights' => $this->user->flights + 1
        ]);
    }
}
