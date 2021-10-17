import './sidebar.css';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import PersonIcon from '@mui/icons-material/Person';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Productos</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem">
                            <HeadphonesIcon className="sidebarIcon"/>
                            Auriculares
                        </li>
                        </Link>
                        <Link to="/keyboards" className="link">
                        <li className="sidebarListItem">
                            <KeyboardIcon className="sidebarIcon"/>
                            Teclados
                        </li>
                        </Link>
                        <Link to="/mouses" className="link">
                        <li className="sidebarListItem">
                            <MouseIcon className="sidebarIcon"/>
                            Mouses
                        </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Usuarios</h3>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            
                            <PersonIcon className="sidebarIcon"/>
                            Usuarios
                            
                        </li>
                        </Link>   
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}
