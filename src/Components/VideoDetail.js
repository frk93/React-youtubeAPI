import React from "react";
import "./videoDetail.css";

const VideoDetail = ({ videoToPlay }) => {
  if (!videoToPlay) {
    return <div>Loading....</div>;
  } else {
    const URL = `https://www.youtube.com/embed/${videoToPlay.id.videoId}`;
    return (
      <div style={{ paddingTop: "5px" }}>
        <iframe width="100%" height="700" src={URL}></iframe>
        <div className="bottomLine">
          <h4>{videoToPlay.snippet.title}</h4>
          <p>{videoToPlay.snippet.description} </p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
