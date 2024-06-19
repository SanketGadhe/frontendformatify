

function Payment() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-1/2 items-center">
                <header className="flex justify-between items-center mb-6">
                    <div className="text-2xl font-bold text-blue-700">Formattify</div>
                    <div className="text-lg">Hi, Sanket Gadhe!</div>
                </header>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Subscription plan:</h2>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-lg">AI Starter Annual</span>
                        <span className="text-lg">$150 /yr Billed yearly</span>
                    </div>
                    <div className="mt-2">
                        <input type="radio" id="annual" name="plan" checked className="mr-2" />
                        <label htmlFor="annual" className="text-lg">Annually <span className="text-green-500">Save up to 50%</span></label>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Payment info</h2>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full p-2 border rounded mt-1"
                        />
                        <input
                            type="text"
                            placeholder="MM/YY CVV"
                            className="w-full p-2 border rounded mt-1"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Summary</h2>
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-lg">Formattify Annual</span>
                        <span className="text-lg">$150 /yr</span>
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="Enter Prompt Code"
                            className="w-full p-2 border rounded mt-1"
                        />
                        <button className="mt-2 px-4 py-2 bg-gray-200 rounded">Apply</button>
                    </div>
                </div>
                <div className="text-center">
                    <span className="block text-lg font-semibold mb-2">Pay now</span>
                    <span className="block text-lg font-semibold mb-2">$150 /yr</span>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">Secure Checkout</button>
                    <button className="w-full px-4 py-2 mt-2 text-gray-600">Cancel anytime</button>
                </div>
            </div>
        </>
    )
}

export default Payment