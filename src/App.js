import React, { Component } from 'react';
import './App.css';
import Party from './components/Party';
import Coalition from './components/Coalition';

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
      coalitionMandates: 0,
      shamelessClicked: false
    }

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.toggleShameless = this.toggleShameless.bind(this);
  }

  onButtonClicked(event) {
    event.preventDefault();
    event.stopPropagation();

    let partyToUpdate = event.currentTarget.name;

    if (this.state.parties[partyToUpdate].clicked) {
      this.setState(prevState => ({coalitionMandates: prevState.coalitionMandates - prevState.parties[partyToUpdate].numOfMandates}));
    }
    else if (!this.state.parties[partyToUpdate].clicked) {
      this.setState(prevState => ({coalitionMandates: prevState.coalitionMandates + prevState.parties[partyToUpdate].numOfMandates}));
    }

    this.setState(prevState => ({
      parties: {
        ...prevState.parties, 
        [partyToUpdate]: {
          ...prevState.parties[partyToUpdate], clicked: !this.state.parties[partyToUpdate].clicked
        }
      }
    }));
  }

  toggleShameless() {
    this.setState(prevState => ({shamelessClicked: !prevState.shamelessClicked}));
  }

  render() {
    const parties = this.state.parties;

    return (
      <div className="wrapper">
        <div className="App">
          <div className="app-title">
            קואליציומט 2019
          </div>
          <div className="center" style={{fontSize: '18px', marginBottom: '20px'}}>
            לחצו על מפלגה כדי להוסיף/להסיר אותה מהקואליציה
          </div>
          <div className="coalitionContainer">
            <div className="coalitionMandates">{this.state.coalitionMandates}<div className="mandatim">מנדטים</div></div>
            <Coalition coalitionMandates={this.state.coalitionMandates} />
            <div className={`coalitionSuccess${this.state.coalitionMandates >= 61 ? '' : ' hidden'}`}>מזל טוב! יצרת קואליציה!</div>
            <div className={`coalitionShare${this.state.coalitionMandates >= 61 ? '' : ' hidden'}`}><button>שתף בפייסבוק</button></div>
          </div>

          <div className="parties">
            <div className="center hamiflagot" style={{fontSize: '28px', marginBottom: '20px', fontWeight: 'bold'}}>המפלגות</div>
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
        <div className="center shameless">
          <div className="center shameless-child" onClick={this.toggleShameless}>Shameless plug {this.state.shamelessClicked ? '▲' : '▼'}</div>
          <div className={`center shameless-child${this.state.shamelessClicked ? '' : ' hidden'}`}>נבנה ע"י <a href="https://www.linkedin.com/in/udidollberg/" target="_blank" rel="noopener noreferrer">אודי דולברג</a></div>
        </div>
      </div>
    );
  }
}

export default App;