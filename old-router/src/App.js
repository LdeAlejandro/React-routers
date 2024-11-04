import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import ConditionalRenderRouter from "./pages/ConditionalRenderRouter";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Test page</h1>
          <Link to="/">Home</Link>
          <NavLink to="ConditionalRenderRouter">
            Conditional Render Routes
          </NavLink>
          <NavLink to="About">About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>

          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="about" element={<About />} />

          {/* Nested Route */}
          <Route
            path="ConditionalRenderRouter"
            element={<ConditionalRenderRouter />}
          >
            <Route path="users" element={<Users />} />
          </Route>
          {/* Nested Route */}

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
