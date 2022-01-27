import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ArticlesList from "./components/ArticlesList";
import EditArticle from "./components/EditArticle";
import CreateArticle from "./components/CreateArticle";
import CreateUser from "./components/CreateUser";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={ArticlesList} />
                <Route path="/edit/:id" component={EditArticle} />
                <Route path="/create" component={CreateArticle} />
                <Route path="/user" component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;
