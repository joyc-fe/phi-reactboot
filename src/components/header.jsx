import React, {Component} from 'react'


export default class Header extends Component {

    render() {
        return (<div className="header">
            <did className="logo-section">
                <img src='./resources/images/reactlogo.png' width="30" id="logo"/>
                <span className="title">PHI-ReactBoot</span>
            </did>
        </div>);
    }

}