import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faArrowLeft, faBars, faMagnifyingGlass, faCartShopping, faFilter, faChevronDown, faTrashCan,
    faCircleCheck, faXmark, faSquareXmark, faSpinner, faPenToSquare
        } from '@fortawesome/free-solid-svg-icons';
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
let trashCan = <FontAwesomeIcon icon={faTrashCan} className='trash-can'/>
let checkicon = <FontAwesomeIcon icon={faCircleCheck} className='check-mark' />
let xMark = <FontAwesomeIcon icon={faXmark} className='x-mark'/>
let errorXMark = <FontAwesomeIcon icon={faSquareXmark} className='error-x-mark' />
let spinner = <FontAwesomeIcon icon={faSpinner} className='spinner-icon' />
let editIcon = <FontAwesomeIcon icon={faPenToSquare} className='edit-icon'/>
export {arrowLeft, hamburger, magnifyingGlass, shoppingCart, filterIcon, dropdownIcon, trashCan, checkicon,
    xMark, errorXMark, spinner, editIcon
};