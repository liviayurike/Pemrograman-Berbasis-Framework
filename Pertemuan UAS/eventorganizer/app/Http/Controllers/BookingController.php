<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = \App\Booking::all();

        return $bookings->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'namalengkap' => 'required',
            'alamat' => 'required',
            'telepon' => 'required',
            'email' => 'required',
            'namaacara' => 'required',
            'pilihpaket' => 'required',
            'tambahanlain' => 'required',
            'tanggalacara' => 'required',
        ]);

        $project = \App\Booking::create([
            'namalengkap' => $validatedData['namalengkap'],
            'alamat' => $validatedData['alamat'],
            'telepon' => $validatedData['telepon'],
            'email' => $validatedData['email'],
            'namaacara' => $validatedData['namaacara'],
            'pilihpaket' => $validatedData['pilihpaket'],
            'tambahanlain' => $validatedData['tambahanlain'],
            'tanggalacara' => $validatedData['tanggalacara'],
        ]);

        $msg = [
            'success' => true,
            'message' => 'Booking created successfully!'
        ];

        return response()->json($msg);
    }

    public function getBooking($id) // for edit and show
    {
        $booking = \App\Booking::find($id);

        return $booking->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'namalengkap' => 'required',
            'alamat' => 'required',
            'telepon' => 'required',
            'email' => 'required',
            'namaacara' => 'required',
            'pilihpaket' => 'required',
            'tambahanlain' => 'required',
            'tanggalacara' => 'required',
        ]);

        $booking = \App\Booking::find($id);
        $booking->namalengkap = $validatedData['namalengkap'];
        $booking->alamat = $validatedData['alamat'];
        $booking->telepon = $validatedData['telepon'];
        $booking->email = $validatedData['email'];
        $booking->namaacara = $validatedData['namaacara'];
        $booking->pilihpaket = $validatedData['pilihpaket'];
        $booking->tambahanlain = $validatedData['tambahanlain'];
        $booking->tanggalacara = $validatedData['tanggalacara'];
        $booking->save();

        $msg = [
            'success' => true,
            'message' => 'Booking updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $booking = \App\Booking::find($id);
        if (!empty($article)) {
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Booking deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Booking deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
