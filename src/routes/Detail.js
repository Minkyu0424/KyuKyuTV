import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLodading] = useState(true);
  const {movieInfo, setMovieInfo} =useState([])
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movies);
    console.log(movieInfo);
    setLodading(false);
  };
  useEffect(() => {
    getMovie();
  }, );
  return <div>{loading ? <h1>Loading... Plz Wait</h1> : <div><h2>Details</h2></div>}</div>;
}
export default Detail;
// 로딩만들기 api서 받아온 json을 state에 넣어 상세 정보 묘사에 활용하기
