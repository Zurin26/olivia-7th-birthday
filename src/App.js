import {Route, Routes} from "react-router-dom";
import {routes} from "./constant/routes";
import MainContainer from "./components/Container/MainContainer";
import {Suspense} from "react";
import Loading from "./components/Loading/Loading";
import Page404 from "./pages/Page404";
function App() {
  return (
    <MainContainer>
      <Suspense fallback={<Loading />}>
        <Routes>
          {Object.entries(routes).map(([key, {link, element: Component}]) => (
            <Route
              key={key}
              path={link}
              element={<Component />}
            />
          ))}
          <Route
            path='*'
            element={<Page404 />}
          />
        </Routes>
      </Suspense>
    </MainContainer>
  );
}

export default App;
