import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

};

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class TemporaryDrawer extends React.Component {

  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItemLink key='Home' href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink key='IC1' href="/">
            <ListItemIcon>
              <BookIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="IC1" />
          </ListItemLink>
          <ListItemLink key='IC2' href="/ic2">
            <ListItemIcon>
              <BookIcon color="secondary"/>
            </ListItemIcon>
            <ListItemText primary="IC2" />
          </ListItemLink>
          <ListItemLink key='CVE' href="/">
            <ListItemIcon>
              <FontDownloadIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="CVE" />
          </ListItemLink>
          <ListItemLink key='About' href="/">
            <ListItemIcon>
              <AccountBoxIcon color="secondary"/>
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemLink>
        </List>
      </div>
    );

    return (
      <div>
        <IconButton onClick={this.toggleDrawer('left', true)} color="inherit">
          <MenuIcon/>
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
