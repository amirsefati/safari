<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

Route::get('', function () {
    return view('index');
});

Route::get('/{any}', function () {
    return view('index');
});

Route::get('/panel/{any}', function () {
    return view('index');
});

Route::post('/apiv1/loginform', [HomeController::class,'loginform']);

Route::post('/apiv1/registeruser', [HomeController::class,'registeruser']);

Route::get('/apiv1/checklogin', [HomeController::class,'checklogin']);

Route::post('/apiv1/upload_file', [HomeController::class,'upload_file']);


