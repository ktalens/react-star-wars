// Components imports
import Home from "./components/Home";
import { Route } from 'react-router-dom';
import Layout from './components/common/Layout'
import Page from './components/Page'

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Starships/:idx" component={Page} />
      </Layout>
    </div>
  );
};

export default App;
