<?php

namespace App\Http\Controllers;

use App\Models\File;
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
            'etc' => $data['activity']

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
        $input = $request['input'];
        $select = $request['select'];
        $files = $request['files'];
        $kind = $request['kind'];
        
            $urls = [];
            foreach($files as $image){
                $name = Auth::user()->email.'-'.time().'-'.rand(100,999999).
                '.'.$image->getClientOriginalExtension();
                $destinationPath = public_path('/files/');
                $image->move($destinationPath, $name);
                $url = '/files/' . $name ;
                array_push($urls,$url);
            }
            
            

        $file = File::create([
            'title' => $input,
            'axis' => $select,
            'kind' => $kind,
            'files' => json_encode($urls),
            'status' => 'در حال بررسی',
            'etc1' => rand(25000,900000),
        ]);
        $user_id = Auth::user()->id;
        $file->file_to_user()->attach($user_id);

        return ['status'=>200];
    }

    public function checkfiles(Request $request){
        return 'ok';
    }


    public function get_media(Request $request){
        if(Auth::check()){
            $user = Auth::user();
            $data = $user->user_to_file;
            return ['status'=>200,'data'=>$data];
        }
    }

    public function logout(){
        Auth::logout();
        return ['status'=>200];
    }
}
