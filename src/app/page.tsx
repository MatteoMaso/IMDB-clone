import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const REVALIDATE_TIME = 80640; // 1d - in seconds

// This is server side code
// Since server we can user the searchParams
export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US`, { next: { revalidate: REVALIDATE_TIME }});

  if(!res) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
