import { useState } from "react";

const EnqueryOptimization = () => {
  const [enquerydata, setEnquerydata] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    emailError: false,
    mobileError: false,
    addressError: false,
    nameError: false,
    enquerydapartment: "",
    otherDepartment:""
  });

  const onSubmitForm = (e) => {
    e.preventDefault(); 
    const formData = {
      name: enquerydata.name,
      email: enquerydata.email,
      address: enquerydata.address,
      mobileNo: enquerydata.mobileNo,
      otherDepartment:  enquerydata.enquerydapartment === "others" ? enquerydata.otherDepartment : enquerydata.enquerydapartment
    };
    console.log("form submitted:", formData);
  };

  const changeNameListener = (e) => {
    const name = e.target.value;
    setEnquerydata(prev => ({
      ...prev,
      name,
      nameError: name.length < 8 || name.length > 15
    }));
  };

  const emailValidation = (e) => {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[com]+$/.test(email);
    setEnquerydata(prev => ({
      ...prev,
      email,
      emailError: !isValid
    }));
  };

  const mobileNoListener = (e) => {
    const mobileNo = e.target.value;
    const isValid = /^[6-9][0-9]{9}$/.test(mobileNo);
    setEnquerydata(prev => ({
      ...prev,
      mobileNo,
      mobileError: !isValid
    }));
  };

  const textLength = (e) => {
    const address = e.target.value;
    setEnquerydata(prev => ({
      ...prev,
      address,
      addressError: address.length > 255
    }));
  };

  const enqueryDepartment = (e) => {
    console.log("Selected Department:", e.target.value);
    e.preventDefault();
    setEnquerydata(prev => ({
        ...prev,
        enquerydapartment: e.target.value
    }));
}
    const otherDepartment = (e)=>{
        e.preventDefault();
        console.log("Other Department:", e.target.value);
        setEnquerydata(prev => ({
            ...prev,
            otherDepartment: e.target.value
        }));

    }
    
  

  return (
    <div>
      <h1>Enquiry Optimization Component</h1>
      <form onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={changeNameListener}
            type="text"
            id="name"
            name="name"
            value={enquerydata.name}
          />
          {enquerydata.nameError && (
            <span style={{ color: "red" }}>
              Name must be between 8 and 15 characters
            </span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={emailValidation}
            type="text"
            id="email"
            name="email"
            value={enquerydata.email}
          />
          {enquerydata.emailError && (
            <span style={{ color: "red" }}>
              Please enter a valid email
            </span>
          )}
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            onChange={textLength}
            name="address"
            id="address"
            value={enquerydata.address}
          />
          {enquerydata.addressError && (
            <span style={{ color: "red" }}>
              Address should be less than 256 characters
            </span>
          )}
        </div>

        <div>
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            onChange={mobileNoListener}
            type="text"
            name="mobileNo"
            id="mobileNo"
            value={enquerydata.mobileNo}
          />
          {enquerydata.mobileError && (
            <span style={{ color: "red" }}>
              Mobile number must be 10 digits and start with 6-9
            </span>
          )}
        </div>
        
        <div>
            <label htmlFor="submit">EnqueryDepartment</label>
            <select onChange={enqueryDepartment} id="submit" value={enquerydata.enquerydapartment}>
                <option value="" disabled>Select</option>  
                <option value="sales">Sales</option>
                <option value="tech">Tech</option>
                <option value="reseacher">Reseacher</option>
                <option value="productivity">productivity</option>
                <option value="others">Others</option>
            </select>
            {enquerydata.enquerydapartment === "others" && (
                <div>
                    <input onChange={otherDepartment}
                    value={enquerydata.otherDepartment} type="text" placeholder="Enter Dept Name" />
                </div>
            )}
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EnqueryOptimization;
