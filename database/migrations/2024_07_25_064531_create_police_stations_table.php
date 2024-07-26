<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('police_stations', function (Blueprint $table) {
            $table->id();
            $table->string('police_station_name');
            $table->string('police_station_image');
            $table->string('police_station_map');
            $table->string('police_station_email');
            $table->string('police_patil');
            $table->string('jurisdiction_map');
            $table->string('division');
            $table->string('address');
            $table->string('telephone');
            $table->string('police_name');
            $table->string('police_post');
            $table->string('police_phone');
            $table->string('police_photo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('police_stations');
    }
};
