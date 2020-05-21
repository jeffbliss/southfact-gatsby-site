import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    backgroundColor: 'black',
    color: 'white',

  },
  cardActions: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function SimpleCard({ content, buttonLink }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button 
            className={classes.button} 
            size="small"
          >
            {buttonLink}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleCard;