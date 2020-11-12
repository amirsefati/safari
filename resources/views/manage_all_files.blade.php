@extends('manager_master')

@section('content')

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <div style="text-align: center;">
            <p style="font-size: 22px;">
                مدیریت فایل های ارسالی
            </p>
        </div>
        <br/>
        <div style="overflow-y: auto;">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>نام </th>
                <th>ایمیل</th>
                <th>نوع</th>
                <th>عنوان</th>
                <th>محور</th>
                <th>فایل ها</th>
                <th>تاریخ ارسال</th>
                <th>عملیات</th>
            </tr>
            </thead>
            <tbody>
            @foreach($datafile as $file)
                <tr>
                    <td>{{App\Models\File::find($file->id)->file_to_user[0]->name }}</td>
                    <td>{{App\Models\File::find($file->id)->file_to_user[0]->email }}</td>
                    <td>{{$file->kind}}</td>

                    <td>{{$file->title}}</td>
                    <td>{{$file->axis}}</td>
                    <td>
                    @foreach(json_decode($file->files) as $d)
                        <a href="{{$d}}">
                            <img src="/images/dw.png" width="30px" alt="">
                        </a>
                    @endforeach
                    </td>
                    <td>{{$file->created_at}}</td>
                    <td style="min-width: 200px;">
                        <form action="/manager/safari/action_on_filesdt" method="POST">
                        @csrf
                        <input name="id" type="text" value="{{$file->id}}" hidden>
                        <input name="action" value="{{$file->status}}" type="text" style="width: 70%;" placeholder="بازخورد" class="col-md-8 form-control" required >
                        <button style="width: 25%;" class="btn btn-success"> اعمال </button>
                        </form>
                    </td>
                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    </div>
</div>


@endsection