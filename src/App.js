import SiteProvider from "./context/SiteContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <SiteProvider>
      <Home />
    </SiteProvider>
  )
}