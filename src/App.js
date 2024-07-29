import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Simeon Joe',
        bio: 'A software engineer with a passion for learning and teaching.',
        imgSrc: 'https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg',
        profession: 'Software Engineer',
      },
      shows: false,
      mountedAt: null,
      timeSinceMounted: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.setState({ mountedAt: new Date() });
    this.intervalId = setInterval(() => {
      this.setState({ timeSinceMounted: Math.floor((new Date() - this.state.mountedAt) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <h2>{person.profession}</h2>
          </div>
        )}
        <div>
          <h3>Time since last component mount: {timeSinceMounted} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;
