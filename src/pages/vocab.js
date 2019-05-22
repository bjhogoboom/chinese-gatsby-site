import React from "react";
import queryString from 'query-string';

import ChineseQuiz from "../components/ChineseQuiz";
import Layout from "../components/layout";

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Vocabulary from "../data/Vocabulary";


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
});

function getCharacter(lessonNum, characterNum, book){
  return Vocabulary[book].lessons[lessonNum-1].characters[characterNum-1];
}

function audioPaths(lessonNum, characterNum, book){
  var fileEnding = Vocabulary[book].lessons[lessonNum-1].fileEndings[characterNum-1];
  var pathLesson = lessonNum < 10 ? "0" + lessonNum : lessonNum;
  var pathCharacter = characterNum < 10 ? "00" + characterNum : "0" + characterNum;

  var paths = [];
  paths.push([book, pathLesson, pathLesson + pathCharacter, book + pathLesson + fileEnding]);
  for(var i = 1; i < 4; i++){
    paths.push([book, pathLesson, pathLesson + pathCharacter, book + pathLesson + fileEnding + i]);
  }
  return paths;
}

function VocabPage(props){
  const parsed = queryString.parse(props.location.search);
  if(parsed.lesson && parsed.number && parsed.book){
    return(
      <Layout gridDirection="column" pageTitle={"Pronuncation Quiz: " + getCharacter(parsed.lesson, parsed.number, parsed.book)}>
        <Typography component="p" variant="h5" align="center" paragraph>
          Listen to the following audio files and try to figure out which is the proper pronunciation.
          Make your choice using one of the guess buttons. Repeat the process using the shuffle button!
        </Typography>
        <ChineseQuiz audioFiles={audioPaths(parsed.lesson, parsed.number, parsed.book)} />
      </Layout>
    );
  }else{
    console.log("Redirect");
  }
}

export default withStyles(styles)(VocabPage);
