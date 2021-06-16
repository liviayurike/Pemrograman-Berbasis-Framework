@extends('layouts.birthday')

@section('content')
<div class="container div-gallery-feed">
    <div class="row">
        <div class="col-md-12">
            <h3 class="title-gallery-feed">OUR BIRTHDAY</h3>
        </div>
    </div>
    <div class="row gallery-feed">
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/1.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/2.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/3.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/4.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/5.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/6.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/7.jpg">
        </div>
        <div class="col-md-4 col-sm-6 col-xs-6">
            <img class="img-responsive" src="img/birthday/8.jpg">
        </div>
    </div>

    <a href="{{ url('/produk') }}" class="more-gallery-feed">Previous</a>
    <br>

    <div class="center">
        <a href="https://www.instagram.com/nggaegawe/" class="more-gallery-feed">CHECK OUR INSTAGRAM</a>
    </div>
</div>
@endsection