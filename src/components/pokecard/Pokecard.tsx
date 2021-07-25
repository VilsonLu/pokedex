import React, { ReactElement, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pokemon from '../../ts/Pokemon';
import { PokemonAPI } from '../../api/PokemonAPI';


interface IPokecardProps {
    name: string;
    url: string;
}

const useStyles = makeStyles({
    root: {
      maxWidth: 300
    },
    media: {
      width: 300,
      height: 300,
      backgroundColor: 'blue'
    },
});

const Pokecard: React.FunctionComponent<IPokecardProps> = (props: IPokecardProps): ReactElement => {

    const classes = useStyles();
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon>(Object);
    const pokemonAPI = new PokemonAPI();

    const { name, url } = props
    const { weight, height, base_experience, sprites } = pokemonDetails;

    useEffect(() => {
        pokemonAPI.getPokemon(url).then((response) => {
            return setPokemonDetails(response);
        });
    });
    
    return (
       <Card className={classes.root}>
           <CardActionArea>
                {
                    sprites ?
                        <CardMedia
                            className={classes.media}
                            image={sprites?.front_default}
                            title={name}
                        />
                        : 
                        <></>
                }

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Base Experience: {base_experience}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Weight: {weight} hg
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Height: {height} dm
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href={url}>
                        Learn More
                    </Button>
                </CardActions>

           </CardActionArea>
       </Card>
    );
}

export default Pokecard;