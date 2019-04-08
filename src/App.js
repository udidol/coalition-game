import React, { Component } from 'react';
import './App.css';
import Party from './components/Party';

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultColor = 'darkblue';

    this.state = {
      parties: {
        'likud': { 'name': 'likud', 'hebrewName': 'הליכוד', 'numOfMandates': 31, 'color': this.defaultColor, 'clicked': false },
        'kacholLavan': { 'name': 'kacholLavan', 'hebrewName': 'כחול-לבן', 'numOfMandates': 31, 'color': this.defaultColor, 'clicked': false },
        'haAvoda': { 'name': 'haAvoda', 'hebrewName': 'העבודה', 'numOfMandates': 8, 'color': this.defaultColor, 'clicked': false },
        'yahadutHatora': { 'name': 'yahadutHatora', 'hebrewName': 'יהדות התורה', 'numOfMandates': 8, 'color': this.defaultColor, 'clicked': false },
        'meretz': { 'name': 'meretz', 'hebrewName': 'מרצ', 'numOfMandates': 8, 'color': this.defaultColor, 'clicked': false },
        'hayeminHachadash': { 'name': 'hayeminHachadash', 'hebrewName': 'הימין החדש', 'numOfMandates': 8, 'color': this.defaultColor, 'clicked': false },
        'zehut': { 'name': 'zehut', 'hebrewName': 'זהות', 'numOfMandates': 7, 'color': this.defaultColor, 'clicked': false },
        'hadashTaal': { 'name': 'hadashTaal', 'hebrewName': 'חד"ש-תע"ל', 'numOfMandates': 7, 'color': this.defaultColor, 'clicked': false },
        'ichudYamin': { 'name': 'ichudYamin', 'hebrewName': 'איחוד מפלגות הימין', 'numOfMandates': 6, 'color': this.defaultColor, 'clicked': false },
        'kulanu': { 'name': 'kulanu', 'hebrewName': 'כולנו', 'numOfMandates': 6, 'color': this.defaultColor, 'clicked': false },
      },
      coalitionMap: 0
    }

    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked(event) {
    let partyToUpdate = event.target.name;
    this.setState(prevState => ({
      parties: {
        ...prevState.parties, 
        [partyToUpdate]: {
          ...prevState.parties[partyToUpdate], clicked: !this.state.parties[partyToUpdate].clicked
        }
      }
    }));
  }

  render() {
    const parties = this.state.parties;

    return (
      <div className="wrapper">
        <div className="App">
          <div className="app-title">
            This is an App.
          </div>
          <div className="coalitionImage">Coalition Image</div>
          <div className="parties">
            <Party partyName={parties.likud.name} partyNameHebrew={parties.likud.hebrewName} color={this.state.parties.likud.color} isClicked={this.state.parties.likud.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kacholLavan.name} partyNameHebrew={this.state.parties.kacholLavan.hebrewName} color={this.state.parties.kacholLavan.color} isClicked={this.state.parties.kacholLavan.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.haAvoda.name} partyNameHebrew={this.state.parties.haAvoda.hebrewName} color={this.state.parties.haAvoda.color} isClicked={this.state.parties.haAvoda.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.yahadutHatora.name} partyNameHebrew={this.state.parties.yahadutHatora.hebrewName} color={this.state.parties.yahadutHatora.color} isClicked={this.state.parties.yahadutHatora.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.meretz.name} partyNameHebrew={this.state.parties.meretz.hebrewName} color={this.state.parties.meretz.color} isClicked={this.state.parties.meretz.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.hayeminHachadash.name} partyNameHebrew={this.state.parties.hayeminHachadash.hebrewName} color={this.state.parties.hayeminHachadash.color} isClicked={this.state.parties.hayeminHachadash.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.zehut.name} partyNameHebrew={this.state.parties.zehut.hebrewName} color={this.state.parties.zehut.color} isClicked={this.state.parties.zehut.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.hadashTaal.name} partyNameHebrew={this.state.parties.hadashTaal.hebrewName} color={this.state.parties.hadashTaal.color} isClicked={this.state.parties.hadashTaal.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.ichudYamin.name} partyNameHebrew={this.state.parties.ichudYamin.hebrewName} color={this.state.parties.ichudYamin.color} isClicked={this.state.parties.ichudYamin.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kulanu.name} partyNameHebrew={this.state.parties.kulanu.hebrewName} color={this.state.parties.kulanu.color} isClicked={this.state.parties.kulanu.clicked} onClicked={this.onButtonClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
