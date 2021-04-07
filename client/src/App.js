import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


// On lines 6 to 9, we inserted a constructor, that initializes the default state.
//     On lines 11 to 16, we inserted the method callAPI() that will fetch the data from the API and store the response on this.state.apiResponse.
//     On lines 18 to 20, we inserted a react lifecycle method called componentDidMount(), that will execute the callAPI() method after the component mounts.
//     Last, on line 29, I used the <;p> tag to display a paragraph on our client page, with the text that we retrieved from the API.
//

class App extends  Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: `` };
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render(){
    return(
        <div className='App'>
          <header className='App-header'>
            <img src={logo} alt='logo' className={App-logo}/>
<h1 className='App-intro'>  React + Express APP</h1>
          </header>
<p className='App-intro'>{this.state.apiResponse}</p>
        </div>
    );

  }

}

export default App;
