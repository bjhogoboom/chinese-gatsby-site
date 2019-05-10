import PropTypes from 'prop-types';
import React from "react";

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

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

function generateList(numElements, book){
  var arr = [];
  for(var i = 0; i < numElements; i++){
    arr.push(i + 1);
  }
  return (
    <List>
      {
        arr.map((number) =>
          <ListItem key={book + number}>
            <Button
              href={"/lessons?book=" + book + "&lesson=" + number}
              variant="outlined"
              fullWidth>
                Lesson {number}
            </Button>
          </ListItem>
        )
      }
    </List>
  );
}

const Book = (props) => (
    <TabContainer>
      <Typography variant="h4" gutterBottom>
        {props.long}
      </Typography>
      <Typography variant="body2" paragraph gutterBottom>
        Test your listening skills on {props.short}
      </Typography>
      {generateList(props.lessons, props.short)}
    </TabContainer>
);

export default Book;
