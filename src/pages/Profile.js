import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/common/Header"
import Button from "../components/common/Button";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/common/Loader";

function Profile(){
    const user= useSelector((state)=>state.user.user);
    // const[podcast,setPodcast]=useState([]);
    console.log("My User",user);
    if(!user){
        return <Loader/>
    }
    const handleLogout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("logout successfully");
          }).catch((error) => {
            // An error happened.
            toast.error(error.message);
          });
          
    }
    return(
        <div>
            <Header/>
            <div>
                
                <h2>Name : {user.name}</h2>
                <h2>Email : {user.email}</h2>
                <h2>UID : {user.uid}</h2>
                <Button text={"Logout"} onClick={handleLogout} style={{width:"200px!important"}}/>
            </div>
        </div>
    )
}

export default Profile;




