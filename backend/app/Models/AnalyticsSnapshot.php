<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AnalyticsSnapshot extends Model
{
    use HasFactory, HasUuids;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'integration_id',
        'snapshot_type',
        'data',
        'period_start',
        'period_end',
        'checksum',
        'created_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'data' => 'array',
            'period_start' => 'date',
            'period_end' => 'date',
            'created_at' => 'datetime',
        ];
    }

    /**
     * Calculate checksum for data integrity.
     */
    public static function calculateChecksum(array $data): string
    {
        return hash('sha256', json_encode($data));
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function (AnalyticsSnapshot $snapshot) {
            if (!$snapshot->checksum && $snapshot->data) {
                $snapshot->checksum = self::calculateChecksum($snapshot->data);
            }
            if (!$snapshot->created_at) {
                $snapshot->created_at = now();
            }
        });
    }

    /**
     * Get the user that owns the snapshot.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the integration that owns the snapshot.
     */
    public function integration(): BelongsTo
    {
        return $this->belongsTo(Integration::class);
    }
}
