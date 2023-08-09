import { HeroCard } from ".";
import { getHeroesByPublisher } from "../helpers";
import { Hero } from "../interfaces";
import { useMemo } from "react";

interface HeroListProps { 
    publisher: string;
}

export const HeroList = ({publisher}: HeroListProps) => {
    const heroes: Hero[] = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;

    return (
        // **** Para mostrar nombres por lista ****
        // <ul>
        //     {
        //         heroes.map(hero => (
        //             <li key={hero.id}>
        //                 { hero.superhero }
        //             </li>
        //         ))
        //     }
        // </ul>

        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>
    )
}