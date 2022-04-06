import axios from "axios";
import { useState,useEffect } from "react";
import "./style/Post.css"
import cat from "./img/cat.png"
import kanan from "./img/kanan2.png"
import kiri from "./img/kiri2.png"
import avatar from "./img/avatar1.png"
import avatar2 from "./img/avatar2.png"
import footCat from "./img/footCat.png"

import Nav from "./Nav";

const Post=(props)=>{
    const [data,setData]=useState([])

    useEffect(()=>{
        // console.log(props.data)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
          setData(res.data)
        }).catch((err)=>{
          console.log(err)
        })
    },[])


    return(
    <>
    <Nav color="white" />
            <div className="post">
            <div className="bg">
                <img className="kanan" src={kanan}/>
                <img className="kiri" src={kiri}/>
            </div>
            <div className="containerPost">
            {data.map((v)=>{
                return <div data-aos="flip-right" className="cardPost" key={v.id}> 
                         <div className="avatar">
                            <img src={v.id%2 != 0 ?avatar: avatar2}/>
                         </div>
                          <div className="containerCardPost">
                              <div className="titleCardPost">
                                    <p>{v.title}</p>
                                </div>
                                <div className="bodyCardPost">
                                    <p>{v.body}</p>
                                </div>
                          </div>
                       </div>
            })}
            </div>
        </div>
    </>

    )
}

export default Post