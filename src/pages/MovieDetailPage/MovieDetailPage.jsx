import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../api/api";
import LikeMovieButton from "../../components/LikeMovieButton/LikeMovieButton";
import Page from "../../components/Page/Page";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetailPage() {
  const { movieId } = useParams();
  const { data: movie } = useQuery({
    queryKey: ["movies", { id: movieId }],
    queryFn: () => getMovie(movieId),
  });

  if (!movie) return null;

  return (
    <Page>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="aspect-[16/4.5] object-cover w-full absolute top-0 -mx-10 blur-2xl -z-10"
      />

      <div className="p-20 z-10">
        <div className="flex justify-between gap-x-10">
          {/* Left */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-5xl font-bold">{movie.title}</h1>

            {/* Tagline */}
            {movie.tagline && (
              <h2 className="text-2xl mt-2">{movie.tagline}</h2>
            )}

            {/* Overview */}
            <p className="text-lg mt-8">{movie.overview}</p>

            {/* Release Date */}
            <time className="mt-8 text-sm text-white/60">
              {movie.release_date}
            </time>

            {/* Genres */}
            <ul className="flex items-center gap-x-4 text-black mt-2">
              {movie.genres.map((genre) => (
                <li
                  key={genre.id}
                  className="bg-white px-2.5 py-1 rounded-md font-medium"
                >
                  #{genre.name}
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-x-10">
              <button className="text-3xl bg-white text-black px-16 py-4 rounded-lg font-bold hover:brightness-90 active:brightness-75 transition flex items-center gap-x-4">
                <span>재생</span>
                <FaPlay />
              </button>

              <LikeMovieButton movieId={movieId} />
            </div>
          </div>

          {/* Right */}
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            className="shadow-2xl max-w-sm"
          />
        </div>
      </div>
    </Page>
  );
}

export default MovieDetailPage;
