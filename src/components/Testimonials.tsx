import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      vehicle: "BMW X3 2022",
      rating: 5,
      text: "Excelente qualidade! O insufilm ficou perfeito no meu BMW. A equipe da PH é muito profissional e o resultado superou minhas expectativas.",
      location: "Cotia, SP"
    },
    {
      name: "Ana Paula",
      vehicle: "Mercedes C200 2023",
      rating: 5,
      text: "Recomendo 100%! Aplicação impecável, sem bolhas, acabamento perfeito. Realmente um padrão premium de qualidade.",
      location: "Barueri, SP"
    },
    {
      name: "Roberto Santos",
      vehicle: "Audi A4 2021",
      rating: 5,
      text: "Melhor custo-benefício da região. Fiz cotação em vários lugares e a PH ofereceu o melhor preço sem abrir mão da qualidade.",
      location: "Osasco, SP"
    },
    {
      name: "Marina Costa",
      vehicle: "Porsche Cayenne 2022",
      rating: 5,
      text: "Atendimento personalizado e cuidado especial com veículos de luxo. Minha Porsche ficou com um visual ainda mais elegante!",
      location: "São Paulo, SP"
    },
    {
      name: "João Pedro",
      vehicle: "Range Rover 2023",
      rating: 5,
      text: "Já indiquei para vários amigos. A aplicação foi rápida, limpa e o resultado é simplesmente perfeito. Padrão PH é diferenciado mesmo!",
      location: "Alphaville, SP"
    },
    {
      name: "Fernanda Lima",
      vehicle: "Volvo XC60 2022",
      rating: 5,
      text: "Proteção excelente contra o sol e total privacidade. A qualidade do insufilm é realmente superior, vale cada centavo investido.",
      location: "Santana de Parnaíba, SP"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-primary fill-primary' : 'text-muted'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 clientes satisfeitos com o padrão PH de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card-custom hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>
                
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.vehicle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                500+
              </div>
              <p className="text-primary-foreground/80">
                Clientes Satisfeitos
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                5★
              </div>
              <p className="text-primary-foreground/80">
                Avaliação Média
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                10+
              </div>
              <p className="text-primary-foreground/80">
                Anos de Experiência
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                100%
              </div>
              <p className="text-primary-foreground/80">
                Garantia Premium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;