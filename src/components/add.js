import React, { useState } from "react";
import { createContact } from "./apiService"; 

const Add = ({ showPopUp, togglePopUp }) => {
  const [formData, setFormData] = useState({
    type: "", 
    name: "",
    address: "",
    contactNumber: "",
    description: "",
  });
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "type") {
      setSelectedType(value); 
    }
  };

  const submitInput = async () => {
    try {
      const response = await createContact(formData); 

      if (response.status === 201) {
        alert("Contact created successfully!");
        togglePopUp();
        setFormData({ type: "", name: "", address: "", contactNumber: "", description: "" });
      } else {
        const errorMessage = await response.text();
        console.error("Error creating contact:", errorMessage);
        alert("Failed to create contact: " + errorMessage);
      }
    } catch (error) {
      console.error("Error creating contact:", error);
      alert("Failed to create contact. Please check your network connection.");
    }
  };

  return (
    <div>
      <div className="Add AddStyle" onClick={togglePopUp}>Add New Data</div>

      <div className={showPopUp ? "PopUp" : "hide"}>
        <div className="PopUpContent">
          <div className="closePopUp" onClick={togglePopUp}>X</div>

          <div className="addDataInputs">
            <div className="addDataTypes">
              <div className="addDataTypesType">Type</div>
              <select className="addDataSelect" name="type" onChange={handleChange} value={formData.type}>
                <option value="">Choose One</option>
                <option value="Person">Person</option>
                <option value="Shelter">Shelter</option>
                {/* ...Other options */}
              </select>
            </div>

            {/* Conditionally render fields based on type */}
            {(selectedType === "Person" || selectedType === "Shelter") && (
              <div>
                <div className="nameRow">Name</div>
                <input type="text" className="Inputs" name="name" value={formData.name} onChange={handleChange} placeholder={selectedType === "Person" ? "Enter one name" : "Enter name of shelter"} />
                
                <div className="phoneRow">Contact </div>
                <input type="text" className="Inputs" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Phone Number" />
              </div>
            )}

            <div className="addressType">
              <div className="addressRow">Address</div>
              <input type="text" className="Inputs" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address, City, State, Zip Code" />
            </div>

            <div className="descriptionType">
              <div className="descriptionRow">Description</div>
              <textarea className="descriptionInputs" name="description" value={formData.description} onChange={handleChange} placeholder="Relevant details for first responders"></textarea>
            </div>

            {/* Add more conditional fields for other types as needed */}

            <div onClick={submitInput} className="inputButton">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
