import React from "react";
// import { useQuery } from '@apollo/client';
// import { useParams } from "react-router-dom";
// import { QUERY_SINGLE_BAND } from '../utils/queries';
import "./Band.css";

const Band = () => {
  return (
    <div className="container justify-content-center">
      <div
        id="spotifyContainer"
        className="container justify-content-center mb-5 d-grid"
      >
        <div class="d-flex  music-container mb-5 event-container-img">
          <iframe
            id="spotifyWidget"
            title="spotify"
            style={{ borderRadius: 12 }}
            width="100%"
            height="390"
            src="https://open.spotify.com/embed/artist/4rDydOYVgiuL2gu0B1vEZg?utm_source=generator"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          ></iframe>
        </div>
      </div>

      <a
        class="bit-widget-initializer"
        data-artist-name="id_11577570"
        data-background-color="#ffffff"
        data-separator-color="#DDDDDD"
        data-text-color="#424242"
        data-font="Helvetica"
        data-auto-style="true"
        data-display-local-dates="true"
        data-local-dates-position="tab"
        data-display-past-dates="true"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="false"
        data-social-share-icon="true"
        data-display-limit="all"
        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#08C3BA"
        data-date-border-width="1px"
        data-date-border-radius="10px"
        data-event-ticket-cta-size="medium"
        data-event-ticket-text="TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="#FFFFFF"
        data-event-ticket-cta-bg-color="#08C3BA"
        data-event-ticket-cta-border-color="#08C3BA"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="4px"
        data-sold-out-button-text-color="#FFFFFF"
        data-sold-out-button-background-color="#9B9B9B"
        data-sold-out-button-border-color="#08C3BA"
        data-sold-out-button-clickable="true"
        data-event-rsvp-position="left"
        data-event-rsvp-cta-size="medium"
        data-event-rsvp-text="SET REMINDER"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="#08C3BA"
        data-event-rsvp-cta-bg-color="#FFFFFF"
        data-event-rsvp-cta-border-color="#08C3BA"
        data-event-rsvp-cta-border-width="1px"
        data-event-rsvp-cta-border-radius="4px"
        data-follow-section-position="top"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows, new music, and more."
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="true"
        data-follow-section-cta-text-color="#FFFFFF"
        data-follow-section-cta-bg-color="#08C3BA"
        data-follow-section-cta-border-color="#08C3BA"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="4px"
        data-play-my-city-position="bottom"
        data-play-my-city-alignment="Center"
        data-play-my-city-header-text="Don’t see a show near you?"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="true"
        data-play-my-city-cta-text-color="#FFFFFF"
        data-play-my-city-cta-bg-color="#08C3BA"
        data-play-my-city-cta-border-color="#08C3BA"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="4px"
        data-language="en"
        data-widget-width=""
        data-div-id=""
        data-app-id=""
        data-affil-code="undefined"
        data-bit-logo-position="bottomRight"
        data-bit-logo-color="#CCCCCC"
      ></a>
    </div>
  );
};

export default Band;
