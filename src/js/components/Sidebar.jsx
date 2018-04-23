import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div id="sidebar-title"> Files </div>
                <ul id="file-tree" className="sidebar-list"></ul>
            </div>
        );
    }
}

export default Sidebar;
