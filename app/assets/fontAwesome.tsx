import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faBars, faMagnifyingGlass, faCartShopping, faFilter, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/icon-styles.css";
config.autoAddCss = false;

let lib = library.add(faArrowLeft, faBars, faMagnifyingGlass, faCartShopping, faFilter, faChevronDown);
let arrowLeft = <FontAwesomeIcon icon='arrow-left' className='back-arrow' />
let hamburger = <FontAwesomeIcon icon='bars' className="hamburger-icon" />
let magnifyingGlass = <FontAwesomeIcon icon='magnifying-glass' className='magnifying-glass' />
let shoppingCart  = <FontAwesomeIcon icon='cart-shopping' />
let filterIcon = <FontAwesomeIcon icon={faFilter} className='filter-icon'/>
let dropdownIcon = <FontAwesomeIcon icon={faChevronDown} className='dropdown-icon'/>
export {arrowLeft, hamburger, magnifyingGlass, shoppingCart, filterIcon, dropdownIcon};