import {Grid} from "@mui/material";
import { pokemons as pokemonsData } from "../data/pokemons";
import PokemonCard from "./PokemonCard";
import { useState, useEffect } from "react";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setPokemons(pokemonsData);
    }, []);
   
      
    return (
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemonItem) => (
                    <Grid key={pokemonItem.id} size={{ xs: 12, sm: 6, md: 4}}>
                        <PokemonCard pokemon={pokemonItem} />
                    </Grid>
                )
            )}
        </Grid>
    );
}