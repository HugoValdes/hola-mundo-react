import React, {Component} from 'react' 
import './App.css';
import Header from './components/Header';
import Div from './components/Div';
import H1 from './components/H1';
import SimpleForm from './components/SimpleForm';
import axios from 'axios';

class App extends Component {

    constructor () {
        super();

        // Llamadas con FETCH 
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then(json => console.log(json));

        // fetch("https://jsonplaceholder.typicode.com/users", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body:JSON.stringify({
        //         name:"Hugo Valdes",
        //         username:"HVF",
        //     })
        // })
        // .then(res => res.json())
        // .then(json => console.log(json));

        // LLamadas con Axios

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(({data}) => console.log(data));

        axios.post("https://jsonplaceholder.typicode.com/users", 
        {
            name:"Hugo Valdes",
            username:"HVF",
        })
        .then(({data}) => console.log(data));

    }
    
    // Ejemplo de state
    state = {
        saludo: "Hola Mundo React JS",
        H1Text: "Este es un componente reutilizado"
    }

    saludarClick = title => {

        alert(title);

    }

    // Cambio de state -> saludo
    cambiaSaludoState = () => {

        this.setState({saludo: "Un saludo distinto al cambiar state"});

    }

    render () {

        const {saludo, H1Text} = this.state;

      return (
        <div className="App">
            <Header title={saludo} saludarClick={this.saludarClick}/>
            <Div onClick={this.cambiaSaludoState}>
                {saludo}
            </Div>
            <H1>
                {H1Text}
            </H1>
            <SimpleForm />
        </div>)
    
    } 

}

export default App;