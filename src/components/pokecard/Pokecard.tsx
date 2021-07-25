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
import { PokemonTypeColor, GetPokemonTypeColor } from '../../ts/helper/PokemonTypeColor';
import { PokemonAPI } from '../../api/PokemonAPI';


interface IPokecardProps {
    name: string;
    url: string;
}

const Pokecard: React.FunctionComponent<IPokecardProps> = (props: IPokecardProps): ReactElement => {

    const [pokemonDetails, setPokemonDetails] = useState<Pokemon>(Object);
    const pokemonAPI = new PokemonAPI();

    const { name, url } = props
    const { weight, height, base_experience, sprites, types } = pokemonDetails;

    useEffect(() => {
        pokemonAPI.getPokemon(url).then((response) => {
            return setPokemonDetails(response);
        });
    });

    const useStyles = makeStyles({
        root: {
          'width': '100%'
        },
        media: {
          'width': '100%',
          height: 300,
          backgroundSize: 'contain',
          backgroundColor: types ? GetPokemonTypeColor(types[0].type.name) : PokemonTypeColor.other
        },
    });

    const classes = useStyles();
 
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

                    <Typography gutterBottom variant="body2" component="p">
                        Type: {pokemonDetails.types ? `${pokemonDetails.types[0].type.name}` : 'N/A'}
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