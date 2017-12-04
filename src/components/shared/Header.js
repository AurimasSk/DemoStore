import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({ loading }) => {
    return (
        // <nav>
        //     <IndexLink to="/" activeClassName="active">Home</IndexLink>
        //     {" | "}
        //     <Link to="/about" activeClassName="active">About</Link>
        //     {loading && <LoadingDots interval={100} dots={20} />}
        // </nav>
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                            <li><Link to="/products-preview" activeClassName="active">Products preview</Link></li>
                            <li><a href="#Link3">Link3</a></li>
                            <li><a href="#Link4">Link4</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;
