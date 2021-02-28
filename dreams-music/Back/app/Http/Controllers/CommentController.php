<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CommentRequest;
use DB;


class CommentController extends Controller
{
    public function create(CommentRequest $request){
        $comment = new Comment;
        $comment->createComment($request);
        $comment->save();
        return response()->json(['comment' => $comment], 200);
    }

    public function index(){
        $comment = DB::table('comments')
        ->join('users', 'user_id', '=', 'users.id')
        ->select('comments.*',DB::raw('users.name as nameUser'))
        ->get();
        return response()->json(['comment'=> $comment], 200);
    }


    public function show($id){
        $comment = Comment::find($id);
        return response()->json(['comment'=> $comment], 200);
    }

    public function delete($id){
        $comment = Comment::find($id);
        $comment->delete();
        return response()->json(['Comentário deletado com sucesso!'], 200);
    }
}
