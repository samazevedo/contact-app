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
        query: '',
    }
    udpateQuery = (query) => {
        this.setState(() => ({
            query: query.trim(),
        }))
    }
    clearQuery = () => {
        this.udpateQuery('')
    }
    render() {
        const { query } = this.state
        const { contacts, onDeleteContact, onNavigate } = this.props
        const showingContacts =
            query === ''
                ? contacts
                : contacts.filter((c) =>
                      c.name.toLowerCase().includes(query.toLowerCase())
                  )

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        className="search-icon"
                    />
                    <input
                        className="search-contacts"
                        type="text"
                        placeholder="Search Contacts"
                        value={this.state.query}
                        onChange={(event) =>
                            this.udpateQuery(event.target.value)
                        }
                    />
                    <a
                        href="#create"
                        onClick={onNavigate}
                        className="add-contact"
                    >
                        <img
                            src={addUser}
                            alt=" Add User Icon"
                            className="add-user-icon"
                        />
                    </a>
                </div>
                <div className="show-user-button">
                    {showingContacts.length !== contacts.length && (
                        <div className="showing-contacts">
                            <span>
                                Now showing {showingContacts.length} of{' '}
                                {contacts.length}
                            </span>
                            <button onClick={this.clearQuery}>Show all</button>
                        </div>
                    )}
                </div>
                <ol className="contact-list">
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div
                                className="contact-avatar"
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`,
                                }}
                            ></div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                className="contact-remove"
                                onClick={() => onDeleteContact(contact)}
                            >
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
