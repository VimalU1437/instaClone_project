
import{BsThreeDots,BsHeart} from "react-icons/bs"
import{FaRegPaperPlane} from "react-icons/fa";
import "./postCard.css";


export default function PostCard({user}){

    return<div className="post_card">
    <h4 className="post_name" >{user.name}</h4>
    <address className="post_location" >{user.location}</address>
    <BsThreeDots className="three_dots" />
    <img className="post_img" src={user.PostImage} alt="post"/>
    <BsHeart className="post_heart"/>
    <FaRegPaperPlane className="post_plane"/>
    <time className="post_date">{user.date}</time>
    <p className="post_likes">{user.likes} likes</p>
    <dd className="post_description">{user.description}</dd>
    </div>

}