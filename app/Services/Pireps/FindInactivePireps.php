<?php

namespace App\Services\Pireps;

use App\Models\Enums\PirepState;
use App\Models\Pirep;
use Carbon\Carbon;

class FindInactivePireps
{
    public function execute()
    {
        $dateToCompare = Carbon::now()->subHours(3);

        $pireps = Pirep::where('state', PirepState::DISPATCH)
            ->where('created_at', '<', $dateToCompare)
            ->get();

        return $pireps;
    }
}
