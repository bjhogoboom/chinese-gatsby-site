import React from "react";

import QuizOption from "./quizOption";

import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

class ChineseQuiz extends React.Component {

  constructor(props){
    super(props);
    var audioFiles = this.shuffleStrings(props.audioFiles.slice());
    this.state = {
      options: audioFiles,
      snackbarOpen: false,
      guessSnackbarOpen: false,
      guessSnackbarMessage: "Incorrect, guess again!",
    };
  }

  // Function used to shuffle an array.
  // Source: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleStrings(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  shuffleOptions(){
    this.setState(
      {
        options: this.shuffleStrings(this.state.options),
        snackbarOpen: true,
      });
  }

  renderOption(i){
    return(
      <QuizOption guess={() => this.guessOption(i)}
                  number={i}
                  path={this.state.options[i-1]} />
    );
  }

  handleSnackbarClose = () => {
    this.setState({snackbarOpen: false});
  }

  handleGuessSnackbarClose = () => {
    this.setState({guessSnackbarOpen: false});
  }

  guessOption(number){
    var path = this.state.options[number-1][3];
    var reg = new RegExp('^[0-9]$');
    if (!reg.test(path.charAt(path.length - 1))){
      this.setState(
        {
          guessSnackbarOpen:true,
          guessSnackbarMessage: "Correct! Try shuffling and trying again!",
        }
      );
    } else {
      this.setState(
        {
          guessSnackbarOpen:true,
          guessSnackbarMessage: "Incorrect, guess again!",
        }
      );
    }
  }

  render(){
    return (
      <>
        {this.renderOption(1)}
        {this.renderOption(2)}
        {this.renderOption(3)}
        {this.renderOption(4)}
        <Button variant="contained" color="secondary" onClick={() => this.shuffleOptions()}>Shuffle</Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Options shuffled!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.guessSnackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleGuessSnackbarClose}
          ContentProps={{
            'aria-describedby': 'guess-message-id',
          }}
          message={<span id="guess-message-id">{this.state.guessSnackbarMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleGuessSnackbarClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </>
    );
  }
}



export default ChineseQuiz;
