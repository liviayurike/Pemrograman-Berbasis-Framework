<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = "bookings";
    protected $fillable = ['namalengkap', 'alamat', 'telepon', 'email', 'namaacara', 'pilihpaket', 'tambahanlain', 'tanggalacara'];
}
