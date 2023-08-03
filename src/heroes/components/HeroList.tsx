import { getHeroesByPublisher } from "../helpers";
import { Hero } from "../interfaces";

interface HeroListProps { 
    publisher: string;
}

export const HeroList = ({publisher}: HeroListProps) => {
    const heroes: Hero[] = getHeroesByPublisher(publisher);

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        { hero.superhero }
                    </li>
                ))
            }
        </ul>
    )
}