@extends('layouts.produk')

@section('content')
<div class="container">
    <div class="content">
        <div class="jumbotron jumbotron">
            <div class="container text-center">
                <img src="img/Logooo.png" width="200"><br><br>
                <div class="title m-b-md">
                    EVENT ORGANIZER
                </div>
                <p class="lead">Decoration of engagement, aqiqoh, birthday party, akad, photo booth </p>
                <p class="lead">| cake topper | table set |</p>
            </div>
        </div>



    </div>
    <div class="row">
        <div class="col text-center">
            <h1>NGGAEGAWE</h1>
        </div>
    </div>

    <div class="row" style="background-image: url(img/bacdrop/bg2.png">
        <div class="col-md">
            <div class="card" style="width: 18rem;">
                <a href="{{ url('backdrop') }}"><img src="img/Backdrop/backdrop.png" class="card-img-top" alt="Card image cap"></a>
                <center>
                    <div class="card-body">
                        <p class="card-text"><b>BACKDROP</b></p>
                    </div>
                </center>
            </div>
        </div>

        <div class="col-md">
            <div class="card" style="width: 18rem;">
                <a href="{{ url('birthday') }}"><img src="img/Birthday/birthday.png" class="card-img-top" alt="Card image cap"></a>
                <center>
                    <div class="card-body">
                        <p class="card-text"><b>BIRTHDAY</b></p>
                    </div>
                </center>
            </div>
        </div>

        <div class="col-md">
            <div class="card" style="width: 18rem;">
                <a href="{{ url('engagement') }}"><img src="img/Engagement/engagement.png" class="card-img-top" alt="Card image cap"></a>
                <center>
                    <div class="card-body">
                        <p class="card-text"><b>ENGAGEMENT</b></p>
                    </div>
                </center>
            </div>
        </div>
    </div>
</div>
</div>
@endsection