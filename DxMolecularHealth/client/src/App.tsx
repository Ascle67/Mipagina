import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import Portal from "@/pages/Portal";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import MolecularPathology from "@/pages/services/MolecularPathology";
import ClinicalLaboratory from "@/pages/services/ClinicalLaboratory";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/molecular-pathology" component={MolecularPathology} />
          <Route path="/services/clinical-laboratory" component={ClinicalLaboratory} />
          <Route path="/blog" component={Blog} />
          <Route path="/portal" component={Portal} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;