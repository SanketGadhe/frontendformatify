
function Templates() {

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
                <button className="text-xl m-3">← Templates</button>

                <main className="p-8">
                    <div className="bg-gradient-to-r from-blue-300 to-blue-900 p-6 rounded-lg shadow-lg text-center">
                        <h1 className="text-2xl mb-4">Find the Suitable template for your Research</h1>
                        <input
                            type="text"
                            placeholder="Search Templates"
                            className="p-2 rounded w-full max-w-md mb-4 text-black"
                        />
                        <div className="space-x-4">
                            <button className="bg-blue-700 text-white px-4 py-2 rounded shadow-md">Conference</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md">Journals</button>
                        </div>
                    </div>
                    <section className="mt-8">
                        <h2 className="text-xl mb-4">Conference</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                IEEE
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ACM Digital
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ICLR
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                IEEE
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ACM Digital
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ICLR
                            </div>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-xl mb-4">Conference</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                IEEE
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ACM Digital
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ICLR
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                IEEE
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ACM Digital
                            </div>
                            <div className="bg-gradient-to-r from-blue-300 to-blue-900 py-20 rounded-lg text-center">
                                ICLR
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Templates
