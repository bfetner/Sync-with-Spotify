import React, { Component, useState, Fragment, useEffect } from "react";
import {
  Form,
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
} from "antd";
import Axios from "axios";
import "../../css/SongSearch.css";
import { PlusOutlined } from "@ant-design/icons";

const SongSearch = (props) => {
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

  return (
    <div className="songsearch-main">
      <div class="main">
        <div className="searchsong-text searchsong-title-text">
          Search for a Song
        </div>
      </div>

      <div>
        {options && (
          <AutoComplete
            style={{ width: "calc(100% - 15px)", marginBottom: "10px" }}
            onSearch={(value) => {
              setSearchValue(value);
              console.log(value);
              let result = viewData.filter((d) =>
                d.title.toLowerCase().includes(value.toLowerCase())
              );
              setSearchedData(result);
            }}
            onSelect={(value) => {
              setSearchValue(value);
              console.log(value);
              let result = viewData.filter((d) =>
                d.title.toLowerCase().includes(value.toLowerCase())
              );
              setSearchedData(result);
            }}
            notFoundContent="Sorry, that song was not found..."
            options={options}
            placeholder={"Search for a song"}
            filterOption={(inputValue, input) =>
              input.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          ></AutoComplete>
        )}
      </div>

      <div className="searchsong-results">
        <Divider />
        {searchedData && searchedData.length > 0 && (
          <div>
            <Row>
              <div class="main">
                <div className="searchsong-text">
                  {'Searched Songs by Name "' + searchValue + '"'}
                </div>
              </div>

              {searchedData &&
                searchedData.map((d, index) => (
                  <div className="songsearch-result-card">
                    <div className="songsearch-result-card-image-title">
                      <img
                        alt="example"
                        src={d.url}
                        style={{ width: "50px" }}
                      />
                      <div> {d.title}</div>
                    </div>
                    <div className="songsearch-add-icon-div">
                      <PlusOutlined className="searchsong-add-icon" />
                    </div>
                  </div>
                ))}
            </Row>
            <Divider />
          </div>
        )}

        <div class="main">
          <div className="searchsong-text">
            {searchedData && searchedData.length > 0
              ? "Recommended Songs"
              : "Recommended Songs"}
          </div>
        </div>

        {viewData &&
          viewData.map((d, index) => (
            <div className="songsearch-result-card">
              <div className="songsearch-result-card-image-title">
                <img alt="example" src={d.url} style={{ width: "50px" }} />
                <div> {d.title}</div>
              </div>
              <div className="songsearch-add-icon-div">
                <PlusOutlined className="searchsong-add-icon" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SongSearch;