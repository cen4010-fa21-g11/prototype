import { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';


export default function SearchBar() {

  const [searchTerm, changeSearchTerm] = useState("");
  const [searchResults, changeSearchResults] = useState(null);

  //get data from backend
  async function GetSearchResults() {
    console.log(searchTerm);
  }


  return (
    <div className="center" style={{paddingTop: 100}}>
      <TextField value={searchTerm} variant="outlined" label="Find Items" onChange={e => changeSearchTerm(e.target.value)} />
      <Button variant="contained" onClick={() => GetSearchResults()} 
        style={{marginLeft: 35, minWidth: 100, minHeight: 53, backgroundColor: "#ababab"}}
      >
        Search
      </Button>
      <div>
        {searchResults && searchResults.map(item => {
          return <div></div>
        })}
      </div>
    </div>
  );
}