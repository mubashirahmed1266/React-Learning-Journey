import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-10">

            <div className="mx-auto w-full max-w-screen-xl p-6 py-8">

                <div className="md:flex md:justify-between">

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-12"
                                alt="Logo"
                            />
                        </Link>

                        <p className="mt-3 text-gray-500 text-sm">
                            Welcome to our React Router website.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">
                                Resources
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-3">
                                <li>
                                    <Link to="/" className="hover:text-orange-700">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className="hover:text-orange-700">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">
                                Follow Us
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-3">
                                <li>
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-orange-700"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://discord.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-orange-700"
                                    >
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-5 text-sm font-semibold text-gray-900 uppercase">
                                Legal
                            </h2>

                            <ul className="text-gray-500 font-medium space-y-3">
                                <li>
                                    <Link to="#" className="hover:text-orange-700">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" className="hover:text-orange-700">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <hr className="my-6 border-gray-200" />

                <div className="sm:flex sm:items-center sm:justify-between">

                    <span className="text-sm text-gray-500">
                        © 2026 React Router Project. All Rights Reserved.
                    </span>

                    <span className="text-sm text-gray-500 mt-4 sm:mt-0">
                        Built with React & Tailwind CSS
                    </span>

                </div>

            </div>

        </footer>
    )
}