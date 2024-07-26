<?php

namespace App\View\Components;

use Illuminate\View\Component;

class AppLayout extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(public string $pageTitle)
    {
    }

    /**
     * Get the view / contents that represents the component.
     * @return \Closure|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Support\Htmlable|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|string
     */
    public function render()
    {
        return view('site::layouts.default')->with(['page_title' => $this->pageTitle ?? 'common.home']);
    }
}
