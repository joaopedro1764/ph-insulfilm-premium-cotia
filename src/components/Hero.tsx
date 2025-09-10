import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de fazer um orçamento para insufilm premium.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Insufilm 
            <span className="text-accent"> Premium</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Padrão PH Insufilm
          </p>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Proteção, elegância e sofisticação para seu veículo. 
            Insufilms de linha premium com garantia e excelência em cada aplicação.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Garantia Premium</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Instalação Profissional</span>
            </div>
            <div className="flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground font-medium">Cotia - SP</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Orçamento WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MapPin className="h-6 w-6 mr-3" />
              Visitar Loja
            </Button>
          </div>

          <div className="mt-12 text-primary-foreground/70">
            <p className="text-sm">📍 Cotia, São Paulo | ⭐ +500 clientes satisfeitos</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;