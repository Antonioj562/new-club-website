import { Outlet, Link } from "react-router-dom";
import '../styles/all.css'
/* */
import '../styles/navbar.css'
export default function RootLayout(){
    return (
        <div className="root-layout-container">
            {/* Top horizontal navigation bar */}
            <nav className='header'>
                {/* Mobile hamburger menu */}
                <div className='hamburger-menu-container'>
                <div className='hamburger-menu-line'></div>
                <div className='hamburger-menu-line'></div>
                </div>
                {/* Container for the actual navigation bar */}
                <div className='navbar-container'>
                {/* mobile button to exit navigation menu */}
                <div className='navigation-menu-exit-wrapper'>
                    <div className='navigation-menu-exit-line-1'></div>
                    <div className='navigation-menu-exit-line-2'></div>
                </div>
                
                <ul className='navbar'>
                    <Link className='navbar-item' to='/e-board'>e-board</Link>
                    <Link className='navbar-item' to='/'>home</Link>
                    <Link className='navbar-item' to='/events'>events</Link>
                    <Link className='navbar-item' to='/projects'>projects</Link>
                    {/* <Link className='navbar-item' to='/alumni'>alumni</Link> */}
                    <Link className='navbar-item' to='/contact'>contact us</Link>
                </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}



--------------------------------------------------------- -
Look into converting this code

<!-- Mobile hamburger menu -->
    <div class='hamburger-menu-container'>
        <div class='hamburger-menu-line'></div>
        <div class='hamburger-menu-line'></div>
    </div>
    <!-- Container for the actual navigation bar -->
    <div class='navbar-container'>
        <!-- mobile button to exit navigation menu -->
        <div class='navigation-menu-exit-wrapper'>
            <div class='navigation-menu-exit-line-1'></div>
            <div class='navigation-menu-exit-line-2'></div>
        </div>
        <ul class='navbar'>
            <li class='navbar-item'>
                <!-- Home page link -->
                <a class='navbar-link smoothScroll' href='#top'>home</a>
            </li>
            <li class='navbar-item'>
                <!-- About section link -->
                <a class='navbar-link smoothScroll' href='#about'>about</a>
            </li>
            <li class='navbar-item'>
                <!-- Mission link -->
                <a class='navbar-link smoothScroll' href='#mission'>mission</a>
            </li>
            <li class='navbar-item'>
                <!-- E-board link -->
                <a class='navbar-link smoothScroll' href='#e-board'>e-board</a>
            </li>
            <li class='navbar-item'>
                <!-- Events link -->
                <a class='navbar-link smoothScroll' href='#events'>events</a>
            </li>
            <li class='navbar-item'>
                <!-- Projects link -->
                <a class='navbar-link smoothScroll' href='#projects'>projects</a>
            </li>
            <!-- 
            <li class='navbar-item'>
                <!- - Alumni link - ->
                <a class='navbar-link smoothScroll' href='#alumni'>alumni</a>
            </li>
            -->
            <li class='navbar-item'>
                <!-- Contact us link -->
                <a class='navbar-link smoothScroll' href='#contact-us'>contact us</a>
            </li>
        </ul>
    </div>