import React from 'react'
import SideBar from '../dashboard/sideBar/SideBar'
import TaskView from '../dashboard/TaskView'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
        <SideBar />
        <TaskView />
    </div>
  )
}

export default DashboardLayout