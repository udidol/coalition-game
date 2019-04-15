import React, { Component } from 'react';
import './App.css';
import Party from './components/Party';
import Coalition from './components/Coalition';
import MetaTags from 'react-meta-tags';
import { Facebook, Whatsapp, Twitter, Linkedin } from 'react-social-sharing';
import Config from './config';

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultColor = Config.themeColor;

    this.state = {
      parties: {
        'likud': { 'name': 'likud', 'hebrewName': 'הליכוד', 'numOfMandates': 36, 'color': this.defaultColor, 'clicked': false },
        'kacholLavan': { 'name': 'kacholLavan', 'hebrewName': 'כחול-לבן', 'numOfMandates': 35, 'color': this.defaultColor, 'clicked': false },
        'shas': { 'name': 'shas', 'hebrewName': 'ש"ס', 'numOfMandates': 8, 'color': this.defaultColor, 'clicked': false },
        'yahadutHatora': { 'name': 'yahadutHatora', 'hebrewName': 'יהדות התורה', 'numOfMandates': 7, 'color': this.defaultColor, 'clicked': false },
        'haAvoda': { 'name': 'haAvoda', 'hebrewName': 'העבודה', 'numOfMandates': 6, 'color': this.defaultColor, 'clicked': false },
        'hadashTaal': { 'name': 'hadashTaal', 'hebrewName': 'חד"ש-תע"ל', 'numOfMandates': 6, 'color': this.defaultColor, 'clicked': false },
        'ichudYamin': { 'name': 'ichudYamin', 'hebrewName': 'איחוד מפלגות הימין', 'numOfMandates': 5, 'color': this.defaultColor, 'clicked': false },
        'israelBeitenu': { 'name': 'israelBeitenu', 'hebrewName': 'ישראל ביתנו', 'numOfMandates': 5, 'color': this.defaultColor, 'clicked': false },
        'meretz': { 'name': 'meretz', 'hebrewName': 'מרצ', 'numOfMandates': 4, 'color': this.defaultColor, 'clicked': false },
        'kulanu': { 'name': 'kulanu', 'hebrewName': 'כולנו', 'numOfMandates': 4, 'color': this.defaultColor, 'clicked': false },
        'raamBalad': { 'name': 'raamBalad', 'hebrewName': 'רע"ם-בל"ד', 'numOfMandates': 4, 'color': this.defaultColor, 'clicked': false }
      },
      coalitionMandates: 0,
      shamelessClicked: false,
      coalition: [],
      urlParams: window.location.search !== '' ? window.location.search.substr(11).split('+') : [],
      description: 'הרכיבו קואליציה לפי תוצאות בחירות 2019! שתפו עם חבריכם!'
    }

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.toggleShameless = this.toggleShameless.bind(this);
  }

  componentDidMount() {
    let initialStateCopy = Object.assign({}, this.state);

    for (let party in initialStateCopy.parties) {
      if (this.state.urlParams !== '' && this.state.urlParams.indexOf(party) !== -1) {
        initialStateCopy.parties[party].clicked = true;
        initialStateCopy.coalitionMandates += initialStateCopy.parties[party].numOfMandates;
        initialStateCopy.coalition.push(initialStateCopy.parties[party].hebrewName);
      }
    }

    initialStateCopy.description = `הקואליציה שלי: ${initialStateCopy.coalition.join(', ')}`;

    this.setState(initialStateCopy);
  }

  updateMetaDescription() {
    // Update og description in state
    let tempDescription = this.state.coalition.join(', ');
    this.setState({ description: `הקואליציה שלי: ${tempDescription}` });
  }

  onButtonClicked(event) {
    event.preventDefault();
    event.stopPropagation();

    let partyToUpdate = event.currentTarget.name;

    // create copy of the state coalition array
    let hebrewCoalitionArr = Array.from(this.state.coalition);
    let newUrlParams = Array.from(this.state.urlParams);
    let partyKeyIndex = newUrlParams.indexOf(partyToUpdate);
    let hebrewPartyIndex = hebrewCoalitionArr.indexOf(this.state.parties[partyToUpdate].hebrewName);

    if (this.state.parties[partyToUpdate].clicked) {

      // check if party hebrew name exists in the coalition array in state, if it does, remove it from the coalition array
      if (hebrewPartyIndex !== -1) {
        hebrewCoalitionArr.splice(hebrewPartyIndex, 1);
        newUrlParams.splice(partyKeyIndex, 1);
        this.setState({coalition: hebrewCoalitionArr, urlParams: newUrlParams}, this.updateMetaDescription);
      }

      // Update number of coalition mandates in state
      this.setState(prevState => ({coalitionMandates: prevState.coalitionMandates - prevState.parties[partyToUpdate].numOfMandates}));
    }

    else if (!this.state.parties[partyToUpdate].clicked) {
      // check if party hebrew name exists in the coalition array in state, if it doesn't, add it to the coalition array
      if (hebrewPartyIndex === -1) {
        hebrewCoalitionArr.push(this.state.parties[partyToUpdate].hebrewName);
        newUrlParams.push(partyToUpdate);
        this.setState({coalition: hebrewCoalitionArr, urlParams: newUrlParams}, this.updateMetaDescription);
      }

      // Update number of coalition mandates in state
      this.setState(prevState => ({coalitionMandates: prevState.coalitionMandates + prevState.parties[partyToUpdate].numOfMandates}));
    }

    // Update party button status in state to clicked/not clicked
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
        <MetaTags>
          <meta name="theme-color" content={Config.themeColor} />
          <meta name="msapplication-TileColor" content={Config.themeColor} />
          <meta name="msapplication-TileImage" content={`${Config.appSubPath}/ms-icon-144x144.png`} />
          <meta name="description" content={`${this.state.coalitionMandates >= 61 ? this.state.description : 'הרכיבו קואליציה לפי תוצאות בחירות 2019! שתפו עם חבריכם!'}`} />
          <meta property="og:description" content={`${this.state.coalitionMandates >= 61 ? this.state.description : 'הרכיבו קואליציה לפי תוצאות בחירות 2019! שתפו עם חבריכם!'}`} />
        </MetaTags>
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
            <div className={`${this.state.coalitionMandates >= 61 ? '' : ' hidden'}`}>
              <div className="coalitionSuccess">מזל טוב! יצרת קואליציה!</div>
              <div>
                <div className="rtl shareTitle center">שתפו:</div>
                <Facebook link={`${Config.appURLBase+Config.appSubPath}${this.state.urlParams !== [] ? `?coalition=${this.state.urlParams.join('+')}` : ''}`} />
                <Twitter link={`${Config.appURLBase+Config.appSubPath}${this.state.urlParams !== [] ? `?coalition=${this.state.urlParams.join('+')}` : ''}`} />
                <Whatsapp link={`${Config.appURLBase+Config.appSubPath}${this.state.urlParams !== [] ? `?coalition=${this.state.urlParams.join('+')}` : ''}`} />
                <Linkedin link={`${Config.appURLBase+Config.appSubPath}${this.state.urlParams !== [] ? `?coalition=${this.state.urlParams.join('+')}` : ''}`} />
              </div>
            </div>
          </div>

          <div className="parties">
            <div className="center hamiflagot" style={{fontSize: '28px', marginBottom: '20px', fontWeight: 'bold'}}>המפלגות</div>
            <Party partyName={parties.likud.name} partyNameHebrew={parties.likud.hebrewName} mandates={parties.likud.numOfMandates} color={parties.likud.color} isClicked={parties.likud.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kacholLavan.name} partyNameHebrew={parties.kacholLavan.hebrewName} mandates={parties.kacholLavan.numOfMandates} color={parties.kacholLavan.color} isClicked={parties.kacholLavan.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.shas.name} partyNameHebrew={parties.shas.hebrewName} mandates={parties.shas.numOfMandates} color={parties.shas.color} isClicked={parties.shas.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.yahadutHatora.name} partyNameHebrew={parties.yahadutHatora.hebrewName} mandates={parties.yahadutHatora.numOfMandates} color={parties.yahadutHatora.color} isClicked={parties.yahadutHatora.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.haAvoda.name} partyNameHebrew={parties.haAvoda.hebrewName} mandates={parties.haAvoda.numOfMandates} color={parties.haAvoda.color} isClicked={parties.haAvoda.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.hadashTaal.name} partyNameHebrew={parties.hadashTaal.hebrewName} mandates={parties.hadashTaal.numOfMandates} color={parties.hadashTaal.color} isClicked={parties.hadashTaal.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.ichudYamin.name} partyNameHebrew={parties.ichudYamin.hebrewName} mandates={parties.ichudYamin.numOfMandates} color={parties.ichudYamin.color} isClicked={parties.ichudYamin.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.israelBeitenu.name} partyNameHebrew={parties.israelBeitenu.hebrewName} mandates={parties.israelBeitenu.numOfMandates} color={parties.israelBeitenu.color} isClicked={parties.israelBeitenu.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.meretz.name} partyNameHebrew={parties.meretz.hebrewName} mandates={parties.meretz.numOfMandates} color={parties.meretz.color} isClicked={parties.meretz.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.kulanu.name} partyNameHebrew={parties.kulanu.hebrewName} mandates={parties.kulanu.numOfMandates} color={parties.kulanu.color} isClicked={parties.kulanu.clicked} onClicked={this.onButtonClicked} />
            <Party partyName={parties.raamBalad.name} partyNameHebrew={parties.raamBalad.hebrewName} mandates={parties.raamBalad.numOfMandates} color={parties.raamBalad.color} isClicked={parties.raamBalad.clicked} onClicked={this.onButtonClicked} />
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