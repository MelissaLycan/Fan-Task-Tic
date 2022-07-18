import React from "react";
import Spotify from '../Spotify';
// import BandsInTown from "../Events.jsx"
import "./Band.css";


export default async function Band(){

return (<><div id="band">
            <div className="top-container">
                <div className="spotify">
				<Spotify />
                </div>
                {/* <div className="bandsintown">
                    <BandsInTown />
                </div> */}
            </div>
        </div>
        </>
)
}
