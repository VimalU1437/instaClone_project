import { Link } from "react-router-dom";
import "./uploadPage.css";

export default function UploadPage({setFetchIndicator}){


    function formClickHandler(e){
        e.preventDefault();
        setFetchIndicator(pre=>{
            return !pre;
        })
        
    }

    return<form onClick={formClickHandler} id="upload_canvas">
            <input 
            type={"file"}
            id="input_upload"
            name="image"
            accept=".jpg, .jpeg, .png"
            />

            <input
            type={"text"}
            id="input_author"
            name="author"
            placeholder="Author"
            />

            <input
            type={"text"}
            id="input_location"
            name="location"
            placeholder="Location"
            />

            <input
            type={"text"}
            id="input_description"
            name="description"
            placeholder="Description"
            />

            <Link to={"/posts"}><button  id="input_btn">Post</button></Link>


        </form>
    
}