import { useState } from "react";

const EnqueryOptimization = () => {
  const [enquerydata, setEnquerydata] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    enquerydapartment: "",
    otherDepartment: "",
  });

  const [errorData, setErrorData] = useState({
    nameError: false,
    emailError: false,
    mobileError: false,
    addressError: false,
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      name: enquerydata.name,
      email: enquerydata.email,
      address: enquerydata.address,
      mobileNo: enquerydata.mobileNo,
      otherDepartment:
        enquerydata.enquerydapartment === "others"
          ? enquerydata.otherDepartment
          : enquerydata.enquerydapartment,
    };
    console.log("form submitted:", formData);
  };

  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const valid = isValid(name, value);

    setEnquerydata((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name" || name === "email" || name === "mobileNo" || name === "address") {
      setErrorData((prev) => ({
        ...prev,
        [`${name}Error`]: !valid,
      }));
    }
  };

  const isValid = (fieldName, fieldValue) => {
    if (fieldName === "name") {
      return fieldValue.length >= 8 && fieldValue.length <= 15;
    }
    if (fieldName === "email") {
      return /^[^\s@]+@[^\s@]+\.(com)$/i.test(fieldValue);
    }
    if (fieldName === "mobileNo") {
      return /^[6-9][0-9]{9}$/.test(fieldValue);
    }
    if (fieldName === "address") {
      return fieldValue.length <= 256;
    }
    return true; // default valid for non-validated fields
  };

  return (
    <div>
      <h1>Enquiry Optimization Component</h1>
      <form onSubmit={onSubmitForm}>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            onChange={inputChangeHandler}
            type="text"
            id="name"
            name="name"
            value={enquerydata.name}
          />
          {errorData.nameError && (
            <span style={{ color: "red" }}>
              Name must be between 8 and 15 characters
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={inputChangeHandler}
            type="text"
            id="email"
            name="email"
            value={enquerydata.email}
          />
          {errorData.emailError && (
            <span style={{ color: "red" }}>Please enter a valid email (e.g. abc@example.com)</span>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            onChange={inputChangeHandler}
            name="address"
            id="address"
            value={enquerydata.address}
          />
          {errorData.addressError && (
            <span style={{ color: "red" }}>
              Address should be less than 256 characters
            </span>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            onChange={inputChangeHandler}
            type="text"
            name="mobileNo"
            id="mobileNo"
            value={enquerydata.mobileNo}
          />
          {errorData.mobileError && (
            <span style={{ color: "red" }}>
              Mobile number must be 10 digits and start with 6-9
            </span>
          )}
        </div>

        {/* Enquery Department */}
        <div>
          <label htmlFor="enquerydapartment">Enquiry Department</label>
          <select
            onChange={inputChangeHandler}
            id="enquerydapartment"
            name="enquerydapartment"
            value={enquerydata.enquerydapartment}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="sales">Sales</option>
            <option value="tech">Tech</option>
            <option value="reseacher">Researcher</option>
            <option value="productivity">Productivity</option>
            <option value="others">Others</option>
          </select>
        </div>

        {/* Other Department - Conditional */}
        {enquerydata.enquerydapartment === "others" && (
          <div>
            <label>Other Department:</label>
            <input
              onChange={inputChangeHandler}
              name="otherDepartment"
              value={enquerydata.otherDepartment}
              type="text"
              placeholder="Enter Dept Name"
            />
          </div>
        )}

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EnqueryOptimization;
