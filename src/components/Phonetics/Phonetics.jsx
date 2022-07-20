import { React } from "react";
import { CardMedia } from "@mui/material";
import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function Phonetics({ phonetics }) {
  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };
  return (
    <div>
      {phonetics.map((item, index) => {
        return (
          <div key={index}>
            <div className="phonetic">
              <p>{item.text}</p>

              <audio className="audio-element">
                <source src={item.audio}></source>
              </audio>
              <IconButton aria-label="play/pause" onClick={playAudio}>
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
}
