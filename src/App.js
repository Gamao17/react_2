import {Prod} from './products';
import {GetImage} from './Image';
import {GetPrice} from './Price';
import {GetName} from './Name'
import {GetDescription} from './Description';
import Hand from './ok-hand-sign.png'
import './App.css'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


  const FirstName = 'Mounir'


function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={GetImage()}/>
      <Card.Body>
        <Card.Title><GetName/></Card.Title>
        <Card.Text id='text'>
          <GetDescription />
        </Card.Text>
      </Card.Body>
      <Card.Body id='price'>
        <GetPrice /> 
      </Card.Body>
    </Card>
    <div className='great'>
    Bonjour {FirstName !== '' ? FirstName : 'là' }
        {FirstName !== '' && <img src={Hand} alt="" className='imgGreat'/>}
    </div>
    </div>
  );
}

export default App;
