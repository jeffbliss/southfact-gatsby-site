import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  cardActions: {
    justifyContent: 'center',
  },
}));

function SimpleCard({ content, externalLinkText, externalLink, internalLink }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography align="center">
          {content}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          href={externalLink}
        >
          {externalLinkText}
          {internalLink}
        </Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;