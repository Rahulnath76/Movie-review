import React from "react";

function MovieDetails({data}){
    return(
        <div className="m-4 mt-12 text-white ">
               
            <div className="flex gap-8 justify-center">
                <img src={data.Poster} alt="movie-image"  className="w-96"/>
                <div className = {`flex flex-col gap-3 `}>
                    <div>
                        <h3 className="text-5xl mb-3">{data.Title}</h3>
                        <p className="flex items-center gap-3 ml-2">{data.Genre?.split(", ").map((el) => (
                            <span className="bg-orange-400 cursor-pointer rounded-xl  px-3 text-sm ">{el}</span>
                        ))}</p>
                    </div>
                    <p>Relaese Date: {data.Released}</p>
                    <p>Plot: <br />{data.Plot}</p>
                    <p>Runtime: {data.Runtime}</p>
                    <p>Actors: {data.Actors}</p>
                    <p>Country : {data.Country}</p>
                    <p>IMDB Raitng: {data.imdbRating}</p>
                    <p>BoxOffice : {data.BoxOffice}</p>
                    <p>Awards: {data.Awards}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;