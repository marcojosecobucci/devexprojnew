import React from 'react'
import BtnAll from '../button/BtnAll'
import DropDown from '../navbar/DropDown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const MenuList = () => {

    const menu = <FontAwesomeIcon icon={faBars} />
    return (
        <nav>
            <ul className='menu-list'>
                <li>Works</li>
                <li>Service</li>
                <li>Why use</li>
                <li><BtnAll nome="let's talk" /></li>
                <li>{menu}</li>
            </ul>
        </nav>
    )
}

export default MenuList
