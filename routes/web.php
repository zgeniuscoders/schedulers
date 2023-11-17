<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('default');
});
Route::view('{any}', 'default')->where('any','.*');
