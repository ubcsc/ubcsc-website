<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->post('/user', function (Request $request) {
    return $request->user();
});



Route::get('/homepageinfo', function(Request $request)
{    
    return response()->json(['name' => 'Angular', 'message' => 'Testing the Api route of angular to laravel, globale.service.ts file in angular contains the routes to this message']);
});

Route::post('/test2', function(Request $request)
{    
    $name = $request->input('name');
    return response()->json(['name' => $name]);
});