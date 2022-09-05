
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import NavBar from "./components/NavBar.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Create from "./pages/Create.js";
import ArticleDetails from "./pages/ArticleDetails.js";
import NotFound from "./pages/NotFound.js";


function App() {
  return (
    <Router>
    <NavBar />
<Switch>
  <Route exact path="/">
<Home />
  </Route>
  <Route  path="/about">
<About />
  </Route>
  <Route path="/blogs/:id">
<ArticleDetails />
  </Route>
  <Route  path="/create">
<Create />
  </Route>
  <Route path="*">
<NotFound />
  </Route>
</Switch>



    </Router>
  );
}

export default App;
