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
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->id(); // BIGSERIAL for high-volume logging
            $table->uuid('user_id')->nullable();
            $table->string('action', 100);
            $table->string('subject_type', 100)->nullable(); // Model class name
            $table->uuid('subject_id')->nullable();
            $table->jsonb('properties')->nullable(); // Before/after data
            $table->ipAddress('ip_address')->nullable();
            $table->text('user_agent')->nullable();
            $table->timestamp('created_at');

            // Foreign Keys - SET NULL on delete to preserve logs
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');

            // Indexes
            $table->index('user_id');
            $table->index('action');
            $table->index('created_at'); // For log rotation queries
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_logs');
    }
};
