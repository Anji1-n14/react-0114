import { useEffect, useState } from "react";
import ViewData from "./TabelView.jsx";
import './TabelView.css'


const FetchDetails = () =>{

    const [userData,setUserData] = useState([]);
    const [serchValue,setSerchValue] = useState("");
    const [filterData,setFilterData] = useState([]);

    async function dataFetch(){
    const data =await fetch("https://jsonplaceholder.typicode.com/users");
    const res =await data.json();

    setUserData(res);
    }

    useEffect(() => 
        {dataFetch();
    },[]);

    const handleSearch=(e) =>{
      const value = e.target.value.toLowerCase();
      setSerchValue(value);
      const filtered = userData.filter((user) =>
    Object.values(user).some((val) =>
      String(val).toLowerCase().includes(value)
    )
  );
      setFilterData(filtered);
      console.log(filtered);

    }

     return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={serchValue}
        onChange={handleSearch}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <h2>User Data</h2>
      <table className="user-table">

            <thead>
                <th>Name</th>
                <th>mail</th>
                <th>phone</th>
            </thead>

            <tbody>
                {filterData.map((user, index) => (
                    <ViewData key={index} {...user} 
                    />
      ))}
            </tbody>
      </table>

    </div>
  );
}
export default FetchDetails;
