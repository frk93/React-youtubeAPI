import React from "react";

const VideoItem = props => {
  return (
    <div>
      <div
        onClick={() => {
          props.videoSelect(props.video);
        }}
        className="col s12"
        style={{ cursor: "pointer" }}
      >
        <div className="card horizontal">
          <div className="card-image">
            <img
              alt={props.video.snippet.description}
              src={props.video.snippet.thumbnails.high.url}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.video.snippet.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
