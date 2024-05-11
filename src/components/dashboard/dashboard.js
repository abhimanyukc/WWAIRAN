import { useEffect, useState } from "react";
import { Container, Row, Col, Table , Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    //calling getUsers api from nodejs server to react

    const [users,setUsers] = useState([]);
    const navigate = useNavigate();

    //use in fetching all users and deleting user
    const fetchUsers = async () => {
        try{
           const response = await  fetch("http://localhost:5000/api/user/")
           const data = await response.json();
           setUsers(data);
        //    console.log(data);
        } catch(error) {
            console.error("error while fetching users:", error.message);
        }
    }
    useEffect(() => {
        //calling fetchUsers method
        fetchUsers();
    }, []); //loop run one time

      
    //handleUpdate Method
    const handleUpdate = (userId) => {
        navigate(`/user/${userId}`);
    }

    //handleDelete Method
    const handleDelete = async (userId) => {
         //delete api working in react app
        try{
            //get response from url of that particular id
            const response = await  fetch(`http://localhost:5000/api/user/${userId}`, {
                method:"DELETE"
            });
           
            if(response.ok){
                //fetch that data
               fetchUsers();
            }
            console.log(response);
         } catch(error) {
             console.error("error while Deleting users:", error.message);
         }
    }
    return (
        <>
         <Container className="mt-5">
            <Row>
                <Col>
                <h1 className="text-center">
                 Dashboard Component
                </h1>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Button
                            variant="dark"
                            onClick={() => handleUpdate(user._id)}
                            >
                                Update
                            </Button>
                            <Button
                            variant="danger"
                            onClick={() => handleDelete(user._id)}
                            >
                                Delete
                            </Button>
                        </td>
                        </tr>
                    ))}
                  </tbody>
                </Table>
                </Col>
            </Row>
         </Container>
        </>
    )
}

export default Dashboard;