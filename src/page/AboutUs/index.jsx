import React, { useState } from "react";

const Aboutus =()=>{
    const [form, setForm] = useState({
    
    })

    const handleForm =(e)=>{
        console.log(e.target.value, e.target.name)
        setForm({...form, [e.target.name] : e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:8080/demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Check if the response is empty before calling response.json()
            const text = await response.text();
            if (!text) {
                console.log("Empty response received.");
                return;
            }
            const data = JSON.parse(text);
            console.log("Response Data:", data);
            
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return(
        <>
        <section className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div>
                            <p>{JSON.stringify(form)}</p>
                            <label htmlFor="Username">User Name</label>
                            <input type="text" name="username" className="form-control" placeholder="user name" onChange={handleForm}/>
                            </div>
                            <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" className="form-control" placeholder="user name" onChange={handleForm}/>
                            </div>
                            <div className="my-3">
                                <button type="btn" className="btn btn-primary">Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
        </section>
        </>
    )
}
export default Aboutus;