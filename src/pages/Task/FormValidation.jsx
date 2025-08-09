import { useState } from "react";

const FormDataValidation = () => {
  const Details = {
    name: "",
    age: "",
    address: "",
    phone: "",
    email: "",
  };

  const [userDetails, setUserDetails] = useState(Details);
  const [Error, setError] = useState({
    name: false,
    age: false,
    address: false,
    phone: false,
    email: false,
  });

  const inputValidation = (e) => {
    //const { name, value } = e.target;
    const isValid = valid(e.target.name, e.target.value);

    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

    if (isValid) {
      setError({ ...Error,[e.target.name]: false });
    } else {
      setError({ ...Error, [e.target.name]: true });
    }
  };

  const valid = (fieldName, fieldValue) => {
    switch(fieldName){
        case "name" :
            return fieldValue.length>=8 && fieldValue.length<=15;                   

         case "age" :
            return !isNaN(parseInt(fieldValue,10)) && parseInt(fieldValue,10)>=18;  
            
        case "email":
            return /^[^\s@]+@[^\s@]+\.(com)+$/.test(fieldValue);

        case "phone" :
            return /^d{0-9}$/.test(fieldValue);   
            
         default :
         return true;   
    }
}
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={inputValidation} type="text" name="name" id="name" />
          {Error.name && (
            <span style={{ color: "red" }}>
              Name should be between 8 to 15 characters
            </span>
          )}
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input onChange={inputValidation} type="text" name="age" id="age" />
          {Error.age && (
            <span style={{ color: "red" }}>
              You must be 18 years or older to fill the form
            </span>
          )}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input onChange={inputValidation} type="text" name="phone" id="phone" />
          {Error.phone && (
            <span style={{ color: "red" }}>Phone must be 10 digits</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input onChange={inputValidation} type="text" name="email" id="email" />
          {Error.email && (
            <span style={{ color: "red" }}>Invalid email format</span>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <textarea onChange={inputValidation} id="address" name="address" />
          {Error.address && (
            <span style={{ color: "red" }}>
              Address must be at least 5 characters
            </span>
          )}
        </div>

        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default FormDataValidation;
