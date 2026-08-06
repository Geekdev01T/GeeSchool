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
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
             $table->string('code',10)->unique();      // SIL, CP, CE1...

            $table->string('name',50);                // Section d'Initiation au Langage...

            $table->unsignedTinyInteger('display_order')->unique(); // 1, 2, 3...

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
