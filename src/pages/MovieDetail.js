import { useParams } from "react-router-dom";
import { useFetch, useTitle } from "../hooks/";
import Backup from "../assets/images/backup.png";

export const MovieDetail = () => {
    const { id } = useParams();
    const { data: movie } = useFetch(`movie/${id}`);


    const { overview, original_title, poster_path, genres, vote_average, vote_count, runtime, budget, revenue, release_date, imdb_id } = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;
    useTitle(original_title);


    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img className="rounded-t-lg" src={image} alt="" />
                </div>
                <div className="max-w-3xl px-10 dark:text-white text-gray-700 mt-2">
                    <h3 className="text-4xl font-bold my-3 text-center lg:text-left" >{original_title}</h3>
                    <p className="text-normal ">{overview}</p>
                    <div className="my-6" >
                        {genres && genres.map(genre => (
                            <span className="border p-2 mr-3 rounded border-gray-700">{genre.name}</span>
                        ))}
                    </div>
                    <div className="dark:text-white text-gray-700 flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-gray-900 dark:text-white">{vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-gray-900 dark:text-white">{vote_count} reviews</span>
                    </div>

                    <p className="my-4"><span className="font-bold">Runtime:</span> {runtime} min.</p>
                    <p className="my-4"><span className="font-bold">Budget:</span> {budget} </p>
                    <p className="my-4"><span className="font-bold">Revenue:</span> {revenue} </p>
                    <p className="my-4"><span className="font-bold">Release Date:</span> {release_date} </p>
                    <p className="my-4"><span className="font-bold">
                        IMDB Code:</span>
                        <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noreferrer"> {imdb_id}</a>
                    </p>

                </div>

            </section>
        </main>
    )
}
