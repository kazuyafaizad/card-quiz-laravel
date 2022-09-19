<?php

use App\Http\Controllers\PhpController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/react', function () {
    return Inertia::render('react');
})->name('react');

Route::get('/php', function () {
    return (new PhpController)->index();
})->name('php');

Route::post('/php', function () {
    return (new PhpController)->distributeCard(request()->players);
})->name('post-php');

Route::get('/javascript', function () {
    return File::get(public_path() . '/javascript.html');
})->name('javascript');

require __DIR__ . '/auth.php';
