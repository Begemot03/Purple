<?php

namespace Andre\Server\Models;

class AuthDTO {
    public array $user;

    public function __construct(array $user) {
        $this->user = $user;
    }

    public function toArray(): array {
        return [
            'data' => $this->user
        ];
    }
}