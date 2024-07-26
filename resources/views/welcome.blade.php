<html>
    <head>
        <title>React Js Integration</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app" name="{{$name}}"></div>
        @viteReactRefresh
        @vite('resources/js/app.js')
    </body>
</html>