import { SiteProvider, AuthProvider } from "./context";
import Home from "./pages/Home";

export default function App() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  )
}