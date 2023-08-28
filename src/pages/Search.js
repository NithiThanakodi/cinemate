import { useSearchParams } from "react-router-dom";
import { useFetch, useTitle } from "../hooks/";
import { Card } from "../components/";

export const Search = ({ apiPath }) => {
    const [searchParmas] = useSearchParams();
    const queryTerm = searchParmas.get('q');
    const { data: movies } = useFetch(apiPath, queryTerm);

    useTitle(`Result of ${queryTerm}`);

    return (
        <main>
            <section className="text-3xl text=gray-700 dark:text-white py-3">
                <p>{movies.length > 0 ? `Result of '${queryTerm}'` : `No result found for '${queryTerm}'`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies && movies.map(movie => (
                        <Card movie={movie} />
                    ))}
                </div>
            </section>
        </main>
    )
}
