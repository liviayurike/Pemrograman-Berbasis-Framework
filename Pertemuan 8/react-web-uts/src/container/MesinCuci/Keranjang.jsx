import React, { Component } from "react";
import "./MesinCuci.css";
import PostKeranjang from "../../component/MesinCuci/PostKeranjang";

class MesinCuci extends Component {
  state = {
    listKeranjang: [],
  };

  ambilDataDariServerAPI = () => {
    fetch("http://localhost:3002/keranjang")
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          listKeranjang: jsonHasilAmbilDariAPI,
        });
      });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

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
    var no = 0;
    var total = 0;
    return (
      <div className="post-mesincuci">
        <center>
          <h2>Keranjang</h2>
          <br />
        </center>
        <div className="tgh">
          <table border="1" cellpadding="5" width="70%" align="center">
            <tr>
              <th align="center">No</th>
              <th align="center">ID Produk</th>
              <th align="left">Nama</th>
              <th align="center">Harga</th>
              <th align="center">Qty</th>
              <th align="center">Subtotal</th>
            </tr>
            {this.state.listKeranjang.map((mesincuci) => {
              no += 1;
              total += mesincuci.harga * mesincuci.qty;
              return (
                <PostKeranjang
                  no={no}
                  key={mesincuci.id}
                  id={mesincuci.id}
                  nama={mesincuci.nama}
                  harga={mesincuci.harga}
                  gambar={mesincuci.gambar}
                  stok={mesincuci.stok}
                  qty={mesincuci.qty}
                  tambahMesinCuci={this.handleGetMesinCuci}
                />
              );
            })}
            <tr>
              <td colspan="5" align="right">
                Total :{" "}
              </td>
              <td>Rp{total}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default MesinCuci;
