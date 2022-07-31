import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";

import Results from "./../Results";
import Photos from "./../Photos";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("peace");
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [photos, setPhotos] = useState(null);

  const pexelApiKey =
    "563492ad6f917000010000019419c4fa17674249b2f99cb72490cf3f";

  const getPhotos = useCallback(async () => {
    try {
      await axios
        .get(
          `https://api.pexels.com/v1/search?query=${searchValue}&per_page=9`,
          { headers: { Authorization: `Bearer ${pexelApiKey}` } }
        )
        .then((response) => setPhotos(response.data.photos));
    } catch (error) {
      setErrorMessage(error.message);
      setPhotos(null);
    }
  }, [searchValue]);

  const search = useCallback(async () => {
    try {
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((response) => setData(response.data[0]));
    } catch (error) {
      setErrorMessage(error.message);
      setData(null);
    }
  }, [searchValue]);

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    search();
  };

  const handleEnterClick = ({ key }) => {
    if (key === "Enter") {
      search();
      getPhotos();
    }
  };

  const handleTextFieldChange = ({ target }) => {
    setSearchValue(target.value);
    setErrorMessage("");
    setData(null);
    setPhotos(null);
  };

  useEffect(() => {
    if (isSubmitting && searchValue) {
      search();
      getPhotos();
      setIsSubmitting(false);
    }
  }, [searchValue, search, isSubmitting, getPhotos]);

  return (
    <Container className="dictionary">
      <Typography variant="h4" className="dictionary-title" gutterBottom="true">
        What word do you want to look up?
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            type="search"
            autoComplete="off"
            value={searchValue}
            onChange={handleTextFieldChange}
            onKeyDown={handleEnterClick}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              backgroundColor: "#d88d0e",
            }}
            variant="contained"
            onClick={handleSearchButtonClick}
            disabled={searchValue === "" ? true : false}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Typography variant="caption">i.e. london, html, yoga, coding</Typography>
      {errorMessage && (
        <Typography variant="h3" color="red">
          {errorMessage}
        </Typography>
      )}
      <Results data={data} />
      {!errorMessage && <Photos photos={photos} />}
    </Container>
  );
}
