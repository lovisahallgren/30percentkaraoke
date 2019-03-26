import React, { Component } from 'react';
import './App.css';
import Button from '../Button';
import Input from '../Input';
import Lyrics from '../Lyrics';
import Video from '../Video';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lyrics: "",
      searchSong: "",
      searchArtist: "",
      box: false,
    }
  }

  fetchLyrics = () => {
    const apiKey = "d3e1ba56972c39ab192e7b8022055511"
    const url = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=" + this.state.searchSong + "&q_artist=" + this.state.searchArtist + "&apikey=" + apiKey
  
    fetch(url)
    .then(res => res.json())
    .then(data => 
      this.setState({
        lyrics: data.message.body.lyrics.lyrics_body
      })
    )
  }


  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    this.fetchLyrics();
    this.setState({box: true})
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="labels">
            <label htmlFor="searchSong">Enter song:</label>
            <label htmlFor="searchArtist">Enter artist:</label>
          </div>
          <Input type="text" value={this.state.searchSong} name="searchSong" placeholder="search for song" onChange={this.handleChange}/>
          <Input type="text" value={this.state.searchArtist} name="searchArtist" placeholder="search for artist" onChange={this.handleChange}/>
        </div>
        <div onAnimationEnd={() => this.setState({ box: false })} className={this.state.box ? "invisible-box" : ""}></div>
        {this.state.lyrics === "" ? null : <Lyrics lyrics={this.state.lyrics}></Lyrics>}
          {/* <Video searchQuery={this.state.searchQuery}/> */}
        <Button text="search for 30% lyrics" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
