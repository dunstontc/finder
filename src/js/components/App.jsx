import React from 'react';
import Header from './Header.jsx';
import Files from './Files.jsx';
import Sidebar from './Sidebar.jsx';
const theFiles = require('../files.json');


class App extends React.Component {
    render() {
        return (
            <div className="finder">
                <Header />
                <div className="tabs">
                    <span className="tab-title"> {this.props.title} </span>
                </div>
                <Files files={theFiles}/>
                <Sidebar />
                <div className="body-footer"> Body Footer </div>
                <div className="footer"> TODO: Item count </div>
            </div>
        );
    }
}

export default App;
