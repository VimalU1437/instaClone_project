import { useEffect } from "react";
import { useState } from "react";
import {FaCampground} from "react-icons/fa";
import {BsCamera} from "react-icons/bs";
import "./postView.css";
import PostCard from "./PostCard/PostCard";
import{Link, Route, Routes} from "react-router-dom";
import UploadPage from "./UploadPage/UploadPage";


export default function PostView (){
    
    const [userData , setUserData] = useState([]);
    const [fetchIndicator ,setFetchIndicator] = useState(true);

    useEffect(()=>{
        fetch("https://insat-file-uploader-api.onrender.com/posts")
        .then(res=>{return res.json()})
        .then(data=>{
            console.log(data);
            setUserData(data);
        }).catch(err=>{
            console.log(err);
        })
        // console.log("fetched");
    },[fetchIndicator]);


    
    return<>
    <div id="post_header">
    <FaCampground id="post_main_icon"/>
    <h1 id="post_main_heading">InstaClone</h1>
    <Link to={"/posts/upload"}><BsCamera 
    id="post_main_cam"
    /></Link>
    </div>
    <Routes>
        <Route path="/" element={
            userData.map(user=>{
            const key = new Date().getTime() - Math.random().toString();
            return <PostCard user = {user} key = {key} />   
        })} 
        />
        <Route path="/upload" element={<UploadPage setFetchIndicator={setFetchIndicator}/>} />
    </Routes>
    </>
}