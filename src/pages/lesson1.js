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

let id = 0;
function fillRows(data, lessonNum){
  const rows = [];
  data.allDataJson.edges.forEach(function(item){
    const lesson = item.node.ICL1.lessons[lessonNum];
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
            <TableCell align="right"><Button variant="outlined" color="primary" href={"/lesson" + (lessonNum+1) + "/" + row[0]}>Pronunciation Quiz</Button></TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  );
}

function Lesson1(props){
  const { classes } = props;
  return(
    <Layout pageTitle="Lesson 1">
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
                  {fillRows(data,0)}
              </Table>
            </Paper>
          </>
        )}
      />
    </Layout>
  );
}

export default withStyles(styles)(Lesson1);
