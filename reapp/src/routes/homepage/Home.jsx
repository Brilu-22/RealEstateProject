import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Find Your Forever Home In Luxury.</h1>
          <p>
            Welcome to LexEstates, your premier destination for finding the
            finest luxurious homes in the real estate market. Discover your
            dream home with LexEstates, where luxury living meets exceptional
            service.
          </p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years Of Experience</h2>
            </div>

            <div className="box">
              <h1>400</h1>
              <h2>Awards Gained</h2>
            </div>

            <div className="box">
              <h1>2300+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="/sideheader.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
