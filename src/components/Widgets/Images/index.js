import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import styles from './styles'

class Images extends Component {

  constructor() {
    super();
    this.state = { open: false };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {

    const {images = [], classes} = this.props;
    const { open = false } = this.state;

    return(
        <div className={classes.root}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Image
              </Typography>
              <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={this.toggleDrawer}>Add New</Button>
            </CardActions>
          </Card>
          <Drawer
              anchor="bottom"
              open={open}
              onClose={this.toggleDrawer}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer}
              >
                Test
              </div>
            </Drawer>
        </div>
    )
  }
}

export default withStyles(styles)(Images);
