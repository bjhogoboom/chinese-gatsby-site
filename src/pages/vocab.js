import React from "react";
import { StaticQuery, graphql } from "gatsby";
import queryString from 'query-string';

import ChineseQuiz from "../components/ChineseQuiz";
import Layout from "../components/layout";
import SEO from "../components/seo";

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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

function getCharacter(data, lessonNum, characterNum, book){
  if(book === "ICL1"){
    return data.allDataJson.edges[0].node.ICL1.lessons[lessonNum-1].characters[characterNum-1];
  }else{
    return data.allDataJson.edges[0].node.ICL2.lessons[lessonNum-1].characters[characterNum-1];
  }
}

function audioPaths(data, lessonNum, characterNum, book){
  var fileEnding;
  if(book === "ICL1"){
    fileEnding = data.allDataJson.edges[0].node.ICL1.lessons[lessonNum-1].fileEndings[characterNum-1];
  }else{
    fileEnding = data.allDataJson.edges[0].node.ICL2.lessons[lessonNum-1].fileEndings[characterNum-1];
  }
  var pathLesson = lessonNum < 10 ? "0" + lessonNum : lessonNum;
  var pathCharacter = characterNum < 10 ? "00" + characterNum : "0" + characterNum;

  var paths = [];
  var basePath = "/audio/" + book + "/" + pathLesson + "/" + pathLesson + pathCharacter + "/" + book + pathLesson + fileEnding;
  paths.push(basePath + ".mp3");

  for(var i = 1; i < 4; i++){
    paths.push(basePath + i + ".mp3");
  }

  console.log("PATHs: " + paths);
  return paths;
}

function VocabPage(props){
  const parsed = queryString.parse(props.location.search);
  console.log("BOOK: " + parsed.book);
  return(
      <StaticQuery
        query={graphql `
          query VocabularyQuery2{
            allDataJson {
              edges {
                node {
                  ICL1 {lessons {characters, fileEndings}}
                  ICL2 {lessons {characters, fileEndings}}
                }
              }
            }
          }

          `}
        render={data => (
          <Layout gridDirection="column" pageTitle={"Pronuncation Quiz: " + getCharacter(data, parsed.lesson, parsed.number, parsed.book)}>
            <SEO title={getCharacter(data, parsed.lesson, parsed.number) + " Pronuncation Quiz"} />
            <Typography component="p" variant="h5" align="center" paragraph>
              Listen to the following audio files and try to figure out which is the proper pronunciation.
              Make your choice using one of the guess buttons. Repeat the process using the shuffle button!
            </Typography>
            <ChineseQuiz audioFiles={audioPaths(data, parsed.lesson, parsed.number, parsed.book)} />
          </Layout>
        )}
      />
  );
}

export default withStyles(styles)(VocabPage);
