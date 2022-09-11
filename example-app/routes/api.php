<?php
use App\Http\Controllers\Api\UsuariosController;
use App\Http\Controllers\Api\UserController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



/* Route::controller(UsuariosController::class)->group ( function () {
        Route::get('/usuarios','index');
        Route::post('/usuario','store');
        Route::get('/usuario/{id}','show');
        Route::put('/usuario/{id}','update');
        Route::delete('/usuario/{id}','destroy');        
}); */

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::get('/usuarios',[UserController::class,'index']);
Route::delete('/usuario/{id}',[UserController::class,'destroy']);

Route::group(['middleware'=>["auth:sanctum"]],function(){

      //rutas
      Route::get('user-profile',[UserController::class,'userProfile']); 
      Route::get('logout',[UserController::class,'logout']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });