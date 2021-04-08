import { Link } from 'react-router-dom'
import './NavbarElement.css'

const NavbarElement = (props) => {

    let href = props.href || "/";
    let isIcon = props.icon || false;
    let isName = props.name || false;
    let style = props.style || "navButton";

    const iconView = <img className="icon" src={props.icon} alt="X"/>
    const nameView = <span className="name">{props.name}</span>

    return(
        <Link to={href}>
            <button className={style}>
                {isIcon && iconView}
                {isName && nameView}
            </button>
        </Link>
    );
}

export default NavbarElement;