import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    search() {
        console.log('this.state', this.state)
    }
    render() {
        return (
            <div className='App'>
                <div className="App-title"> Music Master </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for an Artist'
                            value={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyDown={event => {
                                if (event.key === "Enter") {
                                    this.search()
                                }
                            }}
                        />
                        <Button
                            variant='primary'
                            id='search-button'
                            onClick={() => this.search()}>
                            Search
                        </Button>
                    </InputGroup>
                </FormGroup>
                <div className='Profile'>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className='Gallery'>
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;