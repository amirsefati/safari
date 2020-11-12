@extends('manager_master')

@section('content')




<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <div style="text-align: center;">
            <p style="font-size: 22px;">
                مدیریت خبر ها  
            </p>
        </div>
        <br/>

<form action="/manager/safari/addnews" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="row" style="background: #D6D6D6;padding:20px;border-radius:10px">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-5">
                <label for="title">عنوان خبر</label>
                <input type="text" class="form-control" name="title" required>
            </div>
            <div class="col-md-7">
                <label for="desc">متن خبر</label>
                <input type="text" class="form-control" name="desc" required>
            </div>
        </div>
    <br/>
        <div class="row">
                <div class="col-md-4">
                    <label for="img">آپلود عکس</label>
                    <input type="file" name="img" required>
                </div>

                <div class="col-md-8">
                    <button type="submit" class="btn btn-success" style="margin-top:15px;">ارسال خبر</button>
                </div>
        </div>
    </div>
    </div>
    </form>

    <br/>
    <br/>
    <br/>



        <div style="overflow-y: auto;">
        <table class="table table-bordered">
            <thead>
            <tr>

                <th>عکس خبر </th>
                <th>عنوان خبر </th>
                <th>متن خبر </th>
                <th> حذف </th>

            </tr>
            </thead>
            <tbody>
            @foreach($news as $new)
                <tr>
                    <td><img src="{{$new->img}}" style="width: 30px;" alt=""></td>
                    <td>{{$new->title}}</td>
                    <td>{{$new->desc}}</td>
                    <td>
                        <a href="/manager/safari/news_dl/{{$new->id}}">
                            حذف
                        </a>
                    </td>

                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    </div>
</div>

@endsection