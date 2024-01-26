import React, {Component} from 'react' 

class Div extends Component {
    
    render () {
        // Ejemplo de props directos
        return (
            <div {...this.props} className='App-intro' />
        )

    }

}

export default Div;