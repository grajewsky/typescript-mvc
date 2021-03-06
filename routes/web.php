<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
function resource($uri, $controller, $router)
{
	$router->get($uri, $controller.'@list');
	$router->post($uri, $controller.'@store');
	$router->get($uri.'/{id}', $controller.'@get');
	$router->put($uri.'/{id}', $controller.'@update');
	$router->patch($uri.'/{id}', $controller.'@update');
	$router->delete($uri.'/{id}', $controller.'@delete');
}

$router->get('/', function () use ($router) {
    return view("app");
});
$router->get('/view/{name}', function ($name) use ($router) {
    $viewExplode = explode(":", $name);
    $viewExplode[count($viewExplode) -1] .= ".php";

    if(file_exists(
        join(DIRECTORY_SEPARATOR, 
            array_merge([app()->resourcePath() . DIRECTORY_SEPARATOR . "views"], $viewExplode)
            )
        )
    ) {
        return view(join(DIRECTORY_SEPARATOR ,explode(":", $name)));
    }
    return response("404");
});

resource('user', 'User', $router);

