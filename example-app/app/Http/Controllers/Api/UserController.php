<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=> 'required',
            'email'=> 'required|email|unique:users',
            'phone'=> 'required',
            'password'=> 'required|confirmed'

        ]);
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json([
            "status" => 1,
            "msg" => "!registro exitoso¡"
        ]);
    }


    public function login(Request $request){
        $request->validate([
            
            'email'=> 'required|email',
            'password'=> 'required'

        ]);

        $user = User::where("email","=", $request->email)->first();

        if(isset($user->id)){
            if(Hash::check($request->password, $user->password)){
                //CREACION DEL TOKEN
               $token = $user->createToken("auth_token")->plainTextToken;
                //SI ES EXITOSO
                return response()->json([
                    "status" => 1,
                    "msg" => "usuario logeado correctamente",
                    "access_token" => $token
                ]);
            }else{
                return response()->json([
                    "status" => 0,
                    "msg" => "la contraseña es incorrecta"
                ], 404);
            }
        }else{
            return response()->json([
                "status" => 0,
                "msg" => "usuario no registrado"
            ], 404);
        }
    }

    public function userProfile(){
        return response()->json([
            "status" => 0,
            "msg" => "Perfil del usuario",
            "data" => auth()->user()
        ],);
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            "status" => 1,
            "msg" => "logout exitoso",
            
        ],);
    }
}
