import { useEffect, useState } from "react";
import ViewData from "./TabelView.jsx";
import './TabelView.css'


const FetchDetails = () =>{

    const [userData,setUserData] = useState([]);

    async function dataFetch(){
    const data =await fetch("https://jsonplaceholder.typicode.com/users");
    const res =await data.json();
    setUserData(res);
    }

    useEffect(() => 
        {dataFetch();
    },[]);

     return (
    <div>

      <h2>User Data</h2>
      <table className="user-table">

            <thead>
                <th>Name</th>
                <th>mail</th>
                <th>phone</th>
            </thead>

            <tbody>
                {userData.map((user, index) => (
                    <ViewData key={index} {...user} 
                    />
      ))}
            </tbody>
      </table>

    </div>
  );
}
export default FetchDetails;
