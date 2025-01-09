import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>DashBoard</h1>
            <Outlet />
            {/* outlet is used for nested routing  */}
        </div>
    )
}

export default Dashboard