import ProtectedPage from "./component/Protected";
import PublicPage from "./component/Public";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();

  return (
    <>
      {isLogin ? <ProtectedPage /> : <PublicPage />}
      {console.log(isLogin)}
    </>
  );
}

export default App;
