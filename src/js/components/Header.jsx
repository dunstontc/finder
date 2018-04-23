import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-row-1">
                    <span className="header-title"> {this.props.title} </span>
                </div>
                <div className="header-row-2">
                    <div className="buttons">
                        <button><i className="ionicons ion-ios-arrow-left"></i></button>
                        <button><i className="ionicons ion-ios-arrow-right"></i></button>
                    </div>
                    <input id="search" type="text" placeholder="Search" />
                </div>
            </div>
        );
    }
}

export default Header;
