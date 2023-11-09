import React, {useState} from 'react';
import '../styles/Header.scss'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };
    return (
        <header className='header'>
            {isMenuOpen && (
                <div className="overlay" onClick={toggleMenu}></div>
            )}
            <div className='header__container'>
                <nav className='header__container-nav-menu'>
                    <ul  className={`header__container-nav-menu-list ${isMenuOpen ? 'open' : ''}`}>
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
                    <div className='burger-menu' onClick={toggleMenu}>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;