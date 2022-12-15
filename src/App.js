import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
          filteredMonsters: []
    }
  }

  async componentDidMount() {
    const getMonsters = await fetch('https://jsonplaceholder.typicode.com/users')
    const monstersToJson = await getMonsters.json()
    this.setState(
      () => {
        return { monsters: monstersToJson, filteredMonsters: monstersToJson }
      },
      () => {
        console.log(this.state)
      }
    )
  }

  searchStart = (e) => {
    const valueHandled = e.target.value.toLowerCase()
    const monsterFiltered = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(valueHandled)
    })
    this.setState({ filteredMonsters: monsterFiltered })
  }

  render() {
    const { filteredMonsters } = this.state;
    const { searchStart } = this;

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox onChangeHandler={searchStart} placeholder='Search monsters...' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters} />
      </div>

    );
  }

}

export default App;
