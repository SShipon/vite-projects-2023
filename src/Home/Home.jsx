import { useEffect } from "react";
import { useState } from "react";
import AppHome from "./AppHome";


const Home = () => {
    const [users, setUsers]= useState([])

    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res =>res.json())
     .then(data => setUsers(data))
    },[])
    

    return (
        <div className="mx-10">
            <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
             users.map(user =><AppHome
               key={user.id}
               user={user}
             ></AppHome>)
           }
        </div>
        </div>
    );
};

export default Home;