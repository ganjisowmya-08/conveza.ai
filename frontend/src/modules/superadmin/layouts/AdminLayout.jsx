import React from 'react';
import Sidebar from '../components/navigation/Sidebar';
import Topbar from '../components/navigation/Topbar';

const AdminLayout = ({ children, currentTab, setCurrentTab }) => {
  return (
    <div className="admin-layout-wrapper">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="main-content-area">
        <Topbar currentTab={currentTab} />
        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
