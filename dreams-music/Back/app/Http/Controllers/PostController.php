<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\PostRequest;
use DB;


class PostController extends Controller
{
    public function create(PostRequest $request){
        $post = new Post;
        $post->createPost($request);
        $post->save();
        return response()->json(['post' => $post], 200);
    }

    public function index(){
        $post = DB::table('posts')
        ->join('users', 'user_id', '=', 'users.id')
        ->select('posts.*',DB::raw('users.name as nameUser'))
        ->get();
        return response()->json(['post'=> $post], 200);
    }

    public function listPostComments($id){
        $post = Post::find($id);
        $postComments = $post ->comments()->with("user")
        ->get();
        return response()->json(['postComments'=> $postComments], 200);     
    }

    public function show($id){
        $post = Post::find($id);
        $user_id= $post -> user_id;
        $user = User::find($user_id);
        return response()->json(['post'=> $post, 'user'=>$user], 200);
    }

    public function update(Request $request, $id){
        $post = Post::find($id);
        $post->updatePost($request);
        return response()->json(['post' => $post], 200);
    }

    public function delete($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json(['Post deletado com sucesso!'],200);
    }
}
