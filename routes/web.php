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

Route::post('/apiv1/checkfiles', [HomeController::class,'checkfiles']);

Route::post('/apiv1/get_media', [HomeController::class,'get_media']);

Route::get('/apiv1/get_news', [HomeController::class,'get_news']);

Route::get('/apiv1/payment_user_verify', [HomeController::class,'payment_user_verify']);

Route::post('/apiv1/pay_andresrve', [HomeController::class,'pay_andresrve']);

Route::get('/payment/goto_may_user', [HomeController::class,'goto_may_user']);

Route::get('/check_pay/check_user', [HomeController::class,'after_pay']);


Route::get('/apiv1/logout', [HomeController::class,'logout']);

Route::get('/manager/safari', [HomeController::class,'safari']);
Route::post('/manager/safari/action_on_filesdt', [HomeController::class,'action_on_filesdt']);

Route::get('/manager/safari/alluser', [HomeController::class,'alluser']);

Route::get('/manager/safari/addnews', [HomeController::class,'addnews']);

Route::post('/manager/safari/addnews', [HomeController::class,'addnews_post']);


Route::get('/manager/safari/news_dl/{id}', [HomeController::class,'news_dl']);

Route::get('/manager/safari/all_safari', [HomeController::class,'all_safari']);

Route::get('/manager/safari/email', [HomeController::class,'email']);
Route::get('/manager/safari/generate_code/{id}', [HomeController::class,'generate_code']);
Route::get('/manager/safari/dl_generate_code/{id}', [HomeController::class,'dl_generate_code']);

Route::get('/manager/safari/pay', [HomeController::class,'pay']);
