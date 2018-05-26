<style>
.purple-bg
{
    background-color: #7F618C;
    color: #fff;
}
.text-color{
    color:#7F618C;
}
.centered{
    text-align: center;
    margin-buttom: auto;
    margin-top: auto;
    background-position: 0px -4px;
    position: relative;
}
.logo
{
    width: 138px;
    height: 30px;
    text-align: center;
    margin: 10px 0px 27px 40px;
    background-position: 0px -4px;
    position: relative;
}
</style>

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="text-center">
                    <img src="..." alt="..."/>
                </div>
                <div class="centered text-color">{{ __('Login to the Department Of Computer Science University Of Buea') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row justify-content-center">
                            <!--<label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>-->

                            <div class="col-md-6 ">
                            <label for="email" class="col-form-label text-md-right text-color">{{ __('E-Mail') }}</label>
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus placeholder="email">

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row justify-content-center ">
                            <!--<label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>-->

                            <div class="col-md-6 ">
                                <label for="password" class="col-form-label text-color">{{ __('Password') }}</label>
                                <a  class="btn btn-link text-lg-right text-color" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required placeholder="password">

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox text-md-left">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row justify-content-center ">
                            <div class="col-md-6 ">
                                <button type="submit" class="btn btn-lg btn-block purple-bg">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
