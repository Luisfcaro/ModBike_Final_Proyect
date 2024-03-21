import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import AuthContext from '../../../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';


export default function Header() {
  const navigate = useNavigate();
  const { user, isAuth, isAdmin, logout } = useContext(AuthContext);

  const redirects = {

    home: () => navigate('/home'),
    dashboard_stations: () => navigate('/dashboard/stations'),
    dashboard_slots: () => navigate('/dashboard/slots'),
    dashboard_bikes: () => navigate('/dashboard/bikes'),
    dashboard_rents: () => navigate('/dashboard/rents'),
    dashboard_incidents: () => navigate('/dashboard/incidents'),

    stations: () => navigate('/stations'),
    notifications: () => navigate('/notifications'),

    login: () => navigate('/login'),
    register: () => navigate('/register'),
  }

  // const isUser = isAuth ? 

  const isAdminUser = isAuth && isAdmin ? 
  <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => redirects.dashboard_stations()}>Admin Stations</Dropdown.Item>
      <Dropdown.Item  onClick={() => redirects.dashboard_slots()}>Admin Slots</Dropdown.Item>
      <Dropdown.Item onClick={() => redirects.dashboard_bikes()}>Admin Bikes</Dropdown.Item>
      <Dropdown.Item onClick={() => redirects.dashboard_rents()}>Admin Rents</Dropdown.Item>
      <Dropdown.Item onClick={() => redirects.dashboard_incidents()}>Admin Incidents</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
    </Dropdown>
    : <ul className="d-none"></ul>

  const isAuthUser = isAuth && !isAdmin ? 
  <Navbar.Collapse>
    <Navbar.Link onClick={() => redirects.home()}>Home</Navbar.Link>
    <Navbar.Link onClick={() => redirects.stations()}> Stations</Navbar.Link>
    <Navbar.Link onClick={() => redirects.notifications()}>Notifications</Navbar.Link>
    <Navbar.Link onClick={() => logout()}>Logout</Navbar.Link>
  </Navbar.Collapse>
   : <ul className="d-none"></ul>

  const isNotAuthUser = !isAuth ? <Navbar.Collapse>
    <Navbar.Link onClick={() => redirects.home()}><a>Home</a></Navbar.Link>
    <Navbar.Link onClick={() => redirects.login()}><a >Login</a></Navbar.Link>
    <Navbar.Link onClick={() => redirects.register()}><a >Register</a></Navbar.Link>
  </Navbar.Collapse> : <ul className="d-none"></ul>






  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isAdminUser}
        <Navbar.Toggle />
      </div>
      {isNotAuthUser}
      {isAuthUser}
    </Navbar>
  )
}
