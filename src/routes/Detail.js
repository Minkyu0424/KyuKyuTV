import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json=await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  console.log(json);

  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
// 로딩만들기 api서 받아온 json을 state에 넣어 상세 정보 묘사에 활용하기