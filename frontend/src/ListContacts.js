import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from './icons/search-icon.gif'
import addUser from './icons/add-user.png'

class ListContacts extends React.Component {
    static propType = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }
    state = {
        query: ''
    }
    udpateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    render() {
        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className="list-contacts-top">
                    <img src={SearchIcon} alt="Search Icon" className="search-icon" />
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(event) => this.udpateQuery(event.target.value)} />
                    <img src={addUser} alt=" Add User Icon" className="add-user-icon" />
                </div>
                <ol className="contact-list" >
                    {this.props.contacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}>
                            </div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                className="contact-remove"
                                onClick={() => this.props.onDeleteContact(contact)}>
                                X
                            </button>
                        </li>
                    ))}
                </ol>

            </div>

        )
    }
}

export default ListContacts






