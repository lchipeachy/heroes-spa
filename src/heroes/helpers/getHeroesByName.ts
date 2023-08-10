import { Hero } from "..";
import { heroes } from "../data";

export const getHeroesByName = ( name= '' ): Hero[] => {
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    )
}