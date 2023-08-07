//import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Search from './components/Search';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

interface StateType {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

function App() {
  const register = (state: StateType): void => {
    axios.post(`http://localhost:3000/user/register`, { name: state.name, email: state.email, password: state.password, phone: state.phone })
      .then(res => { console.log(res.data) })
      .catch(err => { console.log(err.message) })
  }

  const login = (email: string, password: string): void => {
    axios.post(`http://localhost:3000/user/login`, { email: email, password: password })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register register={register} />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
