import React from "react";
import { Users } from "mongoose"
import "./Spotify.css"

export async function Spotify() {
 const bandDetails =
  await Users.findAll({isBand: true});
  console.log(bandDetails)

// const currentBand = await Route("/Band:bandName")

// const bandData = await this.User.get({bandDetails: {spotifyUri: ""}})

// const spotifyUri = "spotify:uri:4rDydOYVgiuL2gu0B1vEZg"

// $("#spotifyWidget").attr(
//     "src",
//     "https://open.spotify.com/embed/artist/" + uri + "?utm_source=generator"
//   );
return ( <><div id="spotifyContainer" className="container">
  <div id="spotifyTitle" className="container">

  </div>
  <div class="d-flex align-items-center music-container mb-5 event-container-img">
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
)            
} 

export default Spotify;