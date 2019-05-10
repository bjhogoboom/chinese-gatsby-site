import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import queryString from 'query-string';


const styles = theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

let id = 1;
function fillRows(data, lessonNum, book){
  const rows = [];
  data.allDataJson.edges.forEach(function(item){
    var lesson;
    if(book === "ICL1"){
      lesson = item.node.ICL1.lessons[lessonNum-1];
    }else{
      lesson = item.node.ICL2.lessons[lessonNum-1];
    }
    for(var i = 0; i < lesson.characters.length; i++){
      var newRow = [id, lesson.characters[i], lesson.partsOfSpeech[i]];
      rows.push(newRow);
      id++;
    }
  });
  return (
    <TableBody>
      {
        rows.map(row => (
          <TableRow key={row[0]}>
            <TableCell component="th" scope="row"><Typography variant="h4">{row[1]}</Typography></TableCell>
            <TableCell align="right"><Typography variant="subtitle1">{row[2]}</Typography></TableCell>
            <TableCell align="right"><Button variant="outlined" color="primary" href={"/vocab?book=" + book + "&lesson=" + lessonNum + "&number=" + row[0]}>Pronunciation Quiz</Button></TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
}

function LessonPage(props){
  console.log(props);
  const parsed = queryString.parse(props.location.search);
  console.log(parsed);
  const { classes } = props;
  return(
    <Layout pageTitle={"Lesson " + parsed.lesson}>
      <StaticQuery
        query={graphql `
          query VocabularyQuery{
            allDataJson {
              edges {
                node {
                  ICL1 {lessons {characters, partsOfSpeech}}
                  ICL2 {lessons {characters, partsOfSpeech}}
                }
              }
            }
          }

          `}
        render={data => (
          <>
            <SEO title="Page two" />
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Character</TableCell>
                    <TableCell align="right">Part of Speech</TableCell>
                    <TableCell align="right">Quiz</TableCell>
                  </TableRow>
                </TableHead>
                  {fillRows(data,parsed.lesson, parsed.book)}
              </Table>
            </Paper>
          </>
        )}
      />
    </Layout>
  );
}

export default withRouter(withStyles(styles)(LessonPage));
