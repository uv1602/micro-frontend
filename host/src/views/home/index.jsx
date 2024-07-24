import { getProducts } from "../../utils/util";
import "./Home.css";

function Home() {
  // Get product names.
  const products = getProducts();
  return <div className="home"></div>;
}

export default Home;
