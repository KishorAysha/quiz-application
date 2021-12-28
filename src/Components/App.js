import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./Quiz";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
