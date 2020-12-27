<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v26.0.2/dist/font-face.css" rel="stylesheet" type="text/css" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <title>Document</title>
    <style>
        body{
            font-family: 'Vazir';
        }
    </style>
</head>
<body>
    
@if($e == 'ok')


<div class="row" style="margin-top: 40px;">
    <div class="col-md-2">
        
    </div>

    <div class="col-md-8" style="text-align:center;background:#76B041">
        <p style="color:white;padding:30px">پرداخت با موفقیت انجام شد </p>
        <p style="color:white;padding:10px;font-size:10px">بعد از لحطه به سایت منتقل خواهید شد</p>

        <script>
        setTimeout(() => {
            window.location = "/panel";

        }, 3000);
        </script>
    </div>
</div>




@elseif($e == 'no')


<div class="row" style="margin-top: 40px;">
    <div class="col-md-2">
        
    </div>

    <div class="col-md-8" style="text-align:center;background:#DB5461">
        <p style="color:white;padding:30px"> اطلاعات پرداخت همخوانی ندارد با پشتیبانی تماس بگیرید</p>
        <p style="color:white;padding:10px;font-size:10px">بعد از لحطه به سایت منتقل خواهید شد</p>

        <script>
        setTimeout(() => {
            window.location = "/panel";

        }, 3000);
        </script>
    </div>
</div>



@else

<div class="row" style="margin-top: 40px;">
    <div class="col-md-2">
        
    </div>

    <div class="col-md-8" style="text-align:center;background:#DB5461">
        <p style="color:white;padding:30px">پرداخت توسط شما کنسل شده است </p>
        <p style="color:white;padding:10px;font-size:10px">بعد از لحطه به سایت منتقل خواهید شد</p>

        <script>
        setTimeout(() => {
            window.location = "/panel";

        }, 3000);
        </script>
    </div>
</div>


@endif
</body>
</html>
