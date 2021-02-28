<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PassportController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//ROTAS NãO PROTEGIDAS


// Passport Controller
Route::post('register', [PassportController::class, 'register']);
Route::post('login', [PassportController::class, 'login']);

// User Controller
Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::get('users/{id}/posts', [UserController::class, 'listUserPosts']);
Route::post('users', [UserController::class, 'create']);

// Friend Controller
Route::get('friends', [FriendController::class, 'index']);
Route::get('friends/{id}', [FriendController::class, 'show']);

//Post Controller
Route::get('posts', [PostController::class, 'index']);
Route::get('posts/{id}', [PostController::class, 'show']);
Route::get('post/{id}/comments', [PostController::class, 'listPostComments']);


//Comment Controller
Route::get('comments', [CommentController::class, 'index']);
Route::get('comments/{id}', [CommentController::class, 'show']);

Route::get('users/{id}/friends', [UserController::class, 'listUserFriends']);



//ROTAS PROTEGIDAS

Route::group(['middleware' => 'auth:api'], function() {
    // Passport Controller
    Route::get('logout', [PassportController::class, 'logout']);
    Route::get('getDetails', [PassportController::class, 'getDetails'])->middleware('auth.admin');
    
    // User Controller
	Route::put('users/{id}', [UserController::class, 'update'])->middleware('owner.account');
	Route::delete('users/{id}',  [UserController::class, 'delete'])->middleware('owner.account');

    // Friend Controller
	Route::post('friends', [FriendController::class, 'create']);
	Route::delete('friends/{id}', [FriendController::class, 'delete'])->middleware('friendship');

	//Post Controller
	Route::post('posts', [PostController::class, 'create']);
	Route::put('posts/{id}', [PostController::class, 'update'])->middleware('owner.post');
	Route::delete('posts/{id}', [PostController::class, 'delete'])->middleware('owner.post');

	//Comment Controller
	Route::post('comments', [CommentController::class, 'create']);
	Route::delete('comments/{id}', [CommentController::class, 'delete'])->middleware('owner.comment');
});




