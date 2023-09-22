import React, { useState, useEffect } from 'react';
import BacklinkList from './BacklinkList';
import BacklinkTracker from './BacklinkTracker';

const UserPanel = () => {
  const [backlinks, setBacklinks] = useState([]);

  useEffect(() => {
    // Yahan API se backlinks ko fetch karna hoga
    // useEffect hook ka upyog karke API request bhejkar data ko setBacklinks se update kare
    // Example: axios.get('/api/backlinks').then(response => setBacklinks(response.data));
  }, []);

  return (
    <div>
      <h2>User Panel</h2>
      <BacklinkTracker />
      <BacklinkList backlinks={backlinks} />
    </div>
  );
};

export default UserPanel;
