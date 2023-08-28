import { Link } from "react-router-dom";
import { Button } from "../components/";
import pageNotFoundImage from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/";


export const PageNotFound = () => {
    useTitle("Page Not Found - Cinimate");

    return (
        <main>
            <section className="fex flex-col justify-around px-2 flex-wrap">
                <div className="flex flex-col items-center my-4">
                    <p className="dark:text-white text-7xl text-gray-700 font-bold my-10 ">404, Oops!</p>
                    <div className="max-w-xl"><img className="rounded" src={pageNotFoundImage} alt="404 Page Not Found" /></div>
                </div>
                <div className="flex justify-center my-6">
                    <Link to="/">
                        <Button>Back to Cinemate</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
