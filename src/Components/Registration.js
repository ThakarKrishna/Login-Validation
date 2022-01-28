import Login from "./Login";
import { useState ,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const getDatafromLS=()=>{
    const data = localStorage.getItem('details');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }




const Registration = () => {

    const [flag, setFlag] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("true");
    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState(getDatafromLS());




    const onSubmit = (e) => {
        e.preventDefault();




        let detail ={
           username,
           email,
           password,
           phone
            
        }
        setDetails([...details,detail]);
        setUsername("");
        setEmail("");
        setPassword("");
        setPhone("");

        if (!username || !email || !password || !phone) {
            setFlag(true);
        }
        else {
            setFlag(false);
            <Alert variant='success'><ThumbUpIcon/> Successfully Registered...</Alert>
            
     
            
            setLogin(!Login);

    }}




    const handleClick = () => {
        setLogin(!login);

    }

    useEffect(()=>{
        localStorage.setItem('details',JSON.stringify(details));
      },[details])
    return (
        <>
            <div className="container mt-3">
                
                {" "}
                {login ? (
                  

                    <Form onSubmit={onSubmit}>
                        <h1 className="text-center mt-5">Registration</h1>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter Username"
                                onChange={(e) => setUsername(e.target.value )} value={username}/>
 
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email}/>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone no.</Form.Label>
                            <Form.Control type="phone" placeholder="Enter phone no." onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                        
                        <Button variant="dark" style={{marginLeft:"1rem"}} type="reset" >Reset</Button>


                        <p onClick={handleClick} className="text-center " style={{ marginLeft: "31rem", cursor: "pointer" }}>
                            Already registered{" "}log in?

                        </p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                Every Field is important !
                            </Alert>)}
                    </Form>

                

                ) : (
                    <Login />
                )}
            </div>
        </>
    )

}
export default Registration;
