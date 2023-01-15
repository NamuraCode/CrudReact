import dashboardIcon from '../../assets/images/dashboard.svg'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header className='main-header'>
            <nav className='header-nav'>
                <Link className='nav-dashboard' to="/" preventScrollReset={true} >
                    <img className='dashboard-image' src={dashboardIcon}></img>
                </Link>
            </nav>
        </header>
    )
}

export default Header