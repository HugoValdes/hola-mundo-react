import React, {Component} from 'react' 
import './App.css';
import Header from './components/Header';

class App extends Component {
    
    saludarClick = () => {

        alert("Saludos novato de React JS!");

    }

    render () {

      return (
        <div className="App">
            <Header title={'Bienvenido a React JS'} onClick={this.saludarClick}/>
            <div className='App-intro'>
                Hola Mundo
            </div>
      </div>)
    
    } 

}

export default App;