import React  from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "../style/host.css"

const HostLayout =()=> {

        return (
            <>
            <div className="host-links">
                <NavLink to={"/host"} end className={({ isActive }) => (isActive ? "host-links-active" : null)}>Dashboard</NavLink>
                <NavLink to={"/host/income"} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Income</NavLink>
                <NavLink to={"/host/reviews"} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Reviews</NavLink> 
            </div>

            <Outlet />
            </>
        );
    
}
 
export default HostLayout;