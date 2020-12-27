<!doctype html>
<html lang="fa">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>مدیریت خروش</title>
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v26.0.2/dist/font-face.css" rel="stylesheet" type="text/css" />

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link href="{{ asset('css/manager.css') }}" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
  .btn-group-lg>.btn, .btn-lg{
    padding: 3px 10px;
  }
  
  </style>
</head>
<body>
    <div class="container-fluid">

    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header  navbar-right">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand " href="#">مدریت سایت خروش</a>
    </div>
    <div class="collapse navbar-collapse navbar-right" id="myNavbar">
      <ul class="nav navbar-nav">
            <li class="{{basename(url()->current()) == 'email' ? 'active' : ''}}"><a href="/manager/safari/email"> ایمیل</a></li>
            <li class="{{basename(url()->current()) == 'all_safari' ? 'active' : ''}}"><a href="/manager/safari/all_safari">انباری</a></li>
            <li class="{{basename(url()->current()) == 'addnews' ? 'active' : ''}}"><a href="/manager/safari/addnews">افزودن خبر</a></li>
            <li class="{{basename(url()->current()) == 'alluser' ? 'active' : ''}}"><a href="/manager/safari/alluser">مدیریت کاربران</a></li>
            <li class="{{basename(url()->current()) == 'safari' ? 'active' : ''}}"><a href="/manager/safari">مدیریت فایل ها</a></li>

      </ul>
    </div>
  </div>
</nav>
    @if(Auth::check())
      @if(Auth::user()->email == 'safari@gmail.com')
        @yield('content')
      @endif
    @else
    <script>
      window.location = "/login"
    </script>  
    @endif
    </div>
</body>

<script>
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
</script>
</html>
