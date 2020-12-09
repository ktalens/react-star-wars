import React from 'react';
import { Link } from 'react-router-dom'

const Layout =(props) =>{
    return(
        <div>
            <nav>
                {/* <div className="nav-wrapper">
                <Link to="#" className="brand-logo">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <Link to="sass.html">Sass</Link>
                        <Link to="badges.html">Components</Link>
                        <Link to="collapsible.html">JavaScript</Link>
                    </ul>
                </div> */}
            </nav>
            <div>
                {props.children}
            </div>
            {/* <footer className="page-footer">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer> */}
        </div>
    )

}

export default Layout