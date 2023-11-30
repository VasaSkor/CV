import React, {useState} from 'react';
import  {Link} from 'react-scroll';
import '../styles/Header.scss'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            if (window.innerWidth < 1000) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (window.innerWidth < 1000) {
                document.body.style.overflow = 'auto';
            }
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
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    About
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Skills
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Education
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="courses"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Courses
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="language"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Language
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="contacts"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Contacts
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Experience
                                </span>
                            </Link>
                        </li>
                        <li className='header__container-nav-menu-list-element'>
                            <Link
                                to="examples"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={toggleMenu}
                            >
                                <span className='header__container-nav-menu-list-element-text'>
                                    Examples
                                </span>
                            </Link>
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