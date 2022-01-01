import React from "react";
import { NavLink } from "react-router-dom";
import useVideosList from "../../hooks/useVideosList";
import classes from "../../styles/videos.module.css";
import Video from "./Video";
export default function Videos() {
  const { loading, error, videos } = useVideosList;
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <NavLink to="/quiz" key={video.youtubeID}>
            <Video title={video.title} id={video.youtubeID} noq={video.noq} />
          </NavLink>
        ))}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an erro!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
