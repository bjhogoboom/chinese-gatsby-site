import PropTypes from 'prop-types';
import React from 'react';

import AboutDialog from "./AboutDialog";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
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
          <Tooltip title="Home">
            <IconButton className={classes.menuButton} color="inherit" href="/">
              <HomeIcon/>
            </IconButton>
          </Tooltip>
          <Typography variant="h6" color="inherit" className={classes.grow} style={{
              color: `white`,
              textDecoration: `none`,
            }}>{props.title}
          </Typography>
          <AboutDialog/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ChineseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChineseAppBar);
