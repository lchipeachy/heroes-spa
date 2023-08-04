import { Hero } from "../interfaces";

interface CharactersProps {
    alter_ego: string;
    characters: string;    
}

const CharactersByHero = ({alter_ego, characters}: CharactersProps) => {
    if(alter_ego === characters) return (<></>);
    return <p>{characters}</p>
}

export const HeroCard = (hero: Hero) => {

    const heroImageUrl: string = `/assets/heroes/${hero.id}.jpg`;
    return (
        <div className="col">
            <h1 className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" src={heroImageUrl} alt={hero.superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{hero.superhero}</h5>
                            <p className="card-text">{hero.alter_ego}</p>

                            <CharactersByHero characters={hero.characters} alter_ego={hero.alter_ego}/>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
};
