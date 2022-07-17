import SpotifyPlayer from 'react-spotify-player';
import { Routes } from 'react-router-dom';
import "./Spotify.css"

export const Spotify = () => {
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
if(isBand === true) {
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