import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import bmwImage from "@/assets/bmw-tinted.jpg";
import mercedesImage from "@/assets/mercedes-tinted.jpg";
import audiImage from "@/assets/audi-tinted.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: bmwImage,
      title: "BMW Serie 3 - Insufilm Premium",
      description: "Película G20 aplicada com perfeição, proporcionando elegância e proteção."
    },
    {
      image: mercedesImage,
      title: "Mercedes-Benz C-Class",
      description: "Insufilm de linha premium com aplicação profissional e acabamento impecável."
    },
    {
      image: audiImage,
      title: "Audi A4 - Padrão PH",
      description: "Proteção UV máxima mantendo a sofisticação original do veículo."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a qualidade e precisão dos nossos serviços em veículos premium
          </p>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-card-custom hover:shadow-elegant transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(item.image)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Eye className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-16">
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-card-custom">
              <div className="relative aspect-[4/3]">
                <img
                  src={galleryItems[currentIndex].image}
                  alt={galleryItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {galleryItems[currentIndex].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {galleryItems[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Button
              variant="secondary"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
        <div className="bg-gradient-accent rounded-2xl p-8 inline-block">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Seu carro merece o melhor!
          </h3>
          <p className="text-accent-foreground/90 mb-6">
            Agende uma visita e veja de perto a qualidade PH Insufilms
          </p>
           <Button variant="premium" size="lg">
            Agendar Visita
          </Button>
        </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
            >
              <span className="sr-only">Fechar</span>
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;