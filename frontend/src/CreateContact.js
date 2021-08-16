import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import backIcon from './icons/arrow-left.svg'
import ImageInput from './ImageInput'
import account from './icons/account.svg'

class CreateContact extends Component {
    render() {
        return (
            <div>
                <Link className='close-create-contact' to='/'>
                    <img src={backIcon} alt='back arrow' />
                </Link>
                <form className='create-contact-form'>
                    <img src={account} alt='account icon' />
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    ></ImageInput>
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='text' name='handle' placeholder='Handle' />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateContact
