import PropTypes from 'prop-types';
import React from 'react';

import TemporaryDrawer from './chineseDrawer';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ChineseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{marginBottom:10}}>
        <Toolbar>
          <TemporaryDrawer/>
          <Typography variant="h6" color="inherit" className={classes.grow} style={{
              color: `white`,
              textDecoration: `none`,
            }}>{props.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ChineseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChineseAppBar);
