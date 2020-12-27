@extends('manager_master')

@section('content')

<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <div style="text-align: center;">
            <p style="font-size: 22px;">
                پرداختی ها
            </p>
        </div>
        <br/>
        <div style="overflow-y: auto;">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th> کد پرداخت </th>
                <th>قیمت</th>
                <th>پرداخت کننده</th>
                <th>وضعیت</th>
                <th>کد پیگیری پرداخت از درگاه</th>
            </tr>
            </thead>
            <tbody>
            @foreach($pays as $pay)
                <tr>
                    <td>{{$pay->meri_code}}</td>
                    <td>{{$pay->price}}</td>
                    <td>{{App\Models\User::where('id',$pay->user_id)->first()->name}}</td>
                    <td>{{$pay->status}}</td>
                    <td>{{$pay->redid}}</td>

                </tr>
            @endforeach

            </tbody>
        </table>
        </div>
    </div>
</div>


@endsection