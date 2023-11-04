import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import RowPost from "../../components/RowPost/RowPost";
import {
  action,
  comedyMovies,
  documentaries,
  horrorMovies,
  originals,
  romanceMovies,
} from "../../constants/constants";

function Watch() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={horrorMovies} title="Horror Movies" isSmall />
      <RowPost url={romanceMovies} title="Romance Movies" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
      <Footer/>
    </div>
  );
}

export default Watch;
