<?php
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//api routes for books and authors every method is in the api controller
Route::get('getauthors',[ApiController::class,'getAuthors'])->name('getauthors');
Route::get('getauthor',[ApiController::class,'getAuthor'])->name('getauthor');

Route::get('getbooks',[ApiController::class,'getBooks'])->name('getbooks');

Route::get('getbook',[ApiController::class,'getBook'])->name('getbook');

Route::post('addauthor',[ApiController::class,'createAuthor'])->name('addauthor');
Route::post('updateauthor',[ApiController::class,'updateAuthor'])->name('updateauthor');
Route::post('updatebook',[ApiController::class,'updateBook'])->name('updatebook');