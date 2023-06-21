import React from 'react';
import Logo from './img/logo.png'
import './layout.css'
import Global from './Global'
import Control from './Control'
import Novelty from './Novelty'
import Products from './Products'
import Suggestion from './Suggestion'
import Internate from './Internate';

function Header(props) {
    return (
        <>
            {/* header start */}
            <div className="container myheader">
                <div className="row">
                    <div className="col-3 bg-danger">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} className='' alt="logo" />
                        </a>
                    </div>
                    <div className=" col-9 p-1 bg-info myinfo">
                        <div className="search d-flex justify-content-end">
                            <a href="" className='sales mt-2'>Sales: 0008 000 501 996</a>
                            <select class="form-select support pt-2" aria-label="Default select example">
                                <option hidden>Support</option>
                                <option value="1">Contact Support</option>
                                <option value="2">Help Center</option>
                                <option value="3">Cloud Flare Community</option>
                                <option value="3">Lost Account Access</option>
                            </select>
                            <div className="globe d-flex mt-1">
                                <div className="globe1 ">
                                    <i class="bi bi-globe2"></i>
                                </div>
                                <div className="globe2">
                                    <select class="form-select support1 dropdown-toggle" aria-label="Default select example">
                                        <option hidden></option>
                                        <option value="2">English</option>
                                        <option value="3">English (United Kingdom)</option>
                                        <option value="3">English (Canada)</option>
                                        <option value="3">English (Australia)</option>
                                        <option value="3">English (India)</option>
                                        <option value="3">Deutsch</option>
                                        <option value="3">Español</option>
                                        <option value="3">Français</option>
                                        <option value="3">Italian</option>
                                        <option value="3">日本語</option>
                                        <option value="3">한국어</option>
                                        <option value="3">Portuguese</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" >
                        <nav class="navbar navbar-expand-lg mynavbar">
                            <button class="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse mynavbar1" id="navbarTogglerDemo02">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Solutions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li class="nav-itsem">
                                        <a class="nav-link" href="#">Resource</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Partners</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Why Cloudflare</a>
                                    </li>
                                </ul>
                            </div>
                            <form class="myform">
                                <i class="bi bi-search"></i>
                                <button class="btn1" type="submit">Sign in</button>
                                <button class="btn2 " type="submit">Are You Under Attack?</button>
                                <button class="btn3 " type="submit">Log in</button>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
            <hr />
            {/* header end */}
            <Global />
            <Control />
            <Novelty/>
            <Products/>
            <Suggestion/>
            <Internate/>
        </>
    );
}

export default Header;