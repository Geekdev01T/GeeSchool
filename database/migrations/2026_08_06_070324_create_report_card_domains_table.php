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
        Schema::create('report_card_domains', function (Blueprint $table) {
            $table->id();
            $table->foreignId('report_card_id')->constrained()->cascadeOnDelete();
            $table->foreignId('learning_domain_id')->constrained()->restrictOnDelete();
            // $table->decimal('learning_domain_average',5,2);
            $table->text('teacher_comment')->nullable();
            $table->timestamps();

            $table->unique([
                'report_card_id',
                'learning_domain_id'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report_card_domains');
    }
};
