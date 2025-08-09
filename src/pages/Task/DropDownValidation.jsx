import { useState } from "react";

const DropDown = () => {

     
    const [country,setCountry] = useState(' ');

    const [stateList,setStateList]   = useState([]);

    const [selectedState, setSelectedState] = useState('');

    const countryStateData = {
      USA: ['California', 'Texas', 'New York'],
      India: ['Maharashtra', 'Karnataka', 'Delhi'],
      Canada: ['Ontario', 'Quebec', 'British Columbia'],
    };
     
    const handleCountry =(e)=>{
        const  country =e.target.value;
        setCountry(country);
        setStateList(countryStateData[country] || [])
    }

    const handleState = (e) => {
        setSelectedState(e.target.value);
    }

return(
    <div>
       <form>
        <div>
            <select onChange={handleCountry} value={country}>
                <option value='' >Select country</option>
                {Object.keys(countryStateData).map((country)=>(
                    <option value={country} key={country}>{country}</option>
                ))}
            </select>
        </div>
        <div>
           <select onChange={handleState} value={selectedState} disabled={!country}>
                <option value=''>Select State</option>
                {stateList.map((state)=>(
                    <option value={state} key={state}>{state}</option>
                ))}
            </select>
        </div>
       </form>
    </div>
    )
}
export default DropDown;