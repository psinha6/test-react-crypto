import CryptoGridComponent from "../../components/crypto-grid/crypto-grid.component";
import { Banner } from "./home.styles";

const Home = () => {

  return (
    <div>
      <Banner>
        <p>List of coins</p>
      </Banner>
      <CryptoGridComponent />
    </div>
  );
}

export default Home;
