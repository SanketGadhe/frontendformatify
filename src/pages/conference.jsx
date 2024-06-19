
function Conference() {

    return (
        <>
            <div className="min-h-screen bg-black text-white">
                    <button className="text-xl m-3">← Conference</button>
                
                <main className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl mb-2">Upcoming and Recent Conferences</h1>
                        <p className="mb-4">Stay informed with the latest conferences!</p> <br /><br />
                        <div className="mb-6 flex gap-3">
                            <input
                                type="text"
                                placeholder="Search Conference"
                                className="p-2 rounded-xl w-full max-w-md mb-2"
                            />
                            <div className="space-x-4 rounded-lg">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-xl">AI ✓</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-xl">ML ✓</button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-xl">NLP ✓</button>
                            </div>
                        </div>
                    </div>
                    <section>
                        <h2 className="text-xl mb-4">Recent</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl  text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                        </div>
                        <h2 className="text-xl mb-4 p-4">Up Comming</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl  text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                            <div className="bg-gradient-to-b from-white via-blue-800 to-blue-950 p-6 rounded-lg text-center">
                                <h3 className="text-2xl text-blue-900 font-bold mb-2">Conference Title</h3>
                                <div className="mb-2">
                                    <span className="block">📅 Date: January 1-3, 2024</span>
                                </div>
                                <div className="mb-2">
                                    <span className="block">📍 Location: New York, USA</span>
                                </div>
                                <div className="mb-4">
                                    <span className="block">📝 Description: A brief overview ...</span>
                                </div>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded">More Details</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default Conference
