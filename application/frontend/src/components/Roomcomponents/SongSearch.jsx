import React, { Component, useState, Fragment, useEffect } from "react";
import {
  Input,
  Button,
  Checkbox,
  Comment,
  List,
  AutoComplete,
  Row,
  Col,
  Card,
  Divider,
  Typography,
  Popover,
} from "antd";
import { Container, Image, Form } from "react-bootstrap";
import Axios from "axios";
import "../../css/SongSearch.css";
import { PlusOutlined } from "@ant-design/icons";
import SpotifyWebApi from "spotify-web-api-node";
import Cookies from "js-cookie";
import TrackSearchResult from "./TrackSearchResult.js";
import SearchResultCard from "./SearchReultCard";

const spotifyApi = new SpotifyWebApi({
  clientId: "ad4f63abc34f445d9f82549d5dcfeb67",
});

const SongSearch = (props) => {
  /* functions for user data in local storage */
  const deleteCurrentUser = () => {
    localStorage.removeItem("currentUser");
    Cookies.remove("spotifyAuthToken");
  };

  const updateCurrentUser = (updateUserInfo) => {
    const stringUpdateUserInfo = JSON.stringify(updateUserInfo);
    localStorage.setItem("currentUser", stringUpdateUserInfo);
  };

  const retrieveCurrentUser = () => {
    const stringRetrieveUserInfo = localStorage.getItem("currentUser");
    const retrieveUserInfo = JSON.parse(stringRetrieveUserInfo);
    return retrieveUserInfo;
  };

  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  const viewRooms = () => {};
  useEffect(() => {
    setOptions(props.avaliableSongs);
  }, []);

  useEffect(() => {
    let tempOptions = [];
    props.avaliableSongs.forEach((d) => {
      tempOptions.push({ value: d.title });
    });
    setOptions(tempOptions);
    setViewData(props.avaliableSongs);
  }, []);

  console.log(viewData);
  console.log("options");
  console.log(options);

  useEffect(() => {
    if (searchValue === "") {
      setSearchedData([]);
    }
  }, [searchValue]);

  const searchRoom = () => {
    if (searchValue === "") return;
    let result = viewData.filter((d) =>
      d.room_name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedData(result);
  };

  const handleAddClick = (e) => {
    props.addSongToQueue(e);
  };

  /* Functions for spotify search START */
  const user = retrieveCurrentUser();

  const accessToken = user.spotifyToken;
  console.log("accessToken");
  console.log(accessToken);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recommendedResults, setRecommendedResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState([]);

  function chooseTrack(track) {
    setPlayingTrack(track);
    console.log("track");
    console.log(track);
    setSearch("");
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  /* get results from search */
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          const largestAlbumImage = track.album.images.reduce(
            (largest, image) => {
              if (image.height > largest.height) return image;
              return largest;
            },
            track.album.images[0]
          );

          return {
            songId: track.id,
            songName: track.name,
            songArtist: track.artists[0].name,
            songTrackUrl: track.uri,
            smallSongImageUrl: smallestAlbumImage.url,
            largeSongImageUrl: largestAlbumImage.url,
            songDuration: track.duration_ms,
          };
        })
      );
      console.log("searchResults");
      console.log(searchResults);
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  /* get recommended results */
  useEffect(() => {
    if (!accessToken) return;
    let cancel = false;

    console.log("genre:" + props.roomGenre);
    spotifyApi.searchTracks("genre:" + props.roomGenre).then((res) => {
      if (cancel) return;
      console.log("res");
      console.log(res);
      setRecommendedResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          const largestAlbumImage = track.album.images.reduce(
            (largest, image) => {
              if (image.height > largest.height) return image;
              return largest;
            },
            track.album.images[0]
          );

          return {
            songId: track.id,
            songName: track.name,
            songArtist: track.artists[0].name,
            songTrackUrl: track.uri,
            smallSongImageUrl: smallestAlbumImage.url,
            largeSongImageUrl: largestAlbumImage.url,
            songDuration: track.duration_ms,
          };
        })
      );
      console.log("recommendedResults");
      console.log(recommendedResults);
    });

    return () => (cancel = true);
  }, ["genre:" + props.roomGenre, accessToken]);

  /* Functions for spotify search END */

  return (
    <div className="songsearch-main">
      <div class="main">
        <div className="searchsong-text searchsong-title-text">
          Search for a Song
        </div>
      </div>

      <div className="searchsong-results">
        {/* Spotify song search START */}
        <Container
          /* className="d-flex flex-column py-2" */
          style={{ padding: "0px" }}
        >
          <Form.Control
            type="search"
            placeholder="Search Songs / Artists"
            value={search}
            onChange={(e) => {
              console.log("e");
              console.log(e);
              setSearch(e.target.value);
            }}
            style={{ marginBottom: "20px" }}
          />
          <div>
            {searchResults.map((track) => (
              <SearchResultCard track={track} handleAddClick={handleAddClick} />
            ))}
          </div>
        </Container>

        <Divider />

        <div class="main">
          <div className="searchsong-text">
            {"Recommended Songs"}
          </div>
        </div>

        {recommendedResults.map((track) => (
          <SearchResultCard track={track} handleAddClick={handleAddClick} />
        ))}
      </div>
    </div>
  );
};

export default SongSearch;
