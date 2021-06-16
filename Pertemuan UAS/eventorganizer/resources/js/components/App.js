import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import BookingIndex from "./BookingIndex";
import BookingCreate from "./BookingCreate";
import BookingShow from "./BookingShow";
import BookingEdit from "./BookingEdit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={BookingIndex} />
                        <Route exact path="/create" component={BookingCreate} />
                        <Route
                            path="/booking/edit/:id"
                            component={BookingEdit}
                        />
                        <Route path="/booking/:id" component={BookingShow} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
