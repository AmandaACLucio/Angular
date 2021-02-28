<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function create(Request $request){
        $user = new User;
        $user->createUser($request);
        $user->save();
        return response()->json(['user' => $user], 200);
    }

    public function index(){
        $user = User::all();
        return response()->json(['user'=> $user], 200);
    }

    public function show($id){
        $user = User::find($id);
        return response()->json(['user'=> $user], 200);
    }

    public function update(Request $request, $id){
        $user = User::find($id);
        $user->updateUser($request);
        return response()->json(['user' => $user], 200);
    }

    public function delete($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['Usuario deletado com sucesso!', 200]);
    }

}
