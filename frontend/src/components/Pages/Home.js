import React, { useEffect, useState } from 'react';
import userService from '../../services/user';
import authService from '../../services/auth';

const Home = () => {
  const [users, setUsers] = useState([]);
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await userService.getUsers(currentUser.token);
        setUsers(userList);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchUsers();
  }, [currentUser.token]);

  const handleDelete = async (id) => {
    try {
      await userService.deleteUser(id, currentUser.token);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.mobileNumber}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;