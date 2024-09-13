import { useQuery } from "@tanstack/react-query";
import { getMoviesOnCategory } from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";

function MoviesList({ title, category }) {
  const { data: moviesOnCategory } = useQuery({
    initialData: [],
    queryKey: ["movies", { category }],
    queryFn: () => getMoviesOnCategory(category),
  });

  return (
    <section className="[&+&]:mt-16">
      <h3 className="mt-0 mb-5 text-3xl font-bold">{title}</h3>

      <ul className="list-none px-10 flex gap-x-5 max-w-[100vw] overflow-x-scroll -mx-10">
        {moviesOnCategory.map((movie) => (
          <li key={movie.id} className="min-w-[calc((100vw-80px-40px)/5)]">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesList;
