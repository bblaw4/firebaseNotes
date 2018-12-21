import React from "react";
import firebase from "./firebase";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    const db = firebase.database().ref("notes");
    db.on("value", snapshot => {
      const nfdb = snapshot.val();
      let notes = [];
      //console.log(nfdb)
      for (let note in nfdb) {
        notes.push({
          id: note,
          note: nfdb[note].name
        });
      }
      this.setState({ notes: notes });
    });
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.notes)}
        {this.state.notes.map(note => (
          <li key={note.id}>{note.note}</li>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
