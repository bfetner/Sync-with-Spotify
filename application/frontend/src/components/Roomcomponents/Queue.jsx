import React, { Component, useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Comment, List } from "antd";
import Axios from "axios";
import "../../css/Queue.css";

const Queue = (props) => {
  const handleCheck = (e) => {
    console.log(e.target.id);
    props.updateQueueVote(e.target.id);
  };

  const renderQueue = () => {
    console.log("props.queueSongs.length");
    console.log(props.queueSongs);
    console.log(props.queueSongs.length);
    if (props.queueSongs.length > 0) {
      console.log(props.queueSongs[0].title);
      console.log(props.queueSongs[0].url);
      console.log(props.queueSongs[0].music);
    }
    console.log(props.queueSongs.length == 1);
    if (
      props.queueSongs.length == 0 ||
      (props.queueSongs.length == 1 &&
        props.queueSongs[0].title == "0" &&
        props.queueSongs[0].url == "0" &&
        props.queueSongs[0].music == "0")
    ) {
      return (
        <div class="queue-says">
          <em>Click on "Search for a Song" to add a song to the queue!</em>
        </div>
      );
    }
    if (props.queueSongs) {
      return props.queueSongs.map((song) => {
        if (!(song.title == "0" && song.url == "0" && song.music == "0")) {
          return (
            <div class="songdiv">
              <div className="songdiv-song-title">
                <img className="songdiv-img" src={song.url} />
                {song.title}
              </div>

              <div className="song-vote-checkbox">
                <div className="song-vote">{song.vote}</div>
                <Checkbox
                  className="song-checkbox"
                  type="checkbox"
                  id={song.queueSongId}
                  onChange={handleCheck}
                  checked={song.userVote}
                />
              </div>
            </div>
          );
        }
      });
    }
  };

  return (
    <div className="queue-main">
      <div class="queue-header">
        <strong>Queue</strong>
        <strong>Votes</strong>
      </div>
      <div className="queue-render">{renderQueue()}</div>
    </div>
  );
};

export default Queue;
