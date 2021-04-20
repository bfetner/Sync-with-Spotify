import React, { Component, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";
import MusicPlayer from "./Roomcomponents/MusicPlayer.jsx";
import Chat from "./Roomcomponents/Chat.jsx";
import Queue from "./Roomcomponents/Queue.jsx";
import SongSearch from "./Roomcomponents/SongSearch.jsx";
import "../css/Room.css";
import { Redirect } from "react-router-dom";

{
  /*import albumCover from "./assets/image0.png";
    import playButton from "../assets/play_button.png";
  */
}

const albumList = [
  {
    title: "Pick Up Your Feelings",
    url: "../../assets/1.PNG",
  },
  {
    title: "Hunger",
    url: "../../assets/2.PNG",
  },
  {
    title: "no love",
    url: "../../assets/3.PNG",
  },
  {
    title: "Killuminati",
    url: "../../assets/4.PNG",
  },

  {
    title: "no,no",
    url: "../../assets/5.PNG",
  },
  {
    title: "Crime Pays",
    url: "../../assets/6.jpg",
  },
  {
    title: "Ninety",
    url: "../../assets/7.jpg",
  },

  {
    title: "Souldfood",
    url: "../../assets/8.jpg",
  },
  {
    title: "Violent Crimes",
    url: "../../assets/9.jpg",
  },
  {
    title: "Been Waiting!",
    url: "../../assets/10.jpg",
  },

  {
    title: "Leray",
    url: "../../assets/11.jpg",
  },
  {
    title: "HONEST",
    url: "../../assets/12.jpg",
  },
  {
    title: "WOLF",
    url: "../../assets/13.jpg",
  },

  {
    title: "Trying",
    url: "../../assets/14.jpg",
  },
  {
    title: "A Calabasas Freestyle",
    url: "../../assets/15.jpg",
  },
  {
    title: "Father Stretch My Hands",
    url: "../../assets/16.jpg",
  },

  {
    title: "Frank's Track",
    url: "../../assets/17.jpg",
  },
  {
    title: "No More Parties In LA",
    url: "../../assets/18.jpg",
  },
  {
    title: "Champion",
    url: "../../assets/19.png",
  },
  {
    title: "Once Upon A Time(Freestyle)",
    url: "../../assets/20.PNG",
  },
];

const addVotesToSong = (song) => {
  let numOfVotes = [Math.floor(Math.random() * 10)];
  let title = song.title;
  let url = song.url;
  return {
    title: title,
    url: url,
    vote: numOfVotes,
  };
};

const Room = (props) => {
  const roomName = props.match.params.roomName;
  const roomGenre = props.match.params.roomGenre;

  const [songsForQueue, setSongsForQueue] = useState([
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
    addVotesToSong(albumList[Math.floor(Math.random() * 19)]),
  ]);

  const [currentSong, setCurrentSong] = useState(
    albumList[Math.floor(Math.random() * 19)]
  );

  const [songs, setSongs] = useState({
    song_id: "1",
    songName: currentSong.title,
    artist: "unknown",
    songUrl:
      "https://www.freesound.org/data/previews/338/338825_1648170-lq.mp3",
    songImageUrl: currentSong.url,
  });

  const [showQueue, setShowQueue] = useState(true);
  const [displayTypeSwitchButton, setDisplayTypeSwitchButton] = useState(
    "Search for a Song"
  );

  const switchQueueSearchsong = () => {
    setShowQueue(!showQueue);
    if (showQueue) {
      setDisplayTypeSwitchButton("Return to Queue");
    } else {
      setDisplayTypeSwitchButton("Search for a Song");
    }
  };

  console.log(props);

  return (
    <div>
      <div class="main room-main">
        <strong style={{ fontSize: "xxx-large" }}>{roomName}</strong>
        <em>Room Genre: {roomGenre}</em>
        <div class="grid1">
          <div class="queue1">
            {showQueue && <Queue queueSongs={songsForQueue} />}
            {!showQueue && <SongSearch avaliableSongs={albumList} />}
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => switchQueueSearchsong()}
              className="sync-button-color queue-songsearch-switch"
            >
              {displayTypeSwitchButton}
            </Button>
          </div>
          <div
            class="musicplayer"
            style={{ alignSelf: "center", justifySelf: "center" }}
          >
            <MusicPlayer currentSong={songs} />
          </div>
          <div class="chatflex">
            <Chat roomName={roomName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
