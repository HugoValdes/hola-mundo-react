import React, {Component} from "react";


// Componente formulario 

class SimpleForm extends Component {

    state = {
        // Propiedad de mensajes de error del formulario
        errors: { }
    }

    // Validacion y generacion de mensajes de error

    validateForm = values => {

        const errors = {};

        if (!values.txtNombre) {
            errors.nombreErrors = "El nombre es requerido!";
        }
    
        if (!values.txtApellido) {
            errors.apellidoErrors = "El apellido es requerido!";
        }

        return errors;
    
    }

    // Manejador Change de los campos del formulario
    handleChange = ({target}) => {

        const {name, value} = target;
        this.setState({[name]: value})

    }

    // Manejador Submit del formulario
    handleSubmit = e => {

        e.preventDefault();

        const {errors, ...sinErrors} = this.state;

        // Validacion de campos
        const validationResult = this.validateForm(sinErrors);

        this.setState({errors: validationResult});

        if (!Object.keys(validationResult).length) {
            
            // Envio del formulario

            // Reinicio del formulario
            e.target.reset();

        }

    }
    
    render() {

        const {errors} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="txtNombre" id="txtNombre" onChange={this.handleChange}/>
                {errors.nombreErrors && <p>{errors.nombreErrors}</p>}
                <input type="text" name="txtApellido" id="txtApellido" onChange={this.handleChange}/>
                {errors.apellidoErrors && <p>{errors.apellidoErrors}</p>}
                <input type="submit" value="Enviar" />
            </form>
        );
    }

}

export default SimpleForm;