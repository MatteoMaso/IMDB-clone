import Image from "next/image";

async function getMovie(movieId: any) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`);
    const data = await res.json();
    return data;
}

export default async function MoviePage({ params }: any) {
    const movieId = params.id;

    if(movieId === 'spinner.svg') {
        return (
            <div></div> // TODO: Fix this
        )
    }

    const movie = await getMovie(movieId);
    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    className="rounded-lg"
                    alt="Movie Poster"
                    style={{
                        maxWidth: "100%",
                        height: "100%",
                    }}
                    width={500}
                    height={300}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    placeholder="blur"
                    blurDataURL="spinner.svg"
                ></Image>
                <div className="p-2">
                    <h2 className="text-xl font-bold mb-3">{movie.title || movie.name}</h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-2">Overview:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-2">Date released:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-2">Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}
