import React, {useState, useContext}from 'react';
import UserContext from '../context/userContext';
function Login() {

    
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')

        const {setUser} = useContext(UserContext)

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(setUser){
        setUser({username, password});
    } else{
      console.error('setUser is not defined in UserContext');
    }
  };

    
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> {/* Use form for better semantics */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        {" "}
        <input
          type="password" // Use password type for password input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button type="submit">Submit</button>
      </form>
     
    </div>
  )
}

export default Login