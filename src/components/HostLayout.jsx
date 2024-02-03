import React  from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "../style/host.css"

const HostLayout =()=> {

        return (
            <div className='host-layout'>
            <div className="host-links">
                {/*changing the /host with the . */}
                <NavLink to={"."} end className={({ isActive }) => (isActive ? "host-links-active" : null)}>Dashboard</NavLink>
                {/*relative links cuz it s rendered in the /host route's path */}
                <NavLink to={"income"} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Income</NavLink>
                <NavLink to={"vans"} className={({ isActive }) => (isActive ? "host-links-active" : null)}>vans</NavLink> 
                <NavLink to={"reviews"} className={({ isActive }) => (isActive ? "host-links-active" : null)}>Reviews</NavLink> 
            </div>

            <Outlet />
            </div >
        );
    
}
 
export default HostLayout;