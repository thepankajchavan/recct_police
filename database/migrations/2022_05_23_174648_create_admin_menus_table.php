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
        Schema::create('admin_menus', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->foreign('parent_id')->references('id')->on('admin_menus')->onDelete('cascade');
            $table->string('name');
            $table->string('url');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->enum('type', ['route', 'url', 'external'])->default('route');
            $table->enum('position', ['sidebar', 'navbar_left', 'navbar_right'])->default('sidebar');
            $table->integer('order')->nullable();
            $table->boolean('blank')->default(false);
            $table->string('icon')->nullable();
            $table->text('permissions')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin_menus');
    }
};
