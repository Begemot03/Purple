<?php

namespace Andre\Server\Models;

class RecommendationDTO {
    public array $users;

    public function __construct(array $users) {
        $this->users = $users;
    }

    public function toArray(): array {
        return [
            'data' => $this->users
        ];
    }
}
