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
            <Party partyName={parties.likud.name} partyNameHebrew={parties.likud.hebrewName} mandates={parties.likud.numOfMandates} color={parties.likud.color} isClicked={parties.likud.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kacholLavan.name} partyNameHebrew={parties.kacholLavan.hebrewName} mandates={parties.kacholLavan.numOfMandates} color={parties.kacholLavan.color} isClicked={parties.kacholLavan.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.haAvoda.name} partyNameHebrew={parties.haAvoda.hebrewName} mandates={parties.haAvoda.numOfMandates} color={parties.haAvoda.color} isClicked={parties.haAvoda.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.yahadutHatora.name} partyNameHebrew={parties.yahadutHatora.hebrewName} mandates={parties.yahadutHatora.numOfMandates} color={parties.yahadutHatora.color} isClicked={parties.yahadutHatora.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.meretz.name} partyNameHebrew={parties.meretz.hebrewName} mandates={parties.meretz.numOfMandates} color={parties.meretz.color} isClicked={parties.meretz.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.hayeminHachadash.name} partyNameHebrew={parties.hayeminHachadash.hebrewName} mandates={parties.hayeminHachadash.numOfMandates} color={parties.hayeminHachadash.color} isClicked={parties.hayeminHachadash.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.zehut.name} partyNameHebrew={parties.zehut.hebrewName} mandates={parties.zehut.numOfMandates} color={parties.zehut.color} isClicked={parties.zehut.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.hadashTaal.name} partyNameHebrew={parties.hadashTaal.hebrewName} mandates={parties.hadashTaal.numOfMandates} color={parties.hadashTaal.color} isClicked={parties.hadashTaal.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.ichudYamin.name} partyNameHebrew={parties.ichudYamin.hebrewName} mandates={parties.ichudYamin.numOfMandates} color={parties.ichudYamin.color} isClicked={parties.ichudYamin.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kulanu.name} partyNameHebrew={parties.kulanu.hebrewName} mandates={parties.kulanu.numOfMandates} color={parties.kulanu.color} isClicked={parties.kulanu.clicked} onClicked={this.onButtonClicked} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
