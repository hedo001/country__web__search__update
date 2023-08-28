import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./Components/header/header";
import { Main } from "./Components/search/main";
import { QueryClient, QueryClientProvider } from "react-query";
import { Infocard } from "./Components/pages/infocard";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />

          <Routes>
            <Route path="*" element={<Navigate to="home" />} />
            <Route path="home" element={<Main />} />
            <Route path="home/:capital" element={<Infocard />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
