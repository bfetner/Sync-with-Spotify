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
