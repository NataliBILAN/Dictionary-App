import { React, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    console.log("searchValue", searchValue);
  };

  const handleTextFieldChange = ({ target }) => {
    setSearchValue(target.value);
  };
  
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Type a word"
        variant="outlined"
        value={searchValue}
        onChange={handleTextFieldChange}
      />
      <Button color="secondary" onClick={handleSearchButtonClick}>
        Search
      </Button>
    </div>
  );
}
