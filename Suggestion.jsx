import React from 'react';

function Suggestion(props) {
    return (
        <>
            <div className="suggestion">
                <div className="container suggestion1">
                    <div className="row sugg-des">
                        <div className="col-12 col-lg-9">
                            <h2>Need help getting started? Get a personalized suggestion.</h2>
                        </div>
                        <div className="col-12 col-lg-3">
                            <button className='que'>Answer a few simple questions</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Suggestion;