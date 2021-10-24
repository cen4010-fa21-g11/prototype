import { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';


export default function SearchBar() {

  const [searchTerm, changeSearchTerm] = useState("");
  const [searchResults, changeSearchResults] = useState(null);

  //get data from backend
  async function GetSearchResults() {
    try {
      let res = await axios.get("http://localhost:3000/~cen4010_fa21_g11/prototype.php", {
        params: {
          request: searchTerm
        }
      });
      changeSearchResults(res.data);
    }
    catch(err) {
      console.log(err);
    }
  }


  return (
    <div className="center" style={{paddingTop: 100}}>
      <h1>Search for users</h1>
      <TextField value={searchTerm} variant="outlined" label="Find Users" onChange={e => changeSearchTerm(e.target.value)} />
      <Button variant="contained" onClick={() => GetSearchResults()} 
        style={{marginLeft: 35, minWidth: 100, minHeight: 53, backgroundColor: "#ababab"}}
      >
        Search
      </Button>
      <div>
        {searchResults && searchResults.map((item, index) => {
          return <div key={index}><h2>{item}</h2></div>
        })}
      </div>
    </div>
  );
}