import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import API from "../../Services";

class BlogPost extends Component {
  state = {
    listMhs: [],
    insertMahasiswa: {
      userId: 1,
      id: 1,
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        listMhs: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleHapusMahasiswa = (data) => {
    //fungsi yang menghandle button action hapus data
    API.deleteNewsBlog(data).then((result) => {
      this.ambilDataDariServerAPI();
    });
  };

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa["id"] = timestamp;
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa,
    });
  };

  handleTombolSimpan = () => {
    API.postNewsBlog(this.state.insertMahasiswa).then((response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="nim" className="col-sm-2 col-form-label">
              NIM
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nim"
                name="nim"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nama" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="alamat"
                name="alamat"
                rows="3"
                onChange={this.handleTambahMahasiswa}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="hp" className="col-sm-2 col-form-label">
              HP
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="hp"
                name="hp"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="angkatan" className="col-sm-2 col-form-label">
              angkatan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="angkatan"
                name="angkatan"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="status"
                name="status"
                onChange={this.handleTambahMahasiswa}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Simpan
          </button>
        </div>
        <h2>Daftar Mahasiswa</h2>
        {this.state.listMhs.map((mhs) => {
          return (
            <Post
              key={mhs.id}
              nim={mhs.nim}
              nama={mhs.nama}
              alamat={mhs.alamat}
              hp={mhs.hp}
              angkatan={mhs.angkatan}
              status={mhs.status}
              idMahasiswa={mhs.id}
              hapusMahasiswa={this.handleHapusMahasiswa}
            />
          );
        })}
      </div>
    );
  }
}

export default BlogPost;
