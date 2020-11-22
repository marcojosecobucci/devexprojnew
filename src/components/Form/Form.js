import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Form = () => {
    const element = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className='container-form'>
            <div className="container-text">
                <h1 className="h1-form">
                From our studio
                </h1>
                <small className="p-form">
                Get a weekly email with inspirational contents from Zerogrey.
                </small>
                <form action="">
                    <span><input type="mail" placeholder='write your e-mail' className='mail-input'/>{element} </span>
                    <hr/>
                    <div>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor=""><small>I read and accept the Privacy Policy</small></label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
