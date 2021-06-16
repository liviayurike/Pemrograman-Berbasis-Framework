import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class BookingEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namalengkap: "",
            alamat: "",
            telepon: "",
            email: "",
            namaacara: "",
            pilihpaket: "",
            tambahanlain: "",
            tanggalacarat: "",
            alert: null,
            message: "",
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleUpdateBooking = this.handleUpdateBooking.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        const bookingId = this.props.match.params.id;

        axios.get(`/api/booking/edit/${bookingId}`).then(response => {
            this.setState({
                title: response.data.title,
                content: response.data.content
            });
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
                {this.state.message}
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push("/");
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleUpdateBooking(event) {
        event.preventDefault();

        const booking = {
            namalengkap: this.state.namalengkap,
            alamat: this.state.alamat,
            telepeon: this.state.telepon,
            email: this.state.email,
            namaacara: this.state.namaacara,
            pilihpaket: this.state.pilihpaket,
            tambahanlain: this.state.tambahanlain,
            tanggalacara: this.state.tanggalacara
        };

        const bookingId = this.props.match.params.id;

        axios.put(`/api/booking/${bookingId}`, booking).then(response => {
            // redirect to the homepage
            var msg = response.data.success;
            if (msg == true) {
                this.setState({
                    message: response.data.message
                });
                return this.goToHome();
            }
        });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field];
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className="invalid-feedback">
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            );
        }
    }

    render() {
        const { article } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Create new booking
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleUpdateBooking}>
                                    <div className="form-group">
                                        <label htmlFor="namalengkap">
                                            Nama Lengkap
                                        </label>
                                        <input
                                            id="namalengkap"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("namalengkap")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="namalengkap"
                                            value={this.state.namalengkap}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("namalengkap")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="alamat">Booking</label>
                                        <input
                                            id="alamat"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("alamat")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="alamat"
                                            value={this.state.alamat}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("alamat")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telepon">Telepon</label>
                                        <input
                                            id="telepon"
                                            type="number"
                                            className={`form-control ${
                                                this.hasErrorFor("telepon")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="telepon"
                                            value={this.state.telepon}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("telepon")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className={`form-control ${
                                                this.hasErrorFor("email")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("email")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="namaacara">
                                            Nama Acara
                                        </label>
                                        <input
                                            id="namaacara"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("namaacara")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="namaacara"
                                            value={this.state.namaacara}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("namaacara")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pilihpaket">
                                            Pilih Paket
                                        </label>
                                        <input
                                            id="pilihpaket"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("pilihpaket")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="pilihpaket"
                                            value={this.state.pilihpaket}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("pilihpaket")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tambahanlain">
                                            Tambahan Lain
                                        </label>
                                        <input
                                            id="tambahanlain"
                                            type="text"
                                            className={`form-control ${
                                                this.hasErrorFor("tambahanlain")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="tambahanlain"
                                            value={this.state.tambahanlain}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("tambahanlain")}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tanggalacara">
                                            Tanggal Booking
                                        </label>
                                        <input
                                            id="tanggalacara"
                                            type="date"
                                            className={`form-control ${
                                                this.hasErrorFor("tanggalacara")
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            name="tanggalacara"
                                            value={this.state.tanggalacara}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor("tanggalacara")}
                                    </div>
                                    <Link
                                        className="btn btn-secondary"
                                        to={`/`}
                                    >
                                        Back
                                    </Link>
                                    <button className="btn btn-primary">
                                        Update
                                    </button>
                                    {this.state.alert}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BookingEdit;
