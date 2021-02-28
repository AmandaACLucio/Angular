<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;


class CommentController extends Controller
{
    public function create(Request $request){
        $comment = new Comment;
        $comment->createComment($request);
        return response()->json(['comment' => $comment], 200);
    }

    public function index(){
        $comment = Comment::all();
        return response()->json(['comment'=> $comment], 200);
    }

    public function show($id){
        $comment = Comment::find($id);
        return response()->json(['comment'=> $comment], 200);
    }

    public function update(Request $request, $id){
        $comment = Comment::find($id);
        $comment->updateComment($request);
        return response()->json(['comment' => $comment], 200);
    }

    public function delete($id){
        $comment = Comment::find($id);
        $comment->delete();
        return response()->json(['Comentario deletado com sucesso!', 200]);
    }
}
