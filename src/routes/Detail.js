import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams(); // 변경되는 url 값을 넘겨뭊 (여기선 App.js의 :id에서 id의 값)
  // {id}를 함으로 본래는 {id : 03124}라고 전달되던 값이 03124만 전달시킴
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState({});
  const getMovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovieInfo(json.data.movie);
    setLoading(false);
    //json.data.movie내에 여러 영화에 관한 정보들 보유 중
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <div>
      {loading ? <h1>Loading... Plz Wait</h1> : 
      <div>
      <img src={movieInfo.medium_cover_image} alt={movieInfo.title} />
      <h1>TITLE : {movieInfo.title}</h1>
      <h3>GENRE : {movieInfo.genres}</h3>
      <h3>RELEASE DATE : {movieInfo.date_uploaded}</h3>
      <h3>RATING⭐ : {movieInfo.rating}</h3>
      <h3>RUNTIME : {Math.round((movieInfo.runtime)/60)}H {((movieInfo.runtime)%60)}M</h3>
      </div>}

    </div>
  );
}
export default Detail;
// 로딩만들기 api서 받아온 json을 state에 넣어 상세 정보 묘사에 활용하기
