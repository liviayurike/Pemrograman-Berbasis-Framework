import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookingShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booking: {}
        };
    }

    componentDidMount() {
        const bookingId = this.props.match.params.id;

        axios.get(`/api/booking/${bookingId}`).then(response => {
            this.setState({
                article: response.data
            });
        });
    }

    render() {
        const { booking } = this.state;

        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Nama Lengkap: {booking.namalengkap}
                            </div>
                            <div className="card-body">
                                <p>{booking.alamat}</p>
                                <p>{booking.telepon}</p>
                                <p>{booking.email}</p>
                                <p>{booking.namaacara}</p>
                                <p>{booking.pilihpaket}</p>
                                <p>{booking.tambahanlain}</p>
                                <p>{booking.tanggalacara}</p>
                                <Link className="btn btn-primary" to={`/`}>
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingShow;
