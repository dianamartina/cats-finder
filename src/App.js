import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from'./components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cats: users}));
  }

  handleChange(event) {
    let item = event.target.value;
    // console.log(item);
    this.setState({searchField: item})
  }

  render() {
    const {cats, searchField } = this.state;
    const filteredCats = cats.filter((cat) => cat.name.toLowerCase().includes(searchField.toLocaleLowerCase()) )
  //  console.log(filteredCats);
    return (
      <div className="App">
        <h1> Cats Finder</h1>
          <SearchBox placeholder="Find cats" handleChange={(event)=>this.handleChange(event)}/>
          {
            filteredCats.length !== 0
            ? <CardList cats={filteredCats}/>
            : <h3>No cats here!</h3>
          }
      </div>
    );
  }
}

export default App;
