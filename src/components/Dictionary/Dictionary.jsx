import { React, useState, useEffect } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState(null);

  const search = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then((response) => setData(response.data[0]));
  };

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
  };

  useEffect(() => {
    if (isSubmitting && searchValue) {
      search();
      setIsSubmitting(false);
    }
  }, [search, isSubmitting]);

  console.log("data", data);

  return (
    <div>
      <TextField
        label="Type a word"
        variant="filled"
        type="search"
        autoComplete="off"
        value={searchValue}
        onChange={handleTextFieldChange}
        onKeyDown={handleEnterClick}
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={handleSearchButtonClick}
      >
        Search
      </Button>
    </div>
  );
}
