<?php

namespace Tests\Unit\Services\Contract;

use App\Services\Contracts\StoreContracts;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StoreContractTest extends TestCase
{
    use RefreshDatabase;

    protected StoreContracts $storeContracts;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $this->storeContracts = $this->app->make(StoreContracts::class);
    }

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_contract_details_stored()
    {
        $data = [
            [
                'departure' => 'AYMR',
                'destination' => 'AYMH',
                'distance' => 60,
                'heading' => 45,
                'contract_value' => 1000,
                'cargo_type' => 1,
                'cargo' => 'Test',
                'cargo_qty' => 10,
                'expires_at' => Carbon::now()->addDays(2)
            ]
        ];
        $this->storeContracts->execute($data);
        $this->assertDatabaseHas('contracts', [
            'dep_airport_id' => 'AYMR',
            'arr_airport_id' => 'AYMH'
        ]);
    }

    public function test_multiple_contract_details_stored()
    {
        $data = [
            [
                'departure' => 'AYMR',
                'destination' => 'AYMH',
                'distance' => 60,
                'heading' => 45,
                'contract_value' => 1000,
                'cargo_type' => 1,
                'cargo' => 'Test',
                'cargo_qty' => 10,
                'expires_at' => Carbon::now()->addDays(2)
            ],
            [
                'departure' => 'AYMR',
                'destination' => 'AYMH',
                'distance' => 60,
                'heading' => 45,
                'contract_value' => 1000,
                'cargo_type' => 1,
                'cargo' => 'Test',
                'cargo_qty' => 10,
                'expires_at' => Carbon::now()->addDays(2)
            ]
        ];
        $this->storeContracts->execute($data);
        $this->assertDatabaseCount('contracts', 2);
    }
}
