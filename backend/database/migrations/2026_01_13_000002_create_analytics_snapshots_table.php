<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('analytics_snapshots', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('uuid_generate_v4()'));
            $table->uuid('user_id');
            $table->uuid('integration_id');
            $table->string('snapshot_type', 50); // daily, weekly, monthly, yearly
            $table->jsonb('data');
            $table->date('period_start');
            $table->date('period_end');
            $table->string('checksum', 64)->nullable(); // SHA256 for data integrity
            $table->timestamp('created_at');

            // Foreign Keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('integration_id')->references('id')->on('integrations')->onDelete('cascade');

            // Indexes
            $table->index(['user_id', 'snapshot_type', 'period_start']);
            $table->index('integration_id');
        });

        // Create GIN index for JSONB data queries
        DB::statement('CREATE INDEX analytics_snapshots_data_gin ON analytics_snapshots USING GIN (data)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('analytics_snapshots');
    }
};
