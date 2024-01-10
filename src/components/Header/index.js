/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {RiNotification3Line} from 'react-icons/ri'
import {HiPhone} from 'react-icons/hi'



const Header=()=>(
    <div className="NavContainer">
        <div className='headerContainer'>
        <img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593222/Logo_ftx3tl.svg" alt="header" className="logo" />
        <div className="header-items">
            <a className="a">Dooper At Home</a>
            <a className="a">Lab Tests</a>
            <div className='header-items'>
                <a className="a">Our Network</a>
                <a className='dropdown'><AiOutlineCaretDown/></a>
            </div>
            <a className="a">About Us</a>
            <a className="a">Contact Us</a>
            <div className='header-items'>
                <a className="a">Join Us</a>
                <a className='dropdown'><AiOutlineCaretDown/></a>
            </div>
            <div className='greyContainer'>
            <NavLink to="/profile" className="oo"><img src="https://res.cloudinary.com/dfx93rmno/image/upload/v1703593168/Rectangle_619_z0cubg.svg" alt="profile img" className="imgProfile"/></NavLink>
                <NavLink to="/profile" className='dropProfile'>Jaydip Sakhiya</NavLink>
                <a className='dropdown2'><AiOutlineCaretDown/></a>
            </div>

            <div className='greyContainer'>
                <NavLink to="/notifications"><RiNotification3Line/></NavLink>
            </div>
            <div className='iconContainer'>
                <HiPhone/>
            </div>
        </div>
        
    </div>
    </div>
)


export default Header;