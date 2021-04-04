import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MesinCuci from "./container/MesinCuci/MesinCuci";
import Keranjang from "./container/MesinCuci/Keranjang";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/mesincuci.jpg";
import biodata from "./img/biodata.jfif";

function App() {
  return (
    <Router>
      <div>
        <ul className="header">
          <img src={img} alt="" />

          <li className="TopBar-1" id="TB1">
            <Link className="Link-1" to="/home">
              Home
            </Link>
          </li>
          <li className="TopBar-1">
            <Link className="Link-1" to="/product">
              Product
            </Link>
          </li>
          <li className="TopBar-1">
            <Link className="Link-1" to="/cart">
              Cart
            </Link>
          </li>
          <li className="TopBar-1">
            <Link className="Link-1" to="/about">
              About
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route path="/cart">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">Welcome To Our Store!</div>
          <div class="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
        </div>
      </header>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center>
        <div className="biodataaa">
          <br />
          <h2>Biodata</h2>
          <br />
          <div className="biodata">
            <table
              classname="table-biodata"
              border="0"
              width="700px"
              height="300px"
            >
              <tr>
                <td rowspan="8">
                  <div className="gambar-biodata">
                    <img src={biodata} width="250" height="450" alt="" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td width="200px">Livia Yurike Khuril Maula</td>
              </tr>
              <tr>
                <td>Kelas</td>
                <td>:</td>
                <td>TI 3F</td>
              </tr>
              <tr>
                <td>NIM</td>
                <td>:</td>
                <td>1841720025</td>
              </tr>
              <tr>
                <td>Tempat, Tanggal Lahir</td>
                <td>:</td>
                <td>Malang, 3 Juli 1999</td>
              </tr>
              <tr>
                <td>No Hp</td>
                <td>:</td>
                <td>+62822 2877 3286</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>kliviayurike@gmail.com</td>
              </tr>
              <b>
                <tr colspan="3" align="center">
                  <td align="center">Politeknik Negeri Malang</td>
                </tr>
              </b>
            </table>
          </div>
        </div>
      </center>
    </div>
  );
};

function Products() {
  return (
    <div className="product">
      <MesinCuci />
    </div>
  );
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  );
}

export default App;
