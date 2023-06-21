import React, { useState } from 'react';
import NoveltyAPI from './API/NoveltyAPI'

function Novelty(props) {
    const [novelty, setNovelty] = useState(NoveltyAPI)
    console.log(novelty);
    return (
        <>
            <div className='report1'>
                <div className="container">
                    <div className="row report">
                        {Object.entries(novelty).map((res, i) => {
                            return (
                                <div className="col-lg-4 novelty ms-auto">
                                    <div className="novelty1 p-4">
                                        <hr />
                                        <h3>{res[1].title}</h3>
                                        <p>{res[1].quote}</p>
                                        <button> {res[1].button}</button>
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

export default Novelty;