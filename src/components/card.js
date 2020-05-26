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
    backgroundColor: '#101012',
    color: '#FCFCF5',
  },
  cardActions: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#9F5222',
    color: '#FCFCF5',
    textTransform: "none",
    '&:hover': {
      backgroundColor: '#D9A265',
    },
  },
}));

function SimpleCard({ content, buttonLink }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center">
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