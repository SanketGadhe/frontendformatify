import React from 'react';
import { FaUserCircle, FaHome, FaFileAlt, FaCalendarAlt, FaStar, FaHistory, FaUsers, FaBook } from 'react-icons/fa';


const Exist = () => {
    return (
        <>
            <div className=' flex'>
                <div className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-6">
                    {/* User Info */}
                    <div className="flex items-center space-x-2 p-2 bg-gray-700 rounded">
                        <img src="../src/images/sanket.jpg" alt="User" className="w-10 h-10 rounded-full" /> {/* Replace with your user image */}
                        <div>
                            <span className="font-bold">Sanket Gadhe</span>
                            <p className="text-sm">Workspace</p>
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="space-y-4">
                        {[
                            { name: 'Dashboard', icon: <FaHome /> },
                            { name: 'Templates', icon: <FaFileAlt /> },
                            { name: 'Conference', icon: <FaCalendarAlt /> },
                            { name: 'Premium', icon: <FaStar /> },
                            { name: 'History', icon: <FaHistory /> },
                            { name: 'Create Team', icon: <FaUsers /> },
                            { name: 'Learn', icon: <FaBook /> },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded w-full text-left"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>


                <div className="flex-1 bg-gray-900 text-white p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <input
                            type="text"
                            placeholder="Search Project"
                            className="w-1/3 p-2 rounded bg-gray-800 border border-gray-700"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Existing Project</h2>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="bg-gray-700 h-40 rounded mb-2"></div>
                                <p className="text-blue-400 mb-1">Enhancing Customer feedback...</p>
                                <p className="text-gray-500 text-sm">Updated 3 days ago</p>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="bg-gray-700 h-40 rounded mb-2"></div>
                                <p className="text-blue-400 mb-1">Dual Mode Sign Language...</p>
                                <p className="text-gray-500 text-sm">Updated 5 days ago</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Shared Project</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="bg-gray-700 h-40 rounded mb-2"></div>
                                <p className="text-blue-400 mb-1">Enhancing Customer feedback...</p>
                                <p className="text-gray-500 text-sm">Updated 3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Exist;
