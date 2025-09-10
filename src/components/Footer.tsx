import { MessageCircle, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da PH Insufilms.", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">PH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PH Insufilms</h3>
                <p className="text-sm text-primary-foreground/80">Padrão Premium</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Especialistas em insufilm e acessórios automotivos premium. 
              Qualidade, elegância e proteção para seu veículo.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Insufilm Automotivo Premium</li>
              <li>Película de Segurança</li>
              <li>Acessórios Automotivos</li>
              <li>Instalação Profissional</li>
              <li>Garantia Especializada</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Cotia, São Paulo</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Funcionamento</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80 mb-6">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 16h</p>
              <p>Domingo: Fechado</p>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 PH Insufilms. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle className="h-7 w-7 text-accent-foreground" />
      </button>
    </footer>
  );
};

export default Footer;