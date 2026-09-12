import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faArrowLeft, faBars, faMagnifyingGlass, faCartShopping, faFilter, faChevronDown, faTrashCan,
    faCircleCheck, faXmark, faSquareXmark, faSpinner, faPenToSquare, faCirclePlus, faUser,
    faLock, faPhone, faAddressBook, faPencil
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
let addItemIcon = <FontAwesomeIcon icon={faCirclePlus} className='add-item-icon' />
let userIcon = <FontAwesomeIcon icon={faUser} className='user-icon' />
let padlockIcon = <FontAwesomeIcon icon={faLock} className='padlock'/>
let telephone = <FontAwesomeIcon icon={faPhone} className='phone'/>
let addressBook = <FontAwesomeIcon icon={faAddressBook} className='address-book'/>
let editPencil = <FontAwesomeIcon icon={faPencil} className='edit-pencil' />
export {arrowLeft, hamburger, magnifyingGlass, shoppingCart, filterIcon, dropdownIcon, trashCan, checkicon,
    xMark, errorXMark, spinner, editIcon, addItemIcon, userIcon, padlockIcon, telephone, addressBook, editPencil
};