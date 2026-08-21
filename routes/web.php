<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::inertia('/login', 'auth/Login');
Route::inertia('/register', 'auth/Register');