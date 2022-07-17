import SpotifyPlayer from '../Spotify';
// import BandsInTown from "../Events.jsx"
import "./Band.css";


export default async function Band(){

return (<div id="band">
            <div className="top-container">
                <div className="spotify">
				<SpotifyPlayer />
                </div>
                {/* <div className="bandsintown">
                    <BandsInTown />
                </div> */}
            </div>
            <div>
                {/* <div>
                    <Tasks />
                </div>
                <div>
                    <Shop />
                </div> */}
            </div>
</div>

)
}
