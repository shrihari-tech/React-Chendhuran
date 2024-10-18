import React, { useState } from "react";

const FormHandling = ()=>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:""
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value,
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }

    return(
        <>
        <div>Form</div>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name
                    <input type="text"
                        name="name" 
                        value={formData.name}  
                        onChange={handleChange}>
                    </input>
                </label>
                <label>Name
                    <input type="email"
                        name="email" 
                        value={formData.email}  
                        onChange={handleChange}>
                    </input>
                </label>
                <label>Name
                    <input type="password"
                        name="password" 
                        value={formData.name}  
                        onChange={handleChange}>
                    </input>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )

}

export default FormHandling;