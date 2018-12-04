import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        return(
            <div>
                <div className="App">
                    <h1>Hello, React!</h1>
                </div>
                <div className="container">
                    <Table />
                </div>
            </div>
        );
    }
}

export default App;