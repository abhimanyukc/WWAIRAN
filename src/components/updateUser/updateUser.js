import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import React from "react";
import "./updateUser.css";
const UpdateUser = () => {
    //getting id from url
    const { id } = useParams();
    const  navigate = useNavigate();

    //useState for input field
    //setForm data to set data
    const [formData, setFormData] = React.useState({
        name:'',
        email:'',
        phone:''
    });

    React.useEffect(() => {
        const fetchUser = async () => {
            try{
               const response = await  fetch(`http://localhost:5000/api/user/${id}`);
               const data = await response.json();
               setFormData(data);
               console.log(data);
            } catch(error) {
                console.error("error while fetching users:", error.message);
            }
        }
        //calling fetchUser method to fetch user by id
        fetchUser();
    }, [id]); //loop run one time, passing id that we got from url

      //uses spread operator to update the state with new key value
      const handleInputChange=(event) => {
        const {name, value} = event.target;
        setFormData({
         ...formData,
         [name]: value,
        });
 }


 //founction for updating data
 const handleSubmit = async (e) => {
  //to not submit empty data
  e.preventDefault();
      try{
       //creating update req  and sending update data from frontend to backend url
       //this updated data will be send and updated to backend api url with id endpoint
const response = await  fetch(`http://localhost:5000/api/user/${id}`, {
  method: "PATCH",
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


    return (
        <>
      <div className='center-form'>
            <h1>Update New User </h1>
            <Form onSubmit= {handleSubmit} >
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
                Update User
              </Button>
            </Form>

          </div>
        </>
    )
}

export default UpdateUser;