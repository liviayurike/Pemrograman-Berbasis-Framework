import React, { Component } from 'react';
import './index.css'
import glasses from './assets/glasses.png'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams,
    withRouter
} from 'react-router-dom';

function MarketPlace() {
    return (
        <Router>
            <div className="header" >
                <img src={glasses} alt="" />
                <AuthButton />

                <ul>
                    <li className="TopBar-1" id="TB1">
                        <Link className="Link-1" to="/home">Home</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link-1" to="/product">Product</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/product" component={Product} />
                </Switch>
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p id="logout">Welcome!
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/home"));
                }}>
                <p>Sign out</p>
            </button>
        </p>
    ) : (
            <p id="warning-log" >
                You are not Log in!
            </p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

function Home() {
    return (
        <div className="Home">
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Store!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            </div>
        </header>
        </div>
    )
}

function Product() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            {/* <h2>Data Barang</h2> */}
            <ul>
                <li className="TopBar-2">
                    <Link to={`${url}/Glassess`}>Glassess</Link>
                </li>
                <li className="TopBar-2">
                    <Link to={`${url}/Clothes`}>Clothes</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();

    if (dataId === "Glassess") {
        return (
            <div className="Glassess">
              <div className="grid">
                <div className="row">
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                    <div className="col-sm">
                        <img src={glasses} alt="Gambar Thumbnail Artikel" />
                        <center><h3>Glassess Haviva Black</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></center>
                    </div>
                </div>
            </div>
            </div>
        )
    } else if (dataId === "Clothes") {
        return (
          <div className="Clothes">
            <header class="masthead3">
            <div class="container">
            </div>
        </header>
        </div>
        )
    }
}

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
              <header class="masthead">
                <div class="container">
                <div class="masthead-subheading">You must log in to view the page</div>
                <button onClick={this.login}>Login</button>
            </div>
            </header>
        </div>
        );
    }
}

export default MarketPlace;