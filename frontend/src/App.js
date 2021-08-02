import React, { Component } from 'react'
import ListContacts from './ListContacts'

const contacts = [
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

class App extends Component {
    render() {
        return (
            <ListContacts contacts={contacts} />
        )
    }
}
export default App