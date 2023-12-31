function MovieInfo({ medium_cover_image, title, summary, genres, id }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>hello
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

// Movie.propTypes = {
//   medium_cover_image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//   id: PropTypes.number.isRequired,
// };
// export default Movie;
