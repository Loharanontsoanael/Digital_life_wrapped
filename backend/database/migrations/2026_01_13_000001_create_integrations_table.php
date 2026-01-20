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
        // Create ENUM type for providers
        DB::statement("CREATE TYPE integration_provider AS ENUM ('github', 'spotify', 'linkedin', 'google')");

        Schema::create('integrations', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('uuid_generate_v4()'));
            $table->uuid('user_id');
            $table->enum('provider', ['github', 'spotify', 'linkedin', 'google']);
            $table->string('provider_user_id');
            $table->text('access_token'); // Will be encrypted at application layer
            $table->text('refresh_token')->nullable(); // Will be encrypted at application layer
            $table->timestamp('token_expires_at')->nullable();
            $table->jsonb('scopes')->default('[]');
            $table->jsonb('metadata')->default('{}');
            $table->timestamp('last_synced_at')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            // Foreign Keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Indexes
            $table->unique(['user_id', 'provider']);
            $table->index('provider');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('integrations');
        DB::statement('DROP TYPE IF EXISTS integration_provider');
    }
};
