<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Friend;
use App\Models\User;


class FriendController extends Controller
{
    public function create(Request $request){
        $friend = new Friend;
        $friend->createFriend($request);
        $friend->save();
        return response()->json(['friend' => $friend], 200);
    }

    public function index(){
        $friend = Friend::all();
        return response()->json(['friend'=> $friend], 200);
    }

    public function show($id){
        $friend = Friend::find($id);
        return response()->json(['friend'=> $friend], 200);
    }

    public function delete($id){
        $friend = Friend::find($id);
        $friend->delete();
        return response()->json(['Friend deletado com sucesso!'],200);
    }
}