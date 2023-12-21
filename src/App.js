import './App.css';
import Temperature from './temperature';
import Audio from './audio';
import Displays from './displays';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lightning from './lightning';
import Logo from './assests/logo.svg';
import Airquality from "./airquality";




function App() {
  return (
    <div className="App" >
     <img src={Logo} width={200}alt="" id='logomain' />
     <Container id="demos" >

<Row id='top-container' >
<Col data-aos="fade-right"
data-aos-easing="linear"
data-aos-duration="1500"><Airquality/></Col> <br/>
  <Col data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500"><Temperature/></Col> <br/>
  <Col data-aos="fade-left"
data-aos-easing="linear"
data-aos-duration="1500"><Audio/></Col>
</Row>

<Row id='bottom-container' >
<Col data-aos="fade-down"
data-aos-easing="linear"
data-aos-duration="1500"id='b-cont-1' md={{ span:3, offset: 2}} > <Displays/></Col>
        {/* <Col><Audio/></Col> */}

  <Col data-aos="fade-up"
data-aos-easing="linear"
data-aos-duration="1500"id='b-cont-2'md={{ span: 3, offset: 1 }}><Lightning/></Col>
</Row>
</Container>
    </div>
  );
}

export default App;
