import { React } from "react";

export default function Results({ data }) {
  if (data) {
    return (
      <div>
        <h2>{data.word}</h2>
        <ul>
          {data.meanings.map((meaning, index) => {
            return (
              <li key={index}>
                <p>{meaning.partOfSpeech}</p>
                <ul>
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <li key={index}>
                        <p>{definition.definition}</p>
                      </li>
                    );
                  })}
                </ul>
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
