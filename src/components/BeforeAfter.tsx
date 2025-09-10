import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const benefits = [
    "Proteção UV 99% - Protege pele e estofados",
    "Redução de calor até 60%",
    "Privacidade e segurança",
    "Economia no ar-condicionado",
    "Valorização do veículo",
    "Proteção contra desbotamento"
  ];

  const openWhatsApp = () => {
    window.open("https://wa.me/5511974945257?text=Olá! Vi o antes e depois do insufilm e gostaria de fazer um orçamento!", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Diferença é Visível
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como o insufilm premium transforma seu veículo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={beforeAfterImage}
                  alt="Antes e depois do insufilm"
                  className="w-full h-full object-cover"
                />
                
                {/* Slider overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"
                  style={{
                    clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`
                  }}
                >
                </div>
                
                {/* Before/After Labels */}
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Sem Insufilm
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Com Insufilm PH
                </div>
                
                {/* Slider Control */}
                <div className="absolute inset-y-0 flex items-center" style={{ left: `${sliderPosition}%` }}>
                  <div className="w-1 h-full bg-white shadow-lg relative">
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing flex items-center justify-center"
                      onMouseDown={(e) => {
                        const startX = e.clientX;
                        const startPos = sliderPosition;
                        
                        const handleMouseMove = (moveEvent: MouseEvent) => {
                          const rect = e.currentTarget.closest('.relative')?.getBoundingClientRect();
                          if (rect) {
                            const deltaX = moveEvent.clientX - startX;
                            const deltaPercent = (deltaX / rect.width) * 100;
                            const newPos = Math.max(0, Math.min(100, startPos + deltaPercent));
                            setSliderPosition(newPos);
                          }
                        };
                        
                        const handleMouseUp = () => {
                          document.removeEventListener('mousemove', handleMouseMove);
                          document.removeEventListener('mouseup', handleMouseUp);
                        };
                        
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                      }}
                    >
                      <ArrowRight className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Arraste o controle para ver a diferença
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Benefícios do Insufilm Premium
              </h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-primary/20 bg-gradient-primary/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Padrão PH Premium
                </h4>
                <p className="text-muted-foreground mb-6">
                  Utilizamos apenas películas de linha premium com tecnologia avançada, 
                  garantindo durabilidade, performance e acabamento impecável.
                </p>
                <Button 
                  onClick={openWhatsApp}
                  variant="premium" 
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Fazer Orçamento Agora
                </Button>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-bold text-foreground mb-2">💡 Dica Importante:</h4>
              <p className="text-sm text-muted-foreground">
                Insufilms de qualidade inferior podem desbotar, criar bolhas e até danificar 
                o sistema elétrico do seu veículo. Invista na qualidade PH e tenha tranquilidade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;