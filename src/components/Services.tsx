import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Users, Car, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Insufilm Automotivo Premium",
      description: "Películas de alta qualidade com tecnologia avançada para máxima proteção e elegância.",
      features: ["Proteção UV 99%", "Redução de calor", "Privacidade total"]
    },
    {
      icon: Shield,
      title: "Película de Segurança",
      description: "Proteção contra quebra de vidros e tentativas de arrombamento.",
      features: ["Anti-estilhaço", "Resistente a impactos", "Transparente"]
    },
    {
      icon: Sparkles,
      title: "Acessórios Automotivos",
      description: "Complemente a proteção do seu veículo com nossos acessórios premium.",
      features: ["Alarmes", "Travas elétricas", "Sensors de ré"]
    }
  ];

  const differentials = [
    {
      icon: Award,
      title: "Padrão PH Premium",
      description: "Qualidade superior em cada aplicação"
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Serviço ágil sem comprometer a qualidade"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e certificados"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em insufilm e acessórios automotivos com o padrão PH de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-card-custom hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-card-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Por que escolher a PH Insufilms?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-primary-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;