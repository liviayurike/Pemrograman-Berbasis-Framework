<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/bookings', 'BookingController@index');
Route::post('/booking/store', 'BookingController@store');
Route::get('/booking/edit/{id}', 'BookingController@getBooking');
Route::get('/booking/{id}', 'BookingController@getBooking');
Route::put('/booking/{id}', 'BookingController@update');
Route::delete('/booking/delete/{id}', 'BookingController@delete');
