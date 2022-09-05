<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuariosController extends Controller
{
   
    public function index()
    {
        $usuarios = Usuario::all();
        return $usuarios;
    }

  
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nombre = $request->nombre; 
        $usuario->email = $request->email; 
        $usuario->telefono = $request->telefono;
          
        $usuario->save();
    }

   
    public function show($id)
    {
        $usuario = Usuario::find($id);
        return $usuario;
    }

    
    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($request->id);
        $usuario->nombre = $request->nombre; 
        $usuario->email = $request->email; 
        $usuario->telefono = $request->telefono;

        $usuario->save();
        return $usuario;
    }

   
    public function destroy($id)
    {
        $usuario = Usuario::destroy($id);
        return $usuario;
    }
}
