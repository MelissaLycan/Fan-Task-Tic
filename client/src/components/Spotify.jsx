import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "./utils/queries";
import "./Spotify.css";

export async function Spotify() {
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data);
  const bandDetails = data?.bandDetails;
  console.log(bandDetails);

  // const currentBand = await Route("/Band:bandName")

  // const bandData = await this.User.get({bandDetails: {spotifyUri: ""}})

  // const spotifyUri = "spotify:uri:4rDydOYVgiuL2gu0B1vEZg"

  // $("#spotifyWidget").attr(
  //     "src",
  //     "https://open.spotify.com/embed/artist/" + uri + "?utm_source=generator"
  //   );
  return (
    <>
      <div id="spotifyContainer" className="container">
        <div id="spotifyTitle" className="container"></div>
        <div className="d-flex align-items-center music-container mb-5 event-container-img">
          <iframe
            id="spotifyWidget"
            title="spotify"
            style="border-radius: 12px"
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

export default Spotify;
