<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PhpController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function randomPlayer($max)
    {
        return rand(0, $max - 1);
    }

    public function createPlayers($numberOfPlayers)
    {
        $players = [];
        for ($i = 0; $i < $numberOfPlayers; $i++) {
            $players[$i] = [];
        }
        return $players;
    }

    public function generateDeck()
    {
        $cardDeck = [];
        // Spade = S, Heart = H, Diamond = D, Club = C
        $pips = collect(["S", "H", "D", "C"]);

        // Card 2 to 9 are, as it is, 1=A,10=X,11=J,12=Q,13=K
        $number = collect(["A", "2", "3", 4, 5, 6, 7, 8, 9, "X", "J", "Q", "K"]);

        $cardDeck = $pips->map(function ($card) use ($number) {
            return $number->map(function ($n) use ($card) {
                return $card . "-" . $n;
            });
        });

        return Arr::flatten($cardDeck);
    }

    public function distributeCard($numberOfPlayers)
    {

        if ($numberOfPlayers <= 0 || $numberOfPlayers === "") {
            return redirect()->back()->with(["message" => "Input value does not exist or value is invalid"]);
        }

        $cardDeck = $this->generateDeck();

        $players = $this->createPlayers($numberOfPlayers);
        // dd($this->randomPlayer($numberOfPlayers));
        foreach ($cardDeck as $card) {
            $random = $this->randomPlayer($numberOfPlayers);

            array_push($players[$random], $card);
        };


        foreach ($players as $player) {
            echo join(" ", $player) . "<br>";
        }
    }
}
