<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DistributeCardTest extends TestCase
{
    public function test_see_php_page()
    {
        $response = $this->get('/php');

        $response->assertSeeText("PHP Programming Assessment A by Norfaizad");
    }

    public function test_see_react_page()
    {
        $response = $this->get('/react');

        $response->assertStatus(200);
    }

    public function test_input_negative()
    {
        $response = $this->post(route('php'), [
            'players' => -2,
        ]);
        $response->assertRedirect(session()->previousUrl());
    }

    public function test_input_positive()
    {
        $response = $this->post(route('php'), [
            'players' => 2,
        ]);

        $response->assertStatus(200);
    }
}
