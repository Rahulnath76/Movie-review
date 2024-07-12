import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

export default function Home(){
    const [search, setSearch] = useState("");
    const [data, setData] = useState();

    function searchMovies(){
        let movie = (search?.split(" ").join("+"));
        fetch(`https://www.omdbapi.com/?t=${movie}&apikey=4dbdc952`).then((res) => res.json()).then((res) => setData(res));
        setSearch("");
        console.log(data);
    }

    return (
        <div className='mx-auto w-full m-4 max-w-7xl text-white bg-black'>
            <h1 className='text-3xl text-center p-4 mb-4'>Find out about your favourite movies</h1>

            <div className='flex items-center gap-3 justify-center mb-3'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder = "Search your favourite movie.." className='text-white bg-slate-800 w-[450px] p-2 rounded-md focus:outline-none border border-orange-200 focus:border-orange-400 ' />
                <button onClick={searchMovies} className='bg-orange-500 px-4 py-2 rounded'>Search</button>
            </div>

           {
            data ? (data.Response == "True" ? <MovieDetails data = {data}/> : <div className='text-center text-xl p-4'> Cannot find the movie. Please try another one</div>) : <div></div>
           }

        </div>
    )
}