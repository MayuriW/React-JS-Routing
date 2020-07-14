import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import post from './Post';
import home from './Home';
import profile from './Profile';
import forms from './Forms';
import postdetails from './Postdetails.js';

//class based component
class Routing extends Component {
    render() {
        return (

                <BrowserRouter>
                <div>
                    <header>
                        <nav className="navbar navbar-expand-sm bg-dark">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/post">Post</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/forms">Forms</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                <div>
                <Route exact path="/" component={home}></Route>
                <Route path="/profile" component={profile}></Route>
                <Route exact path="/post" component={post}></Route>
                <Route path="/forms" component={forms}></Route>
                <Route path="/post/:topic" component={postdetails}></Route>
                </div>
                </BrowserRouter>

        )
    }
}
export default Routing;
