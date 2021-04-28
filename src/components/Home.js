import useFetch from "./service/useFetch";
import Card from "./Card";
// import Card2 from "./cards/Card2";
// import Card3 from "./cards/Card3";
import Hero from "./Hero";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:7000/data");

  return (
    <div className="home">
      <Hero />
      {data && (
        <div className="cards1">
          <Card data={data} button="Donate" link="detail" />
        </div>
      )}
      {error && <div className="loading">Can't fetch data api...</div>}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Home;
