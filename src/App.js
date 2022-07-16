import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="dictionary-wrapper">
      <TextField id="outlined-basic" label="Type a word" variant="outlined" />
      <Button color="secondary">Search</Button>
    </div>
  );
}

export default App;
