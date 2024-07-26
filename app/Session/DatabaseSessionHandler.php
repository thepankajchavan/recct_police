<?php

namespace App\Session;

use Illuminate\Contracts\Auth\Guard;

class DatabaseSessionHandler extends \Illuminate\Session\DatabaseSessionHandler
{
    /**
     * Add the user information to the session payload.
     *
     * @param  array  $payload
     * @return \Illuminate\Session\DatabaseSessionHandler
     */
    protected function addUserInformation(&$payload)
    {
        if ($this->container->bound(Guard::class)) {
            $payload['user_id'] = auth('web')->id();
            $payload['admin_id'] = auth('admin')->id();
        }

        return $this;
    }
}
