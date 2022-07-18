import React from "react";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_BAND } from '../../utils/queries';
import "./Band.css";

const Merch = () => {
 QUERY_SINGLE_BAND()
// const { loading, data } = useQuery(QUERY_SINGLE_BAND);
        return (<> <div id="spotifyContainer" className="d-grid">
                <div class="d-flex align-items-center music-container mb-5 event-container-img">
                    
                </div>
            </div>
        </>
        );
}


export default Merch