import React from 'react';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

class AboutDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <>
        <Tooltip title="About">
          <IconButton color="inherit" onClick={this.handleClickOpen}>
            <AccountBoxIcon/>
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle id="about-dialog"> About us </DialogTitle>
          <DialogContent>
            <DialogContentText id="about-text">
              <Typography variant="h6"> Faculty Advisor </Typography>
              <Typography variant="body2"> Feng Xiao <Link href="mailto:feng.xiao@pomona.edu">feng.xiao@pomona.edu</Link></Typography>
              <Typography variant="h6"> Audio Recording </Typography>
              <Typography variant="body2"> Edward (Yixuan) Gao (Pomona '19) </Typography>
              <Typography variant="body2"> Nina (Wanran) Zhou (Pomona '19) </Typography>
              <Typography variant="h6"> Web Development </Typography>
              <Typography variant="body2"> Benjamin Hogoboom (Pomona '19) </Typography>
              <Typography variant="h6"> Technical Support </Typography>
              <Typography variant="body2"> Mary McMahon (Deputy Chief Information Officer) </Typography>
              <Typography variant="body2"> Jason Brown (Instructional Technologist) </Typography>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}

export default AboutDialog;
