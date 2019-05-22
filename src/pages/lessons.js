import React from "react";

import Layout from "../components/layout";
// import SEO from "../components/seo";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import queryString from "query-string";
import Vocabulary from "../data/Vocabulary";


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

function fillRows(lessonNum, book){
  var id = 1;
  const rows = [];

  var lesson = Vocabulary[book].lessons[lessonNum - 1]

  for(var i = 0; i < lesson.characters.length; i++){
    var newRow = [id, lesson.characters[i], lesson.partsOfSpeech[i]];
    rows.push(newRow);
    id++;
  }

  return (
    <TableBody>
      {
        rows.map(row => (
          <TableRow key={row[0]}>
            <TableCell component="th" scope="row"><Typography variant="h4">{row[1]}</Typography></TableCell>
            <TableCell align="right"><Typography variant="subtitle1">{row[2]}</Typography></TableCell>
            <TableCell align="right"><Button variant="outlined" color="primary" href={"/#/vocab?book=" + book + "&lesson=" + lessonNum + "&number=" + row[0]}>Pronunciation Quiz</Button></TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
}

function LessonPage(props){
  const parsed = queryString.parse(props.location.search);
  const { classes } = props;
  if(parsed.lesson && parsed.book){
    return (
      <Layout pageTitle={"Lesson " + parsed.lesson}>
        {/* <SEO title="Page two" /> */}
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Character</TableCell>
                <TableCell align="right">Part of Speech</TableCell>
                <TableCell align="right">Quiz</TableCell>
              </TableRow>
            </TableHead>
            {fillRows(parsed.lesson, parsed.book)}
          </Table>
        </Paper>
      </Layout>
    )
  } else {
    console.log('Redirect');
  }

}

export default withStyles(styles)(LessonPage);
