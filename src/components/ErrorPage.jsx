import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();
    const [countdown,setCountdown] = useState(5);
    useEffect(() => {
        const countInterval = setInterval(()=>{
            setCountdown((prevCountdown)=>prevCountdown -1);
        },1000);

        setTimeout(()=>{
            clearInterval(countInterval);
            navigate('/home');
        },5000);

        return ()=> clearInterval(countInterval);
    },[navigate]);
    return(
        <div>
            <h1>Page not found</h1>
            <p>Redirecting to home in {countdown}seconds...</p>
        </div>
    );
}

export default ErrorPage