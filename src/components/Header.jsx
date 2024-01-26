import React, {Component} from 'react' 
import logo from '../logo.svg'
class Header extends Component {

    render ()
    {
        const {title, onClick} = this.props;
        return (   
            <header className="App-header" onClick={onClick}>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>{title}</h3> 
            </header>
        )
    } 

}

export default Header