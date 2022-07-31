import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <section className="gallery">
        <ImageList variant="quilted" cols={3} rowHeight={200}>
          {photos.map(function (photo, index) {
            return (
              <ImageListItem key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.photographer}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </section>
    );
  } else {
    return null;
  }
}
