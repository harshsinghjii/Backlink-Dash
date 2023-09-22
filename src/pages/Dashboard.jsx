import React, { useState, useEffect } from 'react';
import UserPanel from '../components/UserPanel';
import BacklinkTracker from '../components/BacklinkTracker';
import BacklinkList from '../components/BacklinkList';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [backlinks, setBacklinks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Yahan API se user ke backlinks ko fetch karna hoga
    // useEffect hook ka upyog karke API request bhejkar data ko setBacklinks se update kare
    // Example: axios.get(`/api/backlinks?userId=${userId}`).then(response => setBacklinks(response.data));

  }, []);

  // function logout() {
  //   navigate("/");
  //   localStorage.clear();
  // }

  return (
    <div>
      <h2>Dashboard</h2>

      {/* <button onClick={logout}>Logout</button> */}
      {/* <UserPanel /> */}
      {/* <BacklinkTracker />
      <BacklinkList backlinks={backlinks} /> */}
    </div>

  );
};

export default Dashboard;
