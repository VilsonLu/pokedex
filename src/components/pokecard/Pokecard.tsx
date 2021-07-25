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
import PokemonAPI from '../../api/PokemonAPI';


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

    const pokemonAPI = new PokemonAPI();

    const [pokemonDetails, setPokemonDetails] = useState<Pokemon>(Object);

    useEffect(() => {
        pokemonAPI.getPokemon(props.url).then((response) => {
            return setPokemonDetails(response);
        });
    });

    return (
       <Card className={classes.root}>
           <CardActionArea>
                {
                    pokemonDetails.sprites ?
                        <CardMedia
                            className={classes.media}
                            image={pokemonDetails.sprites?.front_default}
                            title={props.name}
                        />
                        : 
                        <></>
                }

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Base Experience: {pokemonDetails.base_experience}
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Weight: {pokemonDetails.weight} hg
                    </Typography>

                    <Typography gutterBottom variant="body2" component="p">
                        Height: {pokemonDetails.height} dm
                    </Typography>

                </CardContent>

                <CardActions>
                    <Button size="small" color="primary" href={props.url}>
                        Learn More
                    </Button>
                </CardActions>

           </CardActionArea>
       </Card>
    );
}

export default Pokecard;