import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebase';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Pehle check kare ki user pehle se registered hai ya nahi
      try {
        await auth.signInWithEmailAndPassword(email, password);
        console.error('User already registered');
        return; // User pehle se hi registered hai, isliye register nahi hoga
      } catch (signInError) {
        // Agar signIn me error aata hai, to yeh naya user hai
        console.error(signInError.message);
        // User ko register kare
        await auth.createUserWithEmailAndPassword(email, password);
        console.log('User registered successfully!');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignupPage;
