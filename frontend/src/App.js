import React, { Component } from 'react'
import ListContacts from './ListContacts'



class App extends Component {
    state = {
        contacts: [
            {
                "id": "michael",
                "name": "Michael Jackson",
                "handle": "michaeljackson",
                "avatarURL": "http://localhost:5001/michaeljackson.jpg"
            },
            {
                "id": "beyonce",
                "name": "Beyonce Knowles Carter",
                "handle": "beyonce",
                "avatarURL": "http://localhost:5001/beyonce.jpg"
            },
            {
                "id": "freddie",
                "name": "Freddie Mercury",
                "handle": "freddiemercury",
                "avatarURL": "http://localhost:5001/freddiemercury.jpg"
            },

        ]
    }

    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
    }
    render() {
        return (
            <ListContacts
                contacts={this.state.contacts}
                onDeleteContact={this.removeContact} />
        )
    }
}
export default App