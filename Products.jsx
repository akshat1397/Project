import React, { useState } from 'react';
import ProductsAPI from './API/ProductsAPI'

function Products(props) {
    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="row">
                        {ProductsAPI.map((res) => {
                            return (
                                <div className="col-lg-4 product" key={res.id}>
                                    <div className="product1 p-3 mt-3">
                                        <i className={res.icon}></i>
                                        <h3>{res.title}</h3>
                                        <p>{res.quote}</p>
                                        <ul>

                                            {res.list.map((res, i) => {
                                                return (
                                                    <li key={i}>{res}</li>
                                                )
                                            })}
                                        </ul>
                                        <h5> {res.para}</h5>
                                        <hr />
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

export default Products;