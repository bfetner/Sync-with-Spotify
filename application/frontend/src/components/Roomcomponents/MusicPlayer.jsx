<<<<<<< HEAD
import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";


export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(true);

  useEffect(() => setPlay(true), [trackUri]);
  if (!accessToken) return null;

  return (
      <SpotifyPlayer
        autoPlay={true}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(true);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
      />
  );
}
=======
import React, { useState, useRef, useEffect } from "react";
import "../../css/MusicPlayer.css";

const useForceUpdate = () => {
  const [_, setState] = useState(false);
  return () => setState((val) => !val);
};

function MusicPlayer(props) {
  const forceUpdate = useForceUpdate();
  console.log(props);
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [buttonImage, setButtonImage] = useState(
    "../../../../assets/pause.png"
  );
  const [volume, setVolume] = useState(0.25);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      audioEl.current.volume = volume;
    } else {
      audioEl.current.pause();
    }
  });

  const buttonControl = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setButtonImage("../../../../assets/play.png");
    } else {
      setIsPlaying(true);
      setButtonImage("../../../../assets/pause.png");
    }
  };

  const handleEnd = () => {
    props.handleEndOfSong();
    console.log("props.currentSong.songUrl");
    console.log(props.currentSong.songUrl);
  };

  return (
    <div className="music-player">
      <img
        src={props.currentSong.songImageUrl}
        style={{ width: "300px", height: "300px" }}
      />
      <p style={{fontSize: "18px", paddingTop: "5px"}}>
      <strong>{props.currentSong.songName}</strong>
      </p>
      {/* <p>{props.currentSong.artist}</p> */}
      <audio
        src={props.currentSong.songUrl}
        ref={audioEl}
        controls
        /* autoPlay */
        onEnded={handleEnd}
      ></audio>
    </div>
  );
}

export default MusicPlayer;
>>>>>>> QA
