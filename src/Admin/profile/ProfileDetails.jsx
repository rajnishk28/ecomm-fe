import React from 'react'
import Sidebar from '../common/Sidebar'

const ProfileDetails = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-50" style={{ marginLeft: '16rem' }}>
                <div>ProfileDetails</div>
            </div>
        </div >
    )
}

export default ProfileDetails