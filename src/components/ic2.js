import React from "react";

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

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
          <ListItem>
            <Button
              href={"/" + book + "/" + (number / 10 >= 1 ? number : "0" + number)}
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

const IC2 = (props) => (
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

export default IC2;
