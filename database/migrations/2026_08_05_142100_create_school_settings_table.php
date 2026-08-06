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
        Schema::create('school_settings', function (Blueprint $table) {
            $table->id();

            // Informations générales
            $table->string('school_name');
            $table->string('school_code');
            $table->string('school_type')->nullable(); // Public, Privé Laïc, Confessionnel
            $table->string('motto')->nullable();
            $table->string('logo')->nullable();

            // Localisation
            $table->string('address')->nullable();
            $table->string('city')->default('Douala');
            $table->string('division')->nullable(); 
            $table->string('region')->default('Littoral');
            $table->string('country')->default('Cameroun');

            // Contacts
            $table->string('phone')->nullable();
            $table->string('email', 30)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('school_settings');
    }
};
