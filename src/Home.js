import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  history.push("/");
  return null;
};
export default Home;
