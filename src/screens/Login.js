import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Api/Api';

const Login = ({setLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    api.login(username, password).then((res) => {
      console.log("res :: ", res.data)
      if (res.success == "success") {
        localStorage.setItem("token", res.data);
     
        setLogin(true);
       navigate('/admin');
      }
    }
    ).catch((err) => {
      console.log(err);
    }
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#4fbc87', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
