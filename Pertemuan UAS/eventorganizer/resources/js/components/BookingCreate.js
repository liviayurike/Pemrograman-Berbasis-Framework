import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

class BookingCreate extends Component {
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
            errors: []
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleCreateNewBooking = this.handleCreateNewBooking.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
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
                Created booking successfully
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

    handleCreateNewBooking(event) {
        event.preventDefault();
        const booking = {
            namalengkap: this.state.namalengkap,
            alamat: this.state.alamat,
            telepon: this.state.telepon,
            email: this.state.email,
            namaacara: this.state.namaacara,
            pilihpaket: this.state.pilihpaket,
            tambahanlain: this.state.tambahanlain,
            tanggalacara: this.state.tanggalacara
        };
        axios.post("/api/booking/store", booking).then(response => {
            var msg = response.data.success;
            if (msg == true) {
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
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Create new booking
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleCreateNewBooking}>
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
                                        <label htmlFor="alamat">Alamat</label>
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
                                            value={this.state.alamat}
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
                                            id="namaacra"
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
                                        Create
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
export default BookingCreate;
