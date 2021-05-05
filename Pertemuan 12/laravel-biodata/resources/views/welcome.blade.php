<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel-Biodata</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->

    <style>
        body {
            font-family: 'Nunito', sans-serif;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body background="/images/bg.jfif">
    <div class="container h-100" style="padding-top:25px;">
        <div class="jumbotron">
            <h2 align="center"><b>Biodata</b></h2> <br>
            <center>
                <img src="images/profil.jpg" alt="profil" align="center" height="200px" width="150px"> <br> <br>
            </center>
            <table width="800px" align="center">
                <tbody>
                    <tr>
                        <td width="25%">Nama Lengkap</td>
                        <td width="1%">:</td>
                        <td>Livia Yurike Khuril Maula</td>
                    </tr>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>:</td>
                        <td>Malang, 03 Juli 1999</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td>Jl Piranha Atas No 264 Gg 22 Malang</td>
                    </tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>kliviayurike@gmail.com</td>
                    </tr>
                </tbody>
            </table>
            <br><br>
            <h2 align="center"><b>Pendidikan Formal</b></h2>
            <table width="800px" align="center">
                <tbody>
                    <tr>
                        <td width="25%">2018- Sekarang</td>
                        <td width="1%">:</td>
                        <td>Politeknik Negeri Malang, Jurusan Teknik Informatika</td>
                    </tr>
                    <tr>
                        <td>2015 - 2018</td>
                        <td>:</td>
                        <td>SMKN 5 Malang</td>
                    </tr>
                    <tr>
                        <td>2012 - 2015</td>
                        <td>:</td>
                        <td>SMPN 11 Malang</td>
                    <tr>
                        <td>2006 - 2012</td>
                        <td>:</td>
                        <td>SDN Tunjungsekar 1 Malang</td>
                    </tr>
                    </tr>
                </tbody>
            </table>
            <br><br>
            <h2 align="center"><b>Sosial Media</b></h2>
            <table width="800px" align="center">
                <tbody>
                    <tr>
                        <td width="25%">Instagram</td>
                        <td width="1%">:</td>
                        <td>@liviayurike</td>
                    </tr>
                    <tr>
                        <td>Github</td>
                        <td>:</td>
                        <td>liviayurike</td>
                    </tr>
                    <tr>
                        <td>Line</td>
                        <td>:</td>
                        <td>@liviaaaay</td>
                    <tr>
                        <td>Whatsapp</td>
                        <td>:</td>
                        <td>082228773286</td>
                    </tr>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <br><br>

</body>

</html>