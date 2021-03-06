$("#searchBtn").on("click", function () {
  $("#artistEvents").empty();
  var searchEl = $("#searchInput").val();
  var spotifyPlaceholder = $("#placeholderSpotify");
  localStorage.setItem("artist-name", searchEl);
  spotifyPlaceholder.remove();
  $("#spotifyTitle").attr(
    "class",
    "visible d-flex flex-row justify-space-around"
  );
  $("#spotifyContainer").attr("class", "visible container float-left");
  $("#eventContainer").attr("class", "visible float-right");
  $("#socialContainer").attr("class", "visible d-flex flex-row");
  $("#artistContainer").attr(
    "class",
    "visible d-flex flex-rox justify-content-center"
  );
  getArtist();
  getSocial();
  getSeatGeek();
});

// Fetches Spotify Data//

function getArtist() {
  var artistName = localStorage.getItem("artist-name");
  console.log(artistName);
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      "X-RapidAPI-Key": "75080e53e7msh0421906c88ed526p142680jsndffae68637d9",
    },
  };
  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=" +
      artistName +
      "&type=multi&offset=0&limit=10&numberOfTopResults=5",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (spotify) {
      console.log(spotify);
      var artistUri = spotify.artists.items[0].data.uri;
      var uri = artistUri.substring(15);
      localStorage.setItem("uri", uri);
      var artistName = spotify.artists.items[0].data.profile.name;
      $("#stageName").text(artistName);
      addId();
    });
}

function addId() {
  var uri = localStorage.getItem("uri", uri);
  $("#spotifyWidget").attr(
    "src",
    "https://open.spotify.com/embed/artist/" + uri + "?utm_source=generator"
  );
}

// Fetches Social Media Data//

function getSocial() {
  var artistName = localStorage.getItem("artist-name");
  var options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "social-media-data-tt.p.rapidapi.com",
      "X-RapidAPI-Key": "75080e53e7msh0421906c88ed526p142680jsndffae68637d9",
    },
  };

  fetch(
    "https://social-media-data-tt.p.rapidapi.com/live/user/search/?q=" +
      artistName +
      "&keyword=" +
      artistName +
      "&limit=5",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var instagram = data.result[0].other_social_profiles.instagram_username;
      var twitter =
        data.result[0].other_social_profiles.twitter.twitter_username;
      var youtube =
        data.result[0].other_social_profiles.youtube.youtube_channel_name;
      var tiktok = data.result[0].unique_id;
      var tikTokID = tiktok.substring(0);
      var fanCount = data.result[0].follower_count;
      var avatar = data.result[0].avatar_larger;

      localStorage.setItem("instagram", instagram);
      localStorage.setItem("twitter", twitter);
      localStorage.setItem("youtube", youtube);
      localStorage.setItem("tiktok", tikTokID);
      localStorage.setItem("fanCount", fanCount);
      localStorage.setItem("avatar", avatar);
      addSocialButtons();
    });
}
//appends social media data from fans and artists to the Dom//
function addSocialButtons() {
  var instagram = localStorage.getItem("instagram");
  var twitter = localStorage.getItem("twitter");
  var youtube = localStorage.getItem("youtube");
  var tikTokID = localStorage.getItem("tiktok");
  var fanCount = localStorage.getItem("fanCount");
  var artistName = localStorage.getItem("artist-name");
  var avatar = localStorage.getItem("avatar");

  // This sets artist image as background//
  $("body").css("background-image", "url(" + avatar + ")");
  //This is the Fancount//
  $("#fanCount").text("Followers: " + fanCount);

  //THis is the social link for the artists Instagram//
  if (instagram !== null) {
    $("#socialInsta").attr("href", "https://instagram.com/" + instagram);
  } else {
    $("#socialInsta").attr("href", "https://instagram.com/" + artistName);
  }
  //This is the social link for the artists Twitter//
  if (twitter !== null) {
    $("#socialTwit").attr("href", "https://twitter.com/" + twitter);
  } else {
    $("#socialTwit").attr("href", "https://twitter.com/" + artistName);
  }

  //This is social Link for the artists Youtube//
  if (youtube !== null) {
    $("#socialTube").attr("href", "https://youtube.com/" + youtube);
  } else {
    $("#socialTube").attr("href", "https://youtube.com/" + artistName);
  }

  //This is the social link for the artists tiktok//

  if (tikTokID !== null) {
    $("#socialTikTok").attr("href", "https://tiktok.com/" + tikTokID);
  } else {
    $("#socialTwit").attr("href", "https://tiktok.com/" + artistName);
  }
}

// ONLY EDIT BELOW THIS LINE//
//This is the SEATGEEK API that fetches ticketing data//
function getSeatGeek() {
  var artistName = localStorage.getItem("artist-name");

  fetch(
    "https://api.seatgeek.com/2/events?q=" +
      artistName +
      "&range=50mi&client_id=NjA3NjEwfDE2NTMwMTA4ODMuODU1MzQwMg"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var events = data.events;

      for (let i = 0; i < events.length; i++) {
        var eventList = $("<ul id=displayEvents></ul>");
        $("#artistEvents").append(eventList);

        var eventListItem = $("<li>");
        eventListItem.append(events[i].title + "</br>");

        var dateTime = data.events[i].datetime_local;
        var dateTimeSplit = dateTime.split("T").join(" ");

        var convertedDateTime = moment(
          dateTimeSplit,
          "YYYY/MM/DD hh:mm:ss"
        ).format("LLL");

        if (events[i].datetime_local !== null) {
          eventListItem.append(convertedDateTime + "</br>");
        } else {
          eventListItem.append("Date and Time TBD");
        }
        eventListItem.append("Venue: " + events[i].venue.name + "</br>");
        eventListItem.append(
          "Location: " + events[i].venue.display_location + "</br>"
        );

        var ticketBtn = $("<button>", {
          text: "Buy Tickets",
          class: "btn btn-primary",
          click: function () {
            window.open(events[i].url);
          },
        });
        eventListItem.append(ticketBtn);

        eventList.append(eventListItem);
      }
    });
}
