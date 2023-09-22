import React, { useState, useEffect } from 'react';
import BacklinkForm from './BacklinkForm';
import UserManagement from './UserManagement';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Yahan API se users ko fetch karna hoga
    // useEffect hook ka upyog karke API request bhejkar data ko setUsers se update kare
    // Example: axios.get('/api/users').then(response => setUsers(response.data));
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <UserManagement users={users} onSelect={handleUserSelect} />
      {selectedUser && <BacklinkForm user={selectedUser} />}
    </div>
  );
};

export default AdminPanel;
