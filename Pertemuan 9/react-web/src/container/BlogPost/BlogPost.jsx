import React, { Component } from "react";
import "./BlogPost.css";
import Post from "../../component/BlogPost/Post";
import API from "../../services";

class BlogPost extends Component {
  // komponen state dari React untuk statefull component
  state = {
    // variabel array yang digunakan untuk menyimpan data API
    listArtikel: [], // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
    insertArtikel: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  //fungsi untuk mengambl data dari API dengan penambahan sort dan order
  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        listArtikel: result,
      });
    });
  };

  componentDidMount() {
    // komponen untuk mengecek ketikan compnent telah di-mount-ing, maka panggil API
    this.ambilDataDariServerAPI(); // ambil data dari server API lokal
  }

  handleHapusArtikel = (data) => {
    //fungsi yang menghandle button action hapus data
    API.deleteNewsBlog(data).then((result) => {
      this.ambilDataDariServerAPI();
    });
  };

  handleTambahArtikel = (event) => {
    // fungsi untuk meng-handle form tambah data artikel
    let formInsertArtikel = { ...this.state.insertArtikel }; // clonning data state insertArtikel ke dalam variabel formInsertArtikel
    let timestamp = new Date().getTime(); // digunakan untuk menyimpan waktu (Sebagai ID artikel)
    formInsertArtikel["id"] = timestamp;
    formInsertArtikel[event.target.name] = event.target.value; //menyimpan data onchange ke formInsertArtikel sesuai dengan target yang diisi
    this.setState({
      insertArtikel: formInsertArtikel,
    });
  };

  // fungsi untuk meng-handle tombol simpan
  handleTombolSimpan = () => {
    API.postNewsBlog(this.state.insertArtikel).then((response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <div className="form pb-2 border-bottom">
          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Judul
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.handleTambahArtikel}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="body" className="col-sm-2 col-form-label">
              Isi
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="3"
                onChange={this.handleTambahArtikel}
              ></textarea>
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
        <h2>Daftar Artikel</h2>
        {this.state.listArtikel.map((artikel) => {
          // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
          return (
            <Post
              key={artikel.id}
              judul={artikel.title}
              isi={artikel.body}
              idArtikel={artikel.id}
              hapusArtikel={this.handleHapusArtikel}
            />
          ); // mappingkan data json dari API sesuai dengan kategorinya
        })}
      </div>
    );
  }
}

export default BlogPost;
