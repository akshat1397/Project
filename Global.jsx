import React from 'react';
import EnterImg from './img/global.png'

function Global(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* header left */}
                    <div className="col-12 global">
                        <h1>A global network built for the cloud</h1>
                        <p>Cloudflare is a global network designed to make everything you connect to the internet secure, private, fast and reliable.</p>
                        <ul>
                            <li>Protect your websites, APIs and internet applications.</li>
                            <li>Protect corporate networks, employees and devices.</li>
                            <li>Write and deploy code that runs at the network edge.</li>
                        </ul>
                        <div className="play">
                            <i class="bi bi-play-circle"></i>
                            <button className="clouldflare">What is Cloudflare?</button>
                        </div>
                        <div className="buttons">
                            <div className="further1">
                                <button className='btn further'> Further Information</button>
                            </div>
                            <div className="further1">
                                <button className='btn get'>Get Started for Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Global;