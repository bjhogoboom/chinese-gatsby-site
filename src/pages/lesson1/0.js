import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ChineseQuiz from "../../components/ChineseQuiz";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

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

function getCharacter(data, lessonNum, characterNum){
  console.log(data.allDataJson.edges[0].node.ICL1);
  return data.allDataJson.edges[0].node.ICL1.lessons[lessonNum].characters[characterNum];
}

function audioPaths(data, lessonNum, characterNum){
  var fileEnding = data.allDataJson.edges[0].node.ICL1.lessons[lessonNum].fileEndings[characterNum];
  var indexedLesson = lessonNum + 1;
  var indexedCharacter = characterNum + 1;
  var pathLesson = indexedLesson < 10 ? "0" + indexedLesson : indexedLesson;
  var pathCharacter = indexedCharacter < 10 ? "00" + indexedCharacter : "0" + indexedCharacter;

  var paths = [];
  var basePath = "/audio/ICL1/" + pathLesson + "/" + pathLesson + pathCharacter + "/ICL1" + pathLesson + fileEnding;
  paths.push(basePath + ".mp3");

  for(var i = 1; i < 4; i++){
    paths.push(basePath + i + ".mp3");
  }

  console.log("PATHs: " + paths);
  return paths;
}

function Vocab1(props){
  return(
      <StaticQuery
        query={graphql `
          query VocabularyQuery2{
            allDataJson {
              edges {
                node {
                  ICL1 {lessons {characters, partsOfSpeech, fileEndings}}
                  ICL2 {lessons {characters, partsOfSpeech, fileEndings}}
                }
              }
            }
          }

          `}
        render={data => (
          <Layout gridDirection="column" pageTitle={"Pronuncation Quiz: " + getCharacter(data,0,0)}>
            <SEO title="你 Pronuncation Quiz" />
            <ChineseQuiz audioFiles={audioPaths(data, 0, 0)} />
          </Layout>
        )}
      />
  );
}

export default withStyles(styles)(Vocab1);
