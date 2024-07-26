<html>

<head>
    <title>React Js Integration</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.datatables.net/2.0.8/css/dataTables.dataTables.min.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.min.js"></script>
    
</head>

<body>
    <div id="dasbhoard"></div>
    @viteReactRefresh
    @vite('resources/js/app.js')
</body>


<script>
    let table = new DataTable('#myTable');
</script>

</html>