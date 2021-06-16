@extends('layouts.backdrop')

@section('content')
<div class="container div-gallery-feed">
    <div class="row">
        <div class="col-md-12">
            <h3 class="title-gallery-feed">OUR BACKDROP</h3>
        </div>
    </div>
    <div class="row gallery-feed">
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/1.png">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/2.png">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/3.png">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/4.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/5.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/6.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/7.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/8.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/9.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/10.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/11.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/Backdrop/12.png">
        </div>
    </div>


    <a href="{{ url('/produk') }}" class="more-gallery-feed">Previous</a>
    <br>

    <div class="center">
        <a href="https://www.instagram.com/nggaegawe/" class="more-gallery-feed">CHECK OUR INSTAGRAM</a>
    </div>
</div>
@endsection