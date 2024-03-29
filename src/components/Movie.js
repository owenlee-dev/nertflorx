import React from "react";
import { BsSearch } from "react-icons/bs";
const IMG_API = "https://image.tmdb.org/t/p/w500/";
const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80";
const Movie = (props) => {
  const { title, poster_path, overview, vote_average, release_date } = props;

  const translateDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dateParts = date.split("-");
    const month = Number(dateParts[1]);
    return months[month] + "-" + dateParts[0];
  };

  const watchNowHandler = () => {
    let alteredTitle = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, "");
    alteredTitle = alteredTitle.replace(/\s+/g, "-").toLowerCase();
    window.open(`https://solarmovies.movie/film/${alteredTitle}/watching.html`);
  };
  const watchTrailerHandler = () => {
    let alteredTitle = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, "");
    alteredTitle = alteredTitle.replace(/\s+/g, "-").toLowerCase();
    window.open(
      `https://www.youtube.com/results?search_query=${alteredTitle}+trailer`
    );
  };
  const searchSolarHandler = () => {
    let alteredTitle = title.replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, "");
    alteredTitle = alteredTitle.replace(/\s+/g, "-").toLowerCase();
    window.open(`https://solarmovies.movie/movie/search/${alteredTitle}`);
  };
  return (
    <div className="Movie">
      <img
        src={poster_path ? IMG_API + poster_path : DEFAULT_IMG}
        alt={title}
      ></img>
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="tag">{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h2>
          Released:
          <br />
          {translateDate(release_date)}
        </h2>
        <div className="link-buttons">
          <button className="link-btn" onClick={watchNowHandler}>
            watch now{" "}
            <button className="search-icon" onClick={searchSolarHandler}>
              <BsSearch />
            </button>
          </button>
          <button className="link-btn" onClick={watchTrailerHandler}>
            trailers
          </button>
        </div>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
