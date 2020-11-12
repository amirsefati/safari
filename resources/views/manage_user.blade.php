@extends('manager_master')

@section('content')

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <div style="text-align: center;">
            <p style="font-size: 22px;">
                مدیریت ثبت نام کنندگان
            </p>
        </div>
        <br/>
        <div style="overflow-y: auto;">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>نام </th>
                <th>ایمیل</th>
                <th>دانشگاه</th>
                <th>شماره تلفن</th>
                <th>تولد</th>
                <th>تشکل</th>
                <th>تعداد آثار ارسالی</th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
                <tr>
                   <td>{{$user->name}}</td>
                   <td>{{$user->email}}</td>
                   <td>{{$user->university}}</td>
                   <td>{{$user->phone}}</td>
                   <td>{{$user->born}}</td>
                   <td>{{$user->etc}}</td>
                   <td>
                        {{App\Models\User::find($user->id)->user_to_file->count()}}
                   </td>

                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    </div>
</div>


@endsection