<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
        @vite(['resources/css/app.css'])
    </head>
    <body class="font-sans antialiased">
         <div class="p-12">
            <h1>PHP Programming Assessment A by Norfaizad</h1>
            @if(session('message'))
                <div class="text-red-600"> {{ session('message') }} </div>
            @endif
            <p>Please enter number of player</p>
            <p id="error"></p>
            <form action="/php" method="post">
            @csrf
            <input
                id="player-input"
                type="number"
                name="players"
            />
            <button
                id="play-btn"
                class="p-2 bg-gray-500 text-white"
            >
                DISTRIBUTE CARD
            </button>
            </form>
        </div>
    </body>
</html>
