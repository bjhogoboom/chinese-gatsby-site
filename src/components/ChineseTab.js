import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BookIcon from '@material-ui/icons/Book';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import IC2 from './ic2';

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
        {value === 0 && <IC2 lessons={20} long="Integrated Chinese Level 1" short="ICL1">Item One</IC2>}
        {value === 1 && <IC2 long="Consonants and Vowels" short="CVE">Item Two</IC2>}
        {value === 2 && <IC2 lessons={15} long="Integrated Chinese Level 2" short="ICL2">Item Three</IC2>}
      </div>
    );
  }
}

ChineseTab.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChineseTab);
