import {Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { useState, useEffect } from 'react';

export const Header = () => {

    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        event.target.reset();
        return navigate(`/search?q=${queryTerm}`);
    }


    return (
        <header>
            <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img className="mr-2 h-6 sm:h-9" src={Logo} alt="" />
                    </Link>
                    <div className="flex md:order-2">
                        <button 
                            className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
                            onClick={() => setDarkMode(!darkMode)}>Cambiar presentacion</button>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                        <input
                            className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='text' 
                            name='search'
                            placeholder='Search...' 
                            autoComplete='off' />
                        </form>
                    </div>
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies/popular">Popular</NavLink>   
                        </li>
                        <li>
                            <NavLink to="/movies/top">Top rated</NavLink>   
                        </li>
                        <li>
                            <NavLink to="/movies/upcoming">Upcoming</NavLink>   
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}