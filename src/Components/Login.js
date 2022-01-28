import Home from "./Home ";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button'

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);



   
   const handleLogin = (e) => {
        e.preventDefault();

        // let mail = localStorage.getItem("email").replace(/"/g, "");
        // console.log(mail);
        // let pass = localStorage.getItem("password").replace(/"/g, "");
        // console.log(pass);

        let datas = localStorage.getItem("details");
        console.log(datas);
        
        datas.map((detail)=>{
            return detail.username;

        })


        // if(!email || !password){
        //     setFlag(true);
        //     console.log("empty")

        // }
        // else if(password !== pass || email !== mail){
        //     setFlag(true)
        // }
        // else{
        //     setHome(!home);
        //     setFlag(false);
        // }

    }

    return (
        <>
            <div className="container mt-3">
            {home?(
                <Form onSubmit={handleLogin}>
                
                <h1 className="text-center mt-5">Login</h1>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        onChange={(e)=> setEmail(e.target.value)} />
                       

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        onChange={(e)=> setPassword(e.target.value)} 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    


                    {flag && (
                        <Alert color="primary" variant="warning">
                            Fill correct Info else keep trying.
                        </Alert>)}
                </Form>
                
            ):( <Home />)}
                
                </div>
           
        </>
    )
}

export default Login;
