<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function create(Request $request){
        $book = new Book;
        $book->createBook($request);
        return response()->json(['book' => $book], 200);
    }

    public function index(){
        $book = Book::all();
        return response()->json(['book'=> $book], 200);
    }

    public function show($id){
        $book = Book::find($id);
        return response()->json(['book'=> $book], 200);
    }

    public function update(Request $request, $id){
        $book = Book::find($id);
        $book->updateBook($request);
        return response()->json(['book' => $book], 200);
    }

    public function delete($id){
        $book = Book::find($id);
        $book->delete();
        return response()->json(['Livro deletado com sucesso!', 200]);
    }

}
