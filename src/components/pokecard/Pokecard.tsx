import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IPokecardProps {
    name: string;
    type: string;
    description: string;
}

const useStyles = makeStyles({
    root: {
      maxWidth: 275,
    },
    media: {
      height: 140,
    },
  });

const Pokecard: React.FunctionComponent<IPokecardProps> = (props: IPokecardProps): ReactElement => {
    const classes = useStyles();
    return (
       <Card className={classes.root}>
           <CardActionArea>
               <CardMedia
                    className={classes.media}
                    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                    title={props.name}
               />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        {props.type}
                    </Typography>
                </CardContent>
           </CardActionArea>
          
            <CardActions>
                <Button size="small" color="primary" href={props.description}>
                    Learn More
                </Button>
            </CardActions>
       </Card>
    );
}

export default Pokecard;