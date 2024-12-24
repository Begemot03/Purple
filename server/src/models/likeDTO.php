<?php

namespace Andre\Server\Models;

class LikesDTO {
    public array $likedByMe;
    public array $likedMe;

    public function __construct(array $likedByMe, array $likedMe) {
        $this->likedByMe = $likedByMe;
        $this->likedMe = $likedMe;
    }

    public function toArray(): array {
        return [
            'liked_by_me' => $this->likedByMe,
            'liked_me' => $this->likedMe
        ];
    }
}
