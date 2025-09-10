import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita na PH Insufilms para fazer um orçamento.", "_blank");
  };

  const openMaps = () => {
    window.open("https://maps.google.com/?q=PH+Insufilms+Cotia+SP", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar ou entre em contato para seu orçamento personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-card-custom bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground">Endereço</h4>
                      <p className="text-muted-foreground">Cotia, São Paulo</p>
                      <p className="text-sm text-muted-foreground">Região metropolitana de São Paulo</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card-custom bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                      <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card-custom bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-card-foreground">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 16h</p>
                      <p className="text-sm text-muted-foreground">Domingo: Fechado</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="border-0 shadow-elegant bg-gradient-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Pronto para o Padrão Premium?
                </h3>
                <p className="text-primary-foreground/90 mb-8">
                  Faça seu orçamento sem compromisso. Atendimento personalizado 
                  e qualidade garantida em cada aplicação.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={openWhatsApp}
                    variant="hero" 
                    size="lg"
                    className="w-full text-lg"
                  >
                    <MessageCircle className="h-6 w-6 mr-3" />
                    Orçamento no WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={openMaps}
                    variant="outline" 
                    size="lg"
                    className="w-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <MapPin className="h-6 w-6 mr-3" />
                    Como Chegar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-accent/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-foreground mb-3">
                  🎯 Atendimento Especializado
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Orçamento gratuito e sem compromisso</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Consultoria personalizada para seu veículo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Agendamento flexível</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Garantia premium em todos os serviços</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;