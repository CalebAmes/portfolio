import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { main, darkmode, blue } from '../index';
import '../../index.scss';
import './Navigation.scss';

// this is for the web version of this application
import { ReactComponent as Image } from '../../icons/gorilla.svg';

const Navigation = () => {
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

	useEffect(() => { }, []);

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

	function DropdownLinks() {
		return (
			<>
				<a className="dropdown-item item" href="https://github.com/CalebAmes" target="_blank">
					Github
				</a>
				<a
					className="dropdown-item item"
					href="https://www.linkedin.com/in/caleb-gilbert-b522ab142/"
					target="_blank"
				>
					LinkedIn
				</a>
				<a className="dropdown-item item" href="https://calebames.github.io" target="_blank">
					Portfolio Site
				</a>
			</>
		);
	}

	return (
		<>
			<div className="cardBackground" onClick={openFunc}></div>
			<div className="dropdown" style={{ height: menuHeight }}>
				<CSSTransition
					in={activeMenu === 'main'}
					unmountOnExit
					timeout={500}
					classNames="menu-primary"
					onEnter={calcHeight}
				>
					<ul className="dd">
						<DropdownItem rightRightIcon={<i className="fas fa-chevron-right" />} goToMenu="links">
							My Links
						</DropdownItem>
						<DropdownItem rightRightIcon={<i className="fas fa-sliders-h" />} goToMenu="themes">
							Themes
						</DropdownItem>
					</ul>
				</CSSTransition>

				<CSSTransition
					in={activeMenu === 'themes'}
					unmountOnExit
					timeout={500}
					classNames="menu-secondary"
				>
					<ul className="dd">
						<DropdownItem rightRightIcon={<i className="fas fa-chevron-left" />} goToMenu="main">
							...back
						</DropdownItem>
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
					in={activeMenu === 'channels'}
					unmountOnExit
					timeout={500}
					classNames="menu-secondary"
				>
				</CSSTransition>
				<CSSTransition
					in={activeMenu === 'links'}
					unmountOnExit
					timeout={500}
					classNames="menu-secondary"
				>
					<ul className="dd">
						<p>Connect with me here 🚀</p>
						<DropdownLinks />
						<DropdownItem rightRightIcon={<i className="fas fa-chevron-left" />} goToMenu="main">
							...back
						</DropdownItem>
					</ul>
				</CSSTransition>
			</div>
		</>
	);
}

export default Navigation;
