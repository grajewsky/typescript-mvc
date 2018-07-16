<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Response;

class User extends BaseController
{
    /* dodac ceche albo interfejsy i obsłuzyc guzzle'a */
    public function get(string $id)  {
        $user = new User();
        $user->token = "test";
        $user->login = "test2";

        return new Response(json_encode($user), 200);
    }
}
