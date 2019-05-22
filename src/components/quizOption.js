import React from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import audioFiles from "../../static/audio/**/**/**/*.mp3";

const styles = theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    verticalAlign: 'middle',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    margin: "auto",
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  guessButton: {
    paddingRight: theme.spacing.unit,
  }
});

function playAudio(path){
  var aud = new Audio(audioFiles[path[0]][path[1]][path[2]][path[3]]);
  aud.play();
}

function QuizOption(props){
  const { classes } = props;
  return(
    <Grid item xs={12}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <IconButton color="primary" aria-label="Play/pause" onClick={() => playAudio(props.path)}>
            <PlayArrowIcon />
          </IconButton>
            <Typography inline variant="h4"> Option {props.number} </Typography>
          </CardContent>


        </div>
        <span className={classes.guessButton}>
          <Button color="secondary" onClick={props.guess}> Guess </Button>
        </span>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(QuizOption);
