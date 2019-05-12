import PropTypes from 'prop-types';
import React from 'react';

import Book from './book';
import CVEList from './cveList';

import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ChineseTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab label="IC1" icon={<BookIcon />} />
            <Tab label="CVE" icon={<FontDownloadIcon />} />
            <Tab label="IC2" icon={<BookIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && <Book lessons={20} long="Integrated Chinese Level 1" short="ICL1">Item One</Book>}
        {value === 1 && <CVEList long="Consonants and Vowels" short="CVE">Item Two</CVEList>}
        {value === 2 && <Book lessons={15} long="Integrated Chinese Level 2" short="ICL2">Item Three</Book>}
      </div>
    );
  }
}

ChineseTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChineseTab);
