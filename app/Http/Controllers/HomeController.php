<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function loginform(Request $request){
        $data = $request['data'];
        $user = User::where('email',$data['username'])->where('password',$data['password'])->first();
        if(strlen($user)> 20){
            Auth::loginUsingId($user->id);
            return 'ok';
        }else{
            return $user;
        }
    }
    
    public function registeruser(Request $request){
        $data = $request->data;
        
        if(User::where('email',$data['email'])->count() > 0){
            return '102';
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'born' => $data['born'],
            'university' => $data['university'],
            'password' => $data['password'],

        ]);
        Auth::loginUsingId($user->id);
        return '200';

    }

    public function checklogin(){
        if(Auth::check()){
            return ['status'=>200,'user'=>Auth::user()];
        }else{
            return ['status'=>102];
        }
    }

    public function upload_file(Request $request){
        
    }
}
