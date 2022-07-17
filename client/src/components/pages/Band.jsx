import SpotifyPlayer from 'react-spotify-player';
import BandsInTown from "../Events.jsx"
import "./Band.css";


export default async function Band(){
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
    
return (<div id="band">
            <div className="top-container">
                <div className="spotify">
				<SpotifyPlayer
                    uri="spotify:artist:4rDydOYVgiuL2gu0B1vEZg"
                    size={size}
                    view={view}
                    theme={theme}
                    />
                </div>
                <div className="bandsintown">
                    <BandsInTown />
                </div>
            </div>
            <div>
                <div>
                    <Tasks />
                </div>
                <div>
                    <Shop />
                </div>
            </div>
</div>

)
}
