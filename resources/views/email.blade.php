@extends('manager_master')

@section('content')

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
    <div style="overflow-y: auto;">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>نام </th>
                <th>ایمیل</th>
                <th>دانشگاه و تشکل</th>
                <th>شماره تلفن</th>
                <th> تعداد فایل ارسالی</th>
                <th>کد تخفیف</th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr>
                    <td>{{$user->name}}</td>
                    <td>{{$user->email}}</td>
                    <td>{{$user->university}} - {{$user->etc}}</td>
                    <td>{{$user->phone}}</td>
                    <td>{{App\Models\User::where('id',$user->id)->first()->user_to_file->count()}}</td>
                    <td style="text-align: center;">
                    @if(strlen($user->picture) > 5)
                    <a href="/manager/safari/dl_generate_code/{{$user->id}}"><button class="btn btn-success">{{$user->picture}}</button></a>
                    @else
                        <a href="/manager/safari/generate_code/{{$user->id}}"><button class="btn btn-danger">ساختن</button></a>
                    @endif
                    </td>

                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    </div>
</div>

@endsection