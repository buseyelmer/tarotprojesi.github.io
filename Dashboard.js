// Dashboard.js
import React from 'react';

function Dashboard({ role }) {
  return (
    <div>
      <h1>{role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h1>
      <div>
        {role === 'admin' ? (
          <div>
            <h2>Admin Panel</h2>
            <p>Here you can manage the users, view reports, etc.</p>
          </div>
        ) : (
          <div>
            <h2>User Panel</h2>
            <p>Here you can see your profile, and manage your information.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
