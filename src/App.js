import React from "react";
import SearchBox from "./Components/SearchBox";
import "./Components/APIcall";
import APIcall from "./Components/APIcall";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = { videos: [], term: "buildings", onVideoSelect: null };
  ontermSelect = async term => {
    const response = await APIcall.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      onVideoSelect: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log("Video from the App", video);

    this.setState({ onVideoSelect: video });
  };

  componentDidMount() {
    this.ontermSelect(this.state.term);
  }

  render() {
    return (
      <div className="MainClass ">
        <SearchBox termSelect={this.ontermSelect} />
        <div className="row">
          <div className="col s9">
            <VideoDetail videoToPlay={this.state.onVideoSelect} />
          </div>
          <div className="col s3">
            <VideoList
              videos={this.state.videos}
              VideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
