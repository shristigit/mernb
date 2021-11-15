import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";

const About = () => {
    const Navigate= useNavigate();
    
    const callAboutPage = async () => {
        try{
            const res= await fetch('/about', {
                method: "GET" ,
                headers : {
                    Accept : "application/json" ,
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            const data= await res.json();
            console.log(data);

            if(!res.status == 200){
                const error=new Error(res.error);
                throw error;
            }
        }

        catch (err){
                console.log(err);
                Navigate('/login');
        }
    }

useEffect(() => {
    callAboutPage();
}, [])

    return (
        
        <div>
        <form method="GET">
           <h4>we are about page</h4> 
           <input type="button " value="edit"></input>
           </form>
        </div>
    )
}

export default About
