import React from 'react';
import '../styles/Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <nav className='header__container-nav-menu'>
                    <ul className='header__container-nav-menu-list'>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                About
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Skills
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Education
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Courses
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Language
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Contacts
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Experience
                            </span>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <span className='header__container-nav-menu-list-element-text'>
                                Examples
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;