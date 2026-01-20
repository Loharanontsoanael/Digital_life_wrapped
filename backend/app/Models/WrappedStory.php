<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class WrappedStory extends Model
{
    use HasFactory, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'year',
        'title',
        'story_data',
        'public_slug',
        'is_public',
        'view_count',
        'share_count',
        'generated_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'story_data' => 'array',
            'year' => 'integer',
            'is_public' => 'boolean',
            'view_count' => 'integer',
            'share_count' => 'integer',
            'generated_at' => 'datetime',
        ];
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function (WrappedStory $story) {
            if (!$story->public_slug) {
                $story->public_slug = Str::random(12);
            }
            if (!$story->generated_at) {
                $story->generated_at = now();
            }
        });
    }

    /**
     * Get the public URL for the wrapped story.
     */
    public function getPublicUrlAttribute(): ?string
    {
        if (!$this->is_public || !$this->public_slug) {
            return null;
        }
        return config('app.url') . '/wrapped/' . $this->public_slug;
    }

    /**
     * Increment the view count.
     */
    public function incrementViews(): void
    {
        $this->increment('view_count');
    }

    /**
     * Increment the share count.
     */
    public function incrementShares(): void
    {
        $this->increment('share_count');
    }

    /**
     * Get the user that owns the wrapped story.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
