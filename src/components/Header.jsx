import React, {Component} from 'react' 
import logo from '../logo.svg'

// Estyles dinamicos

const styles = {
    
    // Function con parametro para color de fondo

    header: (backgroundColor) => ( {

            backgroundColor: backgroundColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "calc(10px + 2vmin)",
            color: "white"
        
        }
    )
}

// Componente Header

class Header extends Component {

    // State con el color de fondo inicial

    state = {

        backgroundColor: "#282c34"

    }

    manejaClick = () => {

        const {title, saludarClick} = this.props;
        saludarClick(title);
    }

    // Function para cambiar el backgound contenido en estate

    changeBackgroundColor = () => {

        this.setState({backgroundColor: "#555" });

    }

    render () {

        const {title} = this.props;
        const {backgroundColor} = this.state; 

        return (   
            <header style={styles.header(backgroundColor)} onClick={this.changeBackgroundColor}>
                <img onClick={this.changeBackgroundColor} src={logo} className="App-logo" alt="logo" />
                <h3>{title}</h3> 
            </header>
        )
    } 

}

export default Header