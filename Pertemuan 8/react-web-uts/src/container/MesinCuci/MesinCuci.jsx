import React, { Component } from "react";
import "./MesinCuci.css";
import Post from "../../component/MesinCuci/Post";

class MesinCuci extends Component {
  state = {
    listMesinCuci: [],
  };

  ambilDataDariServerAPI = () => {
    fetch("http://localhost:3001/mesincuci")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listMesinCuci: jsonHasilAmbilDariAPI,
        });
      });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  handleGetMesinCuci = (data) => {
    fetch(`http://localhost:3001/mesincuci/${data}`, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        // this.handleUpdateList(data, res);
        var dataMesinCuci = { ...this.state.insertKeranjang };
        dataMesinCuci["id"] = res["id"];
        dataMesinCuci["nama"] = res["nama"];
        dataMesinCuci["harga"] = res["harga"];
        dataMesinCuci["stok"] = res["stok"];
        dataMesinCuci["qty"] = 1;
        this.setState({
          insertKeranjang: dataMesinCuci,
        });
      })
      .then(() => {
        this.handleCekKeranjang(data);
      })
      .then(() => {
        this.handleTombolSimpan();
      });
  };

  handleCekKeranjang = (data) => {
    fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
      (response) => {
        if (response.ok) {
          response.json().then((res) => {
            this.handleUpdateKeranjang(data, res);
            this.ambilDataDariServerAPI();
          });
        } else {
          this.handleTombolSimpan();
        }
      }
    );
  };

  handleUpdateKeranjang = (data, res) => {
    fetch(`http://localhost:3002/keranjang/${data}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: res["id"],
        nama: res["nama"],
        harga: res["harga"],
        stok: res["stok"],
        qty: res["qty"] + 1,
      }),
    });
  };

  handleTombolSimpan = () => {
    fetch("http://localhost:3002/keranjang", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.insertKeranjang),
    }).then((Response) => {
      this.ambilDataDariServerAPI();
    });
  };

  render() {
    return (
      <div className="post-mesincuci">
        <center>
          <br />
          <h2>Daftar Barang</h2>
          <br />
        </center>
        <div className="tgh">
          {this.state.listMesinCuci.map((MesinCuci) => {
            return (
              <Post
                key={MesinCuci.id}
                id={MesinCuci.id}
                nama={MesinCuci.nama}
                harga={MesinCuci.harga}
                gambar={MesinCuci.gambar}
                stok={MesinCuci.stok}
                tambahMesinCuci={this.handleGetMesinCuci}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MesinCuci;
