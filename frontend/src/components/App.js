import React,{useState} from 'react';
import userService from ".././service/user"
const App=()=>{
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const [userid,setuserid]=useState("")
    const [password,setpassword]=useState("")
    const [bio,setbio]=useState("")
    const [dob,setdob]=useState(new Date())
    const handleRegister=(event)=>{
        event.preventDefault()
    const newuser = {
        fname,lname,userid,password,dob,bio
    }
    userService
    .create(newuser)
    .then(() => {
      setfname('')
      setlname('')
      setpassword('')
      setdob(new Date())
      setbio("")
    })
    }
    return(
        <div>
          <form onSubmit={handleRegister}>
             First Name<input type="text" value={fname} onChange={(event)=>{setfname(event.target.value)}}/><br/>
             Last Name <input type="text" value={lname} onChange={(event)=>{setlname(event.target.value)}}/><br/>
             User Id <input type="text" value={userid} onChange={(event)=>{setuserid(event.target.value)}}/><br/>
             Password <input type="password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/><br/>
            Date of Birth <input type="date" value={dob} onChange={(event)=>{setdob(event.target.value)}}/><br/>
             Bio <textarea value={bio} onChange={(event)=>{setbio(event.target.value)}}/><br/>
             <button>Register</button>
          </form>
          Already a user <button>Login</button>
        </div>
    )
}
export default App;