import { React } from "react";

export default function Phonetics({ phonetics }) {
  return (
    <div>
      {phonetics.map((item, index) => {
        return (
          <>
            <p>{item.text}</p>
            <a href={item.audio}>Listen</a>
          </>
        );
      })}
    </div>
  );
}
