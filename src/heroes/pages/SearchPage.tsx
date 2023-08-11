import queryString from "query-string";
import { HeroCard } from "../components";
import { useForm } from "../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";
import { Hero } from "../interfaces";
import React from "react";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const heroes: Hero[] = getHeroesByName(q as string);

    const showSearch: boolean = (q!.length === 0);

    const showError: boolean = (q!.length > 0 && heroes.length === 0);

    const { formState, onInputChange } = useForm({
        searchText: q as string
    });

    const onSearchSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        // if (formState.searchText.trim().length <= 1) return;

        navigate(`?q=${formState.searchText.toLowerCase().trim()}`)
    }

    return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
            <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ formState.searchText }
                onChange={ onInputChange }
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Search
            </button>
            </form>
        </div>

        <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* primera forma para realizar la validacion que se encuentra abajo {
                (q === '')
                ?  <div className="alert alert-primary"> Search a hero </div>
                : ( heroes.length === 0)
                && <div className="alert alert-danger"> No hero with <b>{q}</b></div>
            } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}> 
            Search a hero 
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none' }}> 
            No hero with <b>{q}</b>
            </div>
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div>
        </div>
    </>
    )
}