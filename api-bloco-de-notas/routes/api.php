<?php

use App\Http\Controllers\NotepadController;
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

Route::get('/notes',[NotepadController::class, 'list'])->name('note.list');
Route::post('/note', [NotepadController::class, 'newnote'])->name('note.newnote');
Route::put('/note/{id}', [NotepadController::class, 'updatenote'])->name('note.updatenote');
Route::delete('/note/{id}', [NotepadController::class, 'deletenote'])->name('note.deletenote');
