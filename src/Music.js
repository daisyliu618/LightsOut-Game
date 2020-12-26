import React from "react";
import "./Music.css";

const goeasy = "http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3";
const dreams = "https://www.mboxdrive.com/bensound-thejazzpiano.mp3";

const chillout =
  "https://www.mboxdrive.com/bensound-theelevatorbossanova.mp3";

const twistter =
  "https://www.mboxdrive.com/bensound-romantic.mp3";

const freebird =
  "https://www.mboxdrive.com/bensound-jazzyfrenchy.mp3";

const love = "https://www.mboxdrive.com/bensound-love.mp3";

const morningdew = "https://www.mboxdrive.com/bensound-hipjazz.mp3";


const thelounge = "https://www.mboxdrive.com/bensound-thelounge.mp3";



function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}


class Music extends React.Component {
    state = {
      currentSong: null,
      music: "stopped",
      currentTime: null,
      duration: null
    };
  
    render() {
      const currentTime = getTime(this.state.currentTime);
      const duration = getTime(this.state.duration);
      const playlist = [
        {
          id: 1,
          title: "Go Easy",
          url:
        
            "https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"
        },
        {
          id: 2,
          title: "Dreams",
          url:
            "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 3,
          title: "Chill Out",
          url:
            "https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg"
        },
        {
          id: 4,
          title: "Twistter",
          url: "https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg"
        },
        {
          id: 5,
          title: "Free Bird",
          url:
          "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"
        },
        {
            id: 6,
            title: "  Love",
            url:
            "https://miro.medium.com/max/1880/1*OEnS6-DEn56szCwdOs2mrA.jpeg"
          },

          {
            id: 7,
            title: "Morning Dew",
            url:
            "https://4.bp.blogspot.com/-uoRLD4xLtAA/Wu4EtbgR24I/AAAAAAAALYY/KYX7vDFy4LUHcMFxXYATKWc-TAQFpLO9gCLcBGAs/s1600/morning_dew.jpg"
          },

          {
            id: 8,
            title: "The Lounge",
            url:
            "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"
          }

      ].map(item => {
        return (
          <div class="ui list">
            <div class="item">
              <img class="ui avatar image" src={item.url} alt="music images" />
              <div class="content">
                <li
                  className="title"
                  key={item.id}
                  onClick={() => this.setState({ currentSong: item.title })}
                >
                  {item.title}
                </li>
              </div>
            </div>
          </div>
        );
      });
  
      return (
        
            <div className="ui card main-container">
              <div className="info-container">
                {this.state.music === "playing" ? (
                  <div className="current-song">
                    Now Playing {this.state.currentSong}
                  </div>
                ) : <div className="current-song">
                Choose Your Song
              </div>}
                {this.state.music === "paused" ? (
                  <div className="current-song">
                    {this.state.currentSong} is paused{" "}
                  </div>
                ) : null}
                {this.state.music === "playing" ||
                this.state.music === "paused" ? (
                  <div>
                    {currentTime} / {duration}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="button-container">
                {this.state.music === "paused" && (
                  <button
                    class="ui labeled icon secondary basic button"
                    onClick={() => this.setState({ music: "playing" })}
                  >
                    <i class=" large play circle outline icon" />
                    Play
                  </button>
                )}
                {this.state.music === "playing" && (
                  <button
                    class="ui labeled icon secondary basic button"
                    onClick={() => this.setState({ music: "paused" })}
                  >
                    <i class="large pause circle outline icon" />
                    Pause
                  </button>
                )}
                {this.state.music === "playing" ||
                this.state.music === "paused" ? (
                  <button
                    class="ui labeled icon secondary basic button"
                    onClick={() => this.setState({ music: "stop" })}
                  >
                    <i class="large stop circle outline icon" />
                    Stop
                  </button>
                ) : null}
              </div>
  
              <div className="playlist">{playlist}</div>
  
              <audio ref={ref => (this.music = ref)} />
            </div>
         
    
      );
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.currentSong !== prevState.currentSong) {
        let track;
        switch (this.state.currentSong) {
          case "Go Easy":
            track = goeasy;
            break;
          case "Dreams":
            track = dreams;
            break;
          case "Chill Out":
            track = chillout;
            break;
          case "Twistter":
            track = twistter;
            break;
          case "Free Bird":
            track = freebird;
            break;
          case "Love":
            track = love;
            break;
          case "Morning Dew":
            track = morningdew;
            break;
        case "The Lounge":
            track = thelounge;
            break;
          default:
            break;
        }
  
        if (track) {
          this.music.src = track;
          this.music.play();
          this.setState({
            music: "playing"
          });
        }
      }
  
      if (this.state.music !== prevState.music) {
        if (this.state.music === "paused") {
          this.music.pause();
        }
        if (this.state.music === "playing" && prevState.music === "paused") {
          this.music.play();
        }
        if (this.state.music === "stop") {
          this.music.pause();
          this.currentTime = 0;
          this.setState({
            currentSong: null
          });
        }
      }
    }
  
    componentDidMount() {
      this.music.addEventListener("timeupdate", e => {
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }
  
    componentWillUnmount() {
      this.music.removeEventListener("timeupdate", () => {});
    }
  }
 
export default Music;