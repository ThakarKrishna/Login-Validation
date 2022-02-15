import Login from "./Login";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const getDatafromLS = () => {
    const data = localStorage.getItem('details');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}




const Registration = () => {

    const [isFormSubmitted, setFormSubmitted] = useState(false);
    // const [femail,setFemail]=useState(false);
    // const [fpassword,setFpassword]=useState(false);

    // const [fphone,setFphone]=useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);
    const [flag, setFlag] = useState(false);

    const [phone, setPhone] = useState("");
    const [details, setDetails] = useState(getDatafromLS());
//     const [formValue, setFormValue] = useState({
//         userName: '',
//         email:'',
//         password:'',
//         phone:''
//         // getDatafromLS()
// });
    





    const onSubmit = (e) => {
        
        e.preventDefault();
        setFormSubmitted(true);
        // setFemail(true);
        // setFpassword(true);
        // setFphone(true)
      
        

        let detail = {
            username,
            email,
            password,
            phone

        }
        
       
        // localStorage.setItem('details', JSON.stringify(details));

if(!username || !email || !password ||!phone){
    setFlag(true);

}
else{
    setDetails([...details,detail]);
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");

}

console.log(details)



    }


    // const handleChange = (e) => {
    //     console.log("jhjhbjhbjb",e.target.name);
    //     // setFormValue({
    //     //     [e.target.name]: e.target.value
    //     // })
    // }

    const handleClick = () => {
        setLogin(!login);

    }

    useEffect(() => {
        localStorage.setItem('details', JSON.stringify(details));
    }, [details])
    return (
        <>
            <div className="container mt-3">

                {" "}
                {login ? (


                    <Form onSubmit={(e) => { onSubmit(e) }}>
                        <h1 className="text-center mt-5">Registration</h1>

                        <Form.Group className="mb-3" controlId="formBasicEmail" aria-autocomplete='off'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="userName" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username"
                            /><br/>
                            {
                                isFormSubmitted && details.username == "" &&
                                <Alert color="primary" variant="danger">Username is required</Alert>
                                
                            }
                        </Form.Group>
                     

                        <Form.Group className="mb-3" controlId="Email" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" 
                            onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                            <br/>
                            {/* {
                                femail && formValue.email === "" &&
                                <Alert color="primary" variant="danger">E-mail is required</Alert>
                            } */}
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  name="password"
                            onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
                            <br/>
                            {/* {
                                fpassword && formValue.password === "" &&
                                <Alert color="primary" variant="danger">password is required</Alert>
                            } */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone no.</Form.Label>
                            <Form.Control type="number" name="phone"
                            onChange={(e)=>setPhone(e.target.value)}  placeholder="Enter phone no."  /><br/>
                            

                            {/* {
                               fphone && formValue.phone === "" &&
                                <Alert color="primary" variant="danger">Phone number is required</Alert>
                            } */}
                        </Form.Group>

                        <Button variant="dark" type="submit" 
                        // disabled={!username || !email || !password || !phone}
                        >
                            Submit
                        </Button>

                        <Button variant="dark" style={{ marginLeft: "1rem" }} type="reset" >Reset</Button>
                       


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
