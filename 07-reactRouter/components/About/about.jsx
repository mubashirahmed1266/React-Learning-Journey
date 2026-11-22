import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                About Us
            </h1>

            <p className="text-gray-600 text-lg mb-6">
                Welcome to our React Router Project!
            </p>

            <Link
                to="/"
                className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800"
            >
                Back to Home
            </Link>

        </div>
    )
}

export default About