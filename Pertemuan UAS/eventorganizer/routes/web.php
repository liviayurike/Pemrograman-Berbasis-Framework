<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('Produk', function () {
    return view('produk');
});

Route::get('Backdrop', function () {
    return view('backdrop');
});

Route::get('Birthday', function () {
    return view('birthday');
});

Route::get('Engagement', function () {
    return view('engagement');
});


Auth::routes();

Route::get('/welcome', 'HomeController@index')->name('welcome');

Route::get('/produk', 'ProdukController@index')->name('produk');

Route::get('/backdrop', 'BackdropController@index')->name('backdrop');

Route::get('/birthday', 'BirthdayController@index')->name('birthday');

Route::get('/engagement', 'EngagementController@index')->name('engagement');

Route::get('admin', function () {
    return view('admin');
})->middleware('checkRole:admin');
Route::get('customer', function () {
    return view('welcome');
})->middleware(['checkRole:customer,admin']);

Route::view('/bookings', 'app');
Route::view('/booking/edit/{id}', 'app');
Route::view('/booking/{id}', 'app');
Route::view('/{path}', 'app');
