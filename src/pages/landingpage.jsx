import { Link } from "react-router-dom"

function LandinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-blue-600 text-white">
      <header className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Introducing Formatify: Streamlining<br />
          Research Paper Formatting for Conference
        </h1><br />
        <p className="mt-4 text-xl">Formatify is a powerful tool that simplifies the process of restructuring your<br /> research paper to adhere with conference guidelines.</p>
        <Link to="/restructure"><button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Format My Paper</button>
        </Link>
        </header>
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl text-center mb-10 px-4">
          Effortlessly transform your<br />
          research paper to Fit Conference Guidelines with Formatify
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gradient-to-b from-gray-900 to-blue-900 p-6 rounded-lg text-center">
            <img src="../src/images/feature.png" alt="Features Icon" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold mb-2">Features</h3>
            <p>Effortless formatting with customizable templates.</p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-blue-900 p-6 rounded-lg text-center">
            <img src="../src/images/benifit.png" alt="Benefits Icon" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold mb-2">Benefits</h3>
            <p>Save time with automated formatting.</p>
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-blue-900 p-6 rounded-lg text-center">
            <img src="../src/images/start.png" alt="Get Started Icon" className="mx-auto mb-4 w-15 h-10" />
            <h3 className="text-xl font-bold mb-2">Get Started</h3>
            <p>Transform your documents with a few clicks.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandinPage