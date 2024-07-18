import "./App.css";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/authenticated-app";
import UnauthenticatedApp from "./pages/unauthenticated-app";

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
