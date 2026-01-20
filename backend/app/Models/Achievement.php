<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Achievement extends Model
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
        'badge_type',
        'badge_data',
        'unlocked_at',
        'year',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'badge_data' => 'array',
            'unlocked_at' => 'datetime',
            'year' => 'integer',
        ];
    }

    /**
     * Available badge types.
     */
    public const BADGE_TYPES = [
        'streak_master' => 'Streak Master',
        'night_owl' => 'Night Owl',
        'early_bird' => 'Early Bird',
        'code_machine' => 'Code Machine',
        'music_enthusiast' => 'Music Enthusiast',
        'networking_pro' => 'Networking Pro',
        'meeting_warrior' => 'Meeting Warrior',
        'first_wrapped' => 'First Wrapped',
        'social_butterfly' => 'Social Butterfly',
        'consistency_king' => 'Consistency King',
    ];

    /**
     * Get the badge display name.
     */
    public function getBadgeNameAttribute(): string
    {
        return self::BADGE_TYPES[$this->badge_type] ?? ucwords(str_replace('_', ' ', $this->badge_type));
    }

    /**
     * Get the user that owns the achievement.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
