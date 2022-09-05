<?php
use App\Http\Controllers\Api\UsuariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::controller(UsuariosController::class)->group ( function () {
        Route::get('/usuarios','index');
        Route::post('/usuario','store');
        Route::get('/usuario/{id}','show');
        Route::put('/usuario/{id}','update');
        Route::delete('/usuario/{id}','destroy');        
});