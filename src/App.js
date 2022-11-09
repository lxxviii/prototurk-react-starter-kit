import { SiteContext, AuthContext } from "./context";
import Home from "./pages/Home";

export default function App() {
  return (
    <SiteContext>
      <AuthContext>
        <Home />
      </AuthContext>
    </SiteContext>
  )
}