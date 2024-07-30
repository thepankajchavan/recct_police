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
        Schema::create('lost_founds', function (Blueprint $table) {
            $table->id();
            $table->string('report_type');
            $table->string('station_name');
            $table->string('document_name');
            $table->string('document_number');
            $table->timestamp('datetime');
            $table->string('other_details');
            $table->string('name');
            $table->string('email');
            $table->string('contact');
            $table->string('address');
            $table->string('pincode');
            $table->text('message');
            $table->text('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lost_founds');
    }
};
