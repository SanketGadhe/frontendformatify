import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaFileAlt, FaCalendarAlt, FaStar, FaHistory, FaUsers, FaBook } from 'react-icons/fa';


const Dashbord = () => {
    return (

        <>

            <div className='flex'>

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

                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mr-8">
                    <h2 className="text-2xl font-bold mb-4">User Details</h2>
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="../src/images/sanket.jpg" alt="User" className="w-16 h-16 rounded-full" /> {/* Replace with your user image */}
                        <div>
                            <h3 className="text-xl font-bold">Sanket Gadhe</h3>
                            <a href="#" className="text-blue-600">@sanket_Gadhe_07</a>
                            <p>Email: sanketgadhe366@gmail.com</p>
                            <p>Phone: 9172102003</p>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900">Send Message</button>
                        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Analytics</button>
                        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Edit</button>
                    </div>
                    <div className="border-t pt-4">
                        <p>Address: Laurel Wire Ltd. D62 MIDC Awdhan Dhule, Maharashtra. 424006</p>
                        <img src="../src/images/map.jpg" alt="Map" className="w-full rounded mt-4" /> {/* Replace with your map image */}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Projects</h2>
                    <div className="mb-4">
                        <input type="text" placeholder="Search Projects" className="w-full p-2 border rounded" />
                    </div>
                    <div className="space-y-6 ">
                        <ul>
                            <li>
                                <Link to="/restructure">
                                    <button className="w-full h-40 bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded flex items-center justify-between px-4 py-6 hover:from-blue-500 hover:to-blue-700">
                                        <span className="text-xl font-bold">New Project</span>
                                        <span className="text-3xl">➕</span>
                                    </button>
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link to="/exist">
                                    <button className="w-full h-40 bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded flex items-center justify-between px-4 py-6 hover:from-blue-500 hover:to-blue-700">
                                        <span className="text-xl font-bold">Existing Project</span>
                                        <span className="text-3xl">📄</span>
                                    </button>
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link to="/exist">
                                    <button className="w-full h-40 bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded flex items-center justify-between px-4 py-6 hover:from-blue-500 hover:to-blue-700">
                                        <span className="text-xl font-bold">Shared Project</span>
                                        <span className="text-3xl">🤝</span>
                                    </button>
                                </Link>
                            </li>
                        </ul>




                    </div>
                </div>

            </div>



        </>

    );
};

export default Dashbord;
