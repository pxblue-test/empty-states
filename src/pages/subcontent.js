import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as PXBColors from '@pxblue/colors'

import EmptyState from '@pxblue/react-components/core/EmptyState';

import DevicesIcon from '@material-ui/icons/Devices'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const deviceConstants = [
  { id: 101 },
  { id: 201, performance: "Poor", battery: "20%" },
  { id: 202, performance: "Average", battery: "15%" },
  { id: 203, performance: "Excellent", battery: "96%" }
];

const styles = theme => ({
  deviceCard: {
    minWidth: '200px',
    width: '100%',
    height: '160px',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeader: {
    padding: '0px',
    minHeight: '45px',
    paddingLeft: '16px',
    backgroundColor: PXBColors.blue[500],
    color: 'white'
  }
});

class SubContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={4}>
          {deviceConstants.map((deviceOutput, index) =>
            <Grid item xs={12} sm={6} md={3} key={index.toString()}>
              <Card className={classes.deviceCard}>
                <CardHeader
                  className={classes.cardHeader}
                  style={!deviceOutput.performance ? { backgroundColor: PXBColors.orange[500] } : null}
                  title={
                    <Typography
                      variant="subtitle1"
                      color="inherit">
                      Device {deviceOutput.id}
                    </Typography>}
                />
                <CardContent style={{ flex: "1 1 0px", padding: '0px', height: 0 }}>
                  {!deviceOutput.performance ?
                    <EmptyState
                      title="No Data"
                      icon={
                        <DevicesIcon style={{ fontSize: '30px', margin: '10px 0 5px 0' }} />
                      }
                    />
                    :
                    <List style={{ padding: '0px' }} dense={true}>
                      <ListItem >
                        <ListItemText
                          primary={"Performance"}
                        />
                        <ListItemText style={{ textAlign: "right" }}
                          primary={deviceOutput.performance}
                        />
                      </ListItem>
                      <ListItem >
                        <ListItemText
                          primary={"Battery Life"}
                        />
                        <ListItemText style={{ textAlign: "right" }}
                          primary={deviceOutput.battery}
                        />
                      </ListItem>
                      <CardActions style={{ float: "right" }}>
                        <Button size="small" color="primary">
                          Report
                          </Button>
                        <Button size="small" color="primary">
                          Learn More
                          </Button>
                      </CardActions>
                    </List>
                  }
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(styles)(SubContent);
