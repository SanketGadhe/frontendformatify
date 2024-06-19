import { Link } from "react-router-dom"
function Premium() {

    return (
        <>
            <div className="bg-gradient-to-b from-black to-blue-950 text-white font-sans">
                <main className="container mx-auto py-16">
                    <h1 className="text-3xl md:text-5xl text-center mb-8">Elevate Your Research Paper with Formatify</h1>
                    <p className="text-center text-xl mb-16">Choose the plan that best suits your formatting needs</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-5">
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-4">FREE</h2>
                            <p className="text-4xl font-bold mb-6">$0</p>
                            <ul className="text-left mb-6 space-y-2">
                                <li>✔️ Convert content to proper structure</li>
                                <li>✔️ Ensure correct citation style</li>
                                <li>✔️ Format references and bibliography</li>
                                <li>✔️ Adhere to conference guidelines</li>
                            </ul>

                            <Link to="/payment"><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Continue with Free</button>
                            </Link>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-4">BASIC</h2>
                            <p className="text-4xl font-bold mb-6">$20/Month</p>
                            <ul className="text-left mb-6 space-y-2">
                                <li>✔️ All features of FREE plan</li>
                                <li>✔️ In-depth formatting for complex papers</li>
                                <li>✔️ Review for consistency and coherence</li>
                                <li>✔️ Enhance readability and flow</li>
                                <li>✔️ Include tables and figures as needed</li>
                            </ul>
                            <Link to="/payment"><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Continue with Free</button>
                            </Link>                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg text-center">
                            <h2 className="text-xl font-semibold mb-4">PRO</h2>
                            <p className="text-4xl font-bold mb-6">$30/Month</p>
                            <ul className="text-left mb-6 space-y-2">
                                <li>✔️ All features of BASIC plan</li>
                                <li>✔️ Personalized formatting based on Conference</li>
                                <li>✔️ Unlimited revisions and consultations</li>
                                <li>✔️ Priority support for urgent deadlines</li>
                                <li>✔️ Assistance with submission process</li>
                            </ul>
                            <Link to="/payment"><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Continue with Free</button>
                            </Link>                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}

export default Premium
