import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import store from "./utils/appStore";
import { Provider } from "react-redux";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
