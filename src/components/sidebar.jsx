import React from 'react';
import '../styles/sidebar.css';
function Sidebar() {
    return (
        <div>
            <ul className="listclass">
                <li className="listnav">Introduction</li>
                <li className="listnav">Access</li>
                <li className="listnav">Parameters</li>
                <li className="listnav">Examples</li>
                <li className="listnav">Quota</li>
                <li className="listnav">Errors</li>
            </ul>
        </div>
    )
}
export default Sidebar;