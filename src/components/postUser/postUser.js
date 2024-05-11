import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import "./postUser.css";
const PostUser = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:''
    });

    const navigate =  useNavigate()

    //method to post the user
    const handleSubmit = async (e) => {
        //to not submit empty data
        e.preventDefault();
            try{
             //creating post req  and sending post data from frontend to backend url
             //this api url data  wil send data to database whose logic is in server side page
      const response = await  fetch('http://localhost:5000/api/user/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
       //data in json format
     const data = await response.json(response);
     //also we get data with unique id i.e coming from backend api url
    console.log(data);
    //after posting user navigate to /
    navigate("/")
            } catch(error) {
               console.error(error.message);
            }
    }


    //uses spread operator to update the state with new key value
    const handleInputChange=(event) => {
           const {name, value} = event.target;
           setFormData({
            ...formData,
            [name]: value,
           });
    }
    return (
        <>
          <div className='center-form'>
            <h1>Post New User </h1>
            <Form onSubmit = {handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
                />
              </Form.Group>


              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
                />
              </Form.Group>


              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                type="text"
                name="phone"
                placeholder="Enter phone"
                value={formData.phone}
                onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Post User
              </Button>
            </Form>

          </div>
        </>
    )
}

export default PostUser;