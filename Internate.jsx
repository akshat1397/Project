import React from 'react';
import Imgone from './img/security.png'
import InfraAPI from './API/InfraAPI';
function Internate(props) {
    return (
        <>
            <div className="int-des-main">
                <div className="container">
                    <div className="row int-mai ">
                        <div className="col-12 col-lg-6 Int-des">
                            <h2>Protect your Internet presence.</h2>
                            <p>Your website, APIs and applications are the primary channels through which you do business with customers and suppliers. As more work moves online, making sure all of these assets are secure, reliable, and performing becomes a business imperative.</p>
                            <p>Cloudflare for Infrastructure is the complete solution for anything connected to the internet.</p>
                        </div>
                        <div className="col-12 col-lg-6 Int-img">
                            <img src={Imgone} />
                        </div>
                        {InfraAPI.map((res) => {
                            return (
                                <div className="col-lg-4 product" key={res.id}>
                                    <div className="infra p-3 mt-3">
                                        <i className={res.icon}></i>
                                        <h3>{res.title}</h3>
                                        <p>{res.quote}</p>
                                        <button> {res.button}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Internate;