import React, { useState } from 'react';
import './App.css'; 
import userImage from './download.jpg'; 

const CardDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('self');

  const isActive = (tabName) => activeTab === tabName; 

  return (
    <div>
      <div className="earnings-section">
        <h2 className="section-title">My Earnings</h2>
        <div className="earnings-details">
          <div className="earnings-stats">
            <p className="small-title">Total Earnings</p>
            <h3 className="main-amount">₹2875.00</h3>
            <div className="earnings-breakdown">
              <p>
                <span className="earnings-icon">💰</span> Self Earnings: ₹8.00
              </p>
              <p>
                <span className="earnings-icon">🤝</span> Referral Earnings: ₹287.00
              </p>
              <p>
                <span className="earnings-icon">🎁</span> Reward Earnings: ₹0.00
              </p>
            </div>
          </div>
        </div>

    
      <div className="tab-section">
        <button className={`tab ${isActive('self') ? 'active' : ''}`} onClick={() => setActiveTab('self')}>
          Self
        </button>&nbsp;&nbsp;
        <button className={`tab ${isActive('referral') ? 'active' : ''}`} onClick={() => setActiveTab('referral')}>
          Referral
        </button>&nbsp;&nbsp;
        <button className={`tab ${isActive('reward') ? 'active' : ''}`} onClick={() => setActiveTab('reward')}>
          Reward
        </button>
      </div>
  

      <div className={`card ${isOpen ? 'active-card' : ''}`}>
        <div className="card-header">
          <div className="user-info">
            <img src={userImage} alt="User" className="user-image" />
            <div className="user-details">
              <h3>DIYASHARMAU</h3>
              <h4 className="status-text">Referral-KYC</h4>
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="toggle-button" aria-label="Toggle Details">
            {isOpen ? '▲' : '▼'}
          </button>
        </div>

        {isOpen && (
          <div className="card-details">
            <div className="detail-row">
              <p><strong>Sr. No:</strong> 47</p>
              <p><strong>Full Name:</strong> Diya Sharma</p>
            </div>
            <div className="detail-row">
              <p><strong>User Status:</strong> Premium</p>
              <p><strong>Details:</strong> Referral-KYC</p>
            </div>
            <hr />
            <p className="amount"><strong>Total Earned:</strong> ₹2.00</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="main-container">
      <header className="app-header">
        <h1>Task Planet</h1>
      </header>

      
      <CardDropdown />
    </div>
  );
}

export default App;
