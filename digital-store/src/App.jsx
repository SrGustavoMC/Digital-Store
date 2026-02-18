import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage"; // <--- Importe aqui

// Placeholder apenas para a view de detalhes (próxima etapa)
const ProductViewPage = () => <div className="p-10 text-center text-2xl">Página de Produto (Em construção)</div>;

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} /> {/* <--- Atualize aqui */}
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;