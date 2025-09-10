import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511974945257?text=Olá! Gostaria de fazer um orçamento para insufilm premium.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card-custom">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">PH</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">PH Insufilms</h1>
            <p className="text-xs text-muted-foreground">Padrão Premium</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection("gallery")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-smooth"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Phone className="h-4 w-4 mr-2" />
            (11) 97494-5257
          </Button>
          <Button onClick={openWhatsApp} variant="premium" size="sm">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;