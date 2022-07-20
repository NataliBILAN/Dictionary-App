import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";

import Results from "./../Results";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const search = useCallback(async () => {
    try {
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
        .then((response) => setData(response.data[0]));
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, [searchValue]);

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    search();
  };

  const handleEnterClick = ({ key }) => {
    if (key === "Enter") {
      search();
    }
  };

  const handleTextFieldChange = ({ target }) => {
    setSearchValue(target.value);
    setErrorMessage("");
    setData(null);
  };

  useEffect(() => {
    if (isSubmitting && searchValue) {
      search();
      setIsSubmitting(false);
    }
  }, [searchValue, search, isSubmitting]);

  console.log("data", data);
  console.log("errorMessage", errorMessage);

  

  return (
    <Container className="dictionary">
      <Typography variant="h4" className="dictionary-title">What word do you want to look up?</Typography>
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
            color="secondary"
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
    </Container>
  );
}
