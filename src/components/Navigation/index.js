import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { main, darkmode, blue } from '../index';
import '../../index.scss';
import './Navigation.scss';

// this is for the web version of this application
import { ReactComponent as Image } from '../../icons/gorilla.svg';

const Navigation = ({ applyTheme }) => {
	return (
		<>
			<div className="navItem">
				<NavItem icon={<Image />}></NavItem>
			</div>
		</>
	);
};

export function NavItem(props) {
	const [open, setOpen] = useState(false);

	const openFunc = () => {
		setOpen(!open);
	};

	return (
		<div className="nav-item">
			<div className={open ? 'icon-button-flip' : undefined} onClick={openFunc}>
				{props.icon}
			</div>

			{open && <Dropdown openFunc={openFunc} />}
		</div>
	);
}

export function NavComment(props) {
	return (
		<div className="nav-comment nav-div">
			<div>{props.icon}</div>
		</div>
	);
}

export function Dropdown({ openFunc }) {
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

	function DropdownItem(props) {
		const click = () => {
			props.goToMenu && setActiveMenu(props.goToMenu);
		};

		return (
			<div className="dropdown-item item" onClick={click}>
				{props.children}
				<div>
					<span className="rightIcon">{props.rightIcon}</span>
					<span className="rightRightIcon">{props.rightRightIcon}</span>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="dropdown" style={{ top: "0", left: "0", right: "0", bottom: "0"}} onClick={openFunc}></div>
			<div className="dropdown" style={{ height: menuHeight }}>
				<CSSTransition
					in={activeMenu === 'main'}
					unmountOnExit
					timeout={500}
					classNames="menu-primary"
					onEnter={calcHeight}
				>
					<ul className="dd">
						<div className="item">Themes:</div>
						<div className="dropdown-item item" onClick={main}>
							Main
						</div>
						<div className="dropdown-item item" onClick={darkmode}>
							Dark Mode
						</div>
						<div className="dropdown-item item" onClick={blue}>
							Stylish
						</div>
					</ul>
				</CSSTransition>

				<CSSTransition
					in={activeMenu === 'themes'}
					unmountOnExit
					timeout={500}
					classNames="menu-secondary"
				>
				</CSSTransition>
				<CSSTransition
					in={activeMenu === 'channels'}
					unmountOnExit
					timeout={500}
					classNames="menu-secondary"
				>
				</CSSTransition>
			</div>
		</>
	);
}

export default Navigation;
