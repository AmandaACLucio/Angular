<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserRequest;
use App\Http\resources\UserResource;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function create(UserRequest $request){
        $user = new User;
        $user->createUser($request);
        $user->save();
        return response()->json(new UserResource($user), 200);
    }

    public function index(){
        $user = User::all();
        return response()->json(UserResource::collection($user), 200);
    }

    public function listUserPosts($id){
        $user = User::find($id);
        $userPosts = $user ->posts()
        ->get();
        return response()->json(['userPosts'=> $userPosts], 200);     
    }

    public function show($id){
        $user = User::find($id);
        return response()->json(new UserResource($user), 200);
    }

    public function listUserFriends($id){
        $user = User::find($id);
        $userFriends = $user->friends()
        ->get();
        return response()->json(['userFriends'=> $userFriends], 200);     
    }

    public function update(UserRequest $request, $id){
        $user = User::find($id);
        $user->updateUser($request);
        return response()->json(new UserResource($user), 200);
    }

    public function delete($id){
        $user = User::find($id);
        $user->delete();
        return response()->json(['Usuario deletado com sucesso!'], 200);
    }
}
