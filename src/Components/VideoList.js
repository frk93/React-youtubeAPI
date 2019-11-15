import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, VideoSelect }) => {
  return (
    <div>
      {videos.map(res => {
        return (
          <VideoItem
            video={res}
            key={res.id.videoId}
            videoSelect={VideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
