import React from 'react';
import './styles.css'

const Navbar: React.FC = () => {
  return (
    <div className="nav">
        <div className="nav-content">
            <div className="title">
                <img className="back" src={require("../../assets/icons/back-arrow.png")} alt="back" />
                <p className="page">Vetted Tailor Application</p>
            </div>
            <div className="meta">
                <div className="notification">
                    <div className="notification-count">3</div>
                    <img className="back" src={require("../../assets/icons/notification-bell.png")} alt="back" />
                </div>
                <div className="initials">SO</div>
            </div>
            <div className='menu'>
                <img src={require('../../assets/icons/menu.png')} alt="menu" />
            </div>
        </div>
    </div>
  )
}

export default Navbar