import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username:"",
    email: "",
    password: "",
    
  });

  const[showpassword,setShowPassword] = useState(false);


  return (
    <>
      <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            size={"sm"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

      <Input
            placeholder="Fullname"
            fontSize={14}
            type="text"
            size={"sm"}
            value={inputs.fullname}
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />

      <Input
            placeholder="User name"
            fontSize={14}
            size={"sm"}
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
      <InputGroup>
      <Input
            placeholder="Password"
            fontSize={14}
            size={"sm"}
            type={showpassword ? "text":"password" }
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <InputRightElement h ="full" >
        <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPassword(!showpassword)}>
          {showpassword ? <ViewIcon/> : <ViewOffIcon/>}

        </Button>
      
      </InputRightElement>
      </InputGroup>

      <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}  
    >
            Sign up
    </Button>
    
    
    </>
  )
}

export default Signup