import "./css/App.css"
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  return(
  <>
     <PageContainer>
      <Loading/>
      <Header/>
      <RouterConfig/>
     </PageContainer>
  </>
  )
}

export default App;
