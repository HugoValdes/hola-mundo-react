import React, {Component} from "react";

// Estilos del componente

const styles = {
    H1: {
        fontSize: "1.5 em"
    }
}

// Componente simple para reutilizacion 

class H1 extends Component {

    render() {
        return (
            <h1 {...this.props} style={styles.H1}/> 
        );
    }

}

export default H1;