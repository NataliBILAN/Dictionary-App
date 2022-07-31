import { React } from "react";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Phonetics from "./../Phonetics";

export default function Results({ data, photos }) {
  if (data) {
    const isSynonimsExist = data.meanings.some(
      (item) => item.synonyms.length > 0
    );
    return (
      <div>
        <h2>{data.word}</h2>
        <Phonetics phonetics={data.phonetics} />
        <ul>
          {data.meanings.map((meaning, index) => {
            return (
              <li key={index}>
                <Divider textAlign="left">{meaning.partOfSpeech}</Divider>

                <ul className="definitions">
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <li key={index} className="definition">
                        <Typography variant="h6">Definition: </Typography>{" "}
                        <Typography variant="body1">
                          {definition.definition}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
                {isSynonimsExist && (
                  <>
                    <Typography variant="h6">Synonyms:</Typography>
                    <div className="synonyms-list">
                      {meaning.synonyms.map((synonym, index) => {
                        return <Typography key={index}>{synonym}</Typography>;
                      })}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
