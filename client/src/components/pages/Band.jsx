import React from "react";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_BAND } from '../../utils/queries';
import "./Band.css";

const Band = () => {
    fetch("http://localhost:5000/band/bandId", {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newUser),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
// const { loading, data } = useQuery(QUERY_SINGLE_BAND);
        return (<> <div id="spotifyContainer" className="d-grid">
                <div class="d-flex align-items-center music-container mb-5 event-container-img">
                    <iframe
                        id="spotifyWidget"
                        title="spotify"
                        style="borderRadius, 12px"
                        width="100%"
                        height="390"
                        src="https://open.spotify.com/embed/artist/4rDydOYVgiuL2gu0B1vEZg?utm_source=generator"
                        frameborder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </>
        );
}


export default Band