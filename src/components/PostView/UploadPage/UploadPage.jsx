
import { useNavigate } from "react-router-dom";
import "./uploadPage.css";

export default function UploadPage({setFetchIndicator}){

    const navigate = useNavigate();


    async function formClickHandler(e){
        e.preventDefault();
        console.log(e.target);
        let formData = new FormData(e.target);
        // let dataFromForm = Object.fromEntries(formData.entries());



       await fetch("https://insat-file-uploader-api.onrender.com/posts",{
        method:"post",
        body: formData,
        redirect :"follow"
        })
        .then(res=>{
            return res.text();

        })
        .then(text=>{
            console.log(text);
        })
        .catch(err=>{
            console.log(err);
        })

        
        
        setFetchIndicator(pre=>{
            return !pre;
        })

        navigate("/posts");
        
        
    }

    return<form onSubmit={formClickHandler} id="upload_canvas">

       
            <input 
            type={"file"}
            id="input_upload"
            name="image"
            accept=".jpg, .jpeg, .png"
            required
            />

            <input
            type={"text"}
            id="input_author"
            name="author"
            placeholder="Author"
            required
            />

            <input
            type={"text"}
            id="input_location"
            name="location"
            placeholder="Location"
            required
            />

            <input
            type={"text"}
            id="input_description"
            name="description"
            placeholder="Description"
            required
            />

            <button id="input_btn">Post</button>


        </form>
    
}