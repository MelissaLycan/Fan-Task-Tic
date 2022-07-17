import SpotifyPlayer from 'react-spotify-player';
// import { IdGetter } from '@apollo/client';
import { Route } from 'react-router-dom';
import "./Spotify.css"

export async function Spotify() {
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const isBand = await Route("/Band:bandId")
if(isBand === this.bandDetails.bandId) {
const bandData = await this.User.get({bandDetails: {spotifyUri: ""}})

const spotifyUri = `"spotify:artist:${bandData}"`

return <div className="spotify">
				<SpotifyPlayer
                    uri={spotifyUri}
                    size={size}
                    view={view}
                    theme={theme}
                    />
       </div>             
}
}

export default Spotify