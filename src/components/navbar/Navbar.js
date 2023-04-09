import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Search from '../search/Search';

export default function Navbar() {
    const { pathname } = useLocation(); // retrieve current URL

    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <img src={logo} width="150px" className="object-contain" alt="logo" />

                <ul className="hidden md:flex items-center space-x-6">
                    <Link
                        className={`cursor-pointer ${pathname === '/' ? 'font-semibold' : ''
                            }`}
                        to="/"
                        id="lws-bookStore"
                    >
                        <li>Book Store</li>
                    </Link>
                    <Link
                        className={`cursor-pointer ${pathname === '/add-book' ? 'font-semibold' : ''
                            }`}
                        to="/add-book"
                        id="lws-addBook"
                    >
                        <li>Add Book</li>
                    </Link>
                </ul>

                <Search />
            </div>
        </nav>
    )
}
