import { Outlet, Link } from "react-router-dom";
import '../styles/all.css'
/* import '../styles/rootlayout.css'*/

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