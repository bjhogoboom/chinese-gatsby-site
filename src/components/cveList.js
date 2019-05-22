import PropTypes from 'prop-types';
import React from "react";

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

var vowels=[
  "a","ai","an","ang",
  "ao","e","ei","en",
  "eng","er","i","ia",
  "ian","iang","iao","ie",
  "in","ing","iong","iu",
  "o","ong","ou","u",
  "uai","uan","uang","uen",
  "ueng","ui","uo","v",
  "van","ve","vn"
];

var consonants=[
  "b","c","ch","d",
  "f","g","h","j",
  "k","l","m","n",
  "p","q","r","s",
  "sh","t","x","z",
  "zh"
];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function generateList(){
  return (
    <>
      <Typography variant="h6"> Consonants </Typography>
      <List>
        {
          consonants.map((consonant) =>
            <ListItem key={consonant}>
              <Button
                href={"/#/cve?consonantVowel=" + consonant + "&isConsonant=true"}
                variant="outlined"
                fullWidth>
                  {consonant}
              </Button>
            </ListItem>
          )
        }
      </List>
      <Typography variant="h6"> Vowels </Typography>
      <List>
        {
          vowels.map((vowel) =>
            <ListItem key={vowel}>
              <Button
                href={"/#/cve?consonantVowel=" + vowel + "&isConsonant=false"}
                variant="outlined"
                fullWidth>
                  {vowel}
              </Button>
            </ListItem>
          )
        }
      </List>
    </>
  );
}

const CVEList = (props) => (
    <TabContainer>
      <Typography variant="h4" gutterBottom>
        {props.long}
      </Typography>
      {generateList(props.lessons, props.short)}
    </TabContainer>
);

export default CVEList;
