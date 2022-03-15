import AppNavbar from "./components/AppNavbar";
import Shoppinglist from "./components/Shoppinglist";
import ItemModal from "./components/itemModal";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <Shoppinglist />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
