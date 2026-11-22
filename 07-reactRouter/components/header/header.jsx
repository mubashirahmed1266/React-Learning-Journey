import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/contact"
                            className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/contact"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Get started
                        </Link>
                    </div>

                    <div className="flex items-center lg:order-1">
                        <ul className="flex flex-row space-x-8 font-medium">

                            <li>
                                <NavLink to="/" end
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-700" : "text-gray-800 hover:text-orange-700"
                                    }>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-700" : "text-gray-800 hover:text-orange-700"
                                    }>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "text-orange-700" : "text-gray-800 hover:text-orange-700"
                                    }>
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <a
                                    href="https://github.com/mubashirahmed1266"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:text-orange-700"
                                >
                                    GitHub
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}