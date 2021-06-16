import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class BookingIndex extends Component {
    constructor() {
        super();
        this.state = {
            bookings: [],
            msg: null,
            type: null,
            flash: false,
            alert: null
        };
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    componentDidMount() {
        axios.get("/api/bookings").then(response => {
            this.setState({
                bookings: response.data
            });
        });
    }

    confirmDelete(id) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Kalau udah dihapus, nggak bakal balik lagi.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(id) {
        axios.delete(`/api/booking/delete/${id}`).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                this.hideAlert();
                this.goToHome();
            }
        });
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
            >
                Deleted booking successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.componentDidMount();
        this.hideAlert();
    }

    render() {
        const { bookings } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Booking</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/create"
                                >
                                    Create new booking
                                </Link>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th
                                                    width="50"
                                                    className="text-center"
                                                >
                                                    No
                                                </th>
                                                <th>Nama Lengkap</th>
                                                <th
                                                    width="200"
                                                    className="text-center"
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((booking, i) => (
                                                <tr key={i}>
                                                    <td
                                                        width="50"
                                                        className="text-center"
                                                    >
                                                        {i + 1}
                                                    </td>
                                                    <td>
                                                        {booking.namalengkap}
                                                    </td>
                                                    <td
                                                        width="200"
                                                        className="text-center"
                                                    >
                                                        <div className="btn-group">
                                                            <Link
                                                                className="btn btn-primary"
                                                                to={`/booking/${booking.id}`}
                                                            >
                                                                Detail
                                                            </Link>
                                                            <Link
                                                                className="btn btn-success"
                                                                to={`/booking/edit/${booking.id}`}
                                                            >
                                                                Edit
                                                            </Link>
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() =>
                                                                    this.confirmDelete(
                                                                        booking.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {this.state.alert}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookingIndex;
