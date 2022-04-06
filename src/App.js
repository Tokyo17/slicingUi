import Home from "./component/Home";
import Post from "./component/Post";
import axios from "axios";
import Nav from "./component/Nav";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import {useState} from "react"

function App() {

const[data,setData]=useState([])

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
    setData(res.data)
  }).catch((err)=>{
    console.log(err)
  })


  return (
    <>
          {/* <Nav/> */}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/post" element={<Post  data={data}/>} />
    </Routes>
    </>
 
  );
}

export default App;
