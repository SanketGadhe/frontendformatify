import React from 'react';

const Restructure = () => {
    return (

        <>
            <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
                <div className="flex items-center space-x-2 p-3">
                    <img src="../src/images/restructure.png" alt="Logo" className="w-8 h-8" /> {/* Replace with your logo */}
                    <button className="text-xl font-bold">Restructure</button>
                </div>
                <main className="flex p-8">
                    <aside className="w-1/3 pr-4">
                        <div className="space-y-4 shadow-lg">
                            {['Title & Authors', 'Abstract', 'Introduction', 'Literature Survey', 'Methodology & Architecture', 'Result & Reffrence', 'Tables & Figures'].map((section, index) => (
                                <button key={index} className="w-full text-left p-4 bg-blue-500 rounded flex justify-between items-center hover:bg-blue-900">
                                    <span>{section}</span>
                                    <span>{index < 2 ? '✔️' : '➕'}</span>
                                </button>
                            ))}
                        </div>
                    </aside>
                    <section className="w-2/3 pl-3 ">
                        <div className="bg-gradient-to-b from-white via-blue-600 to-blue-950 py-8 rounded text-center">
                            <div className="flex justify-between items-center mb-4 text-center">
                                <h2 className="text-2xl font-bold text-blue-950 p-2">Formatted Paper</h2>
                                <button className="bg-blue-600 text-white px-4 py-2 m-3 rounded hover:bg-blue-900">Download</button>
                            </div>
                            <img src="../src/images/res.png" alt="Formatted Paper" className="w-full p-8 rounded items-center" /> {/* Replace with your formatted paper image */}
                        </div>

                    </section>
                </main>
            </div>
        </>

    );
};

export default Restructure;
