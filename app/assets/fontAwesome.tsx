import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faBars, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/icon-styles.css";
config.autoAddCss = false;

let lib = library.add(faArrowLeft, faBars, faMagnifyingGlass, faCartShopping);
let arrowLeft = <FontAwesomeIcon icon='arrow-left' className='back-arrow' />
let hamburger = <FontAwesomeIcon icon='bars' className="hamburger-icon" />
let magnifyingGlass = <FontAwesomeIcon icon='magnifying-glass' className='magnifying-glass' />
let shoppingCart  = <FontAwesomeIcon icon='cart-shopping' />
export {arrowLeft, hamburger, magnifyingGlass, shoppingCart};