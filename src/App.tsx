import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import ReadingProgress from "@/components/ReadingProgress";
import Preloader from "@/components/Preloader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import ArtworkDetail from "@/pages/ArtworkDetail";
import Journal from "@/pages/Journal";
import JournalArticle from "@/pages/JournalArticle";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/collection" component={Gallery} />
        <Route path="/collection/:category" component={Gallery} />
        <Route path="/artwork/:id" component={ArtworkDetail} />
        <Route path="/journal" component={Journal} />
        <Route path="/journal/:slug" component={JournalArticle} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <CustomCursor />
        <ReadingProgress />
        <div className="noise-overlay" />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
