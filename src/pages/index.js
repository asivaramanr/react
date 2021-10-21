
import logo from './automation.png';
import MyButton from './styled'
import Container from '@material-ui/core/Container';




function Root() {
    return (
        <div>
          <Container maxWidth="sm">
        <header className="App-header">
      <p>
          HCI-LAB Automation
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/request"
          rel="noopener noreferrer"
         >
         </a>
         <MyButton>Request for Lab Here</MyButton>
         
      </header>
      </Container>
        </div>
    )
}


export default Root;
