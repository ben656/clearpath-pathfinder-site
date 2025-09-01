import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Guiding Your Business with{" "}
            <span className="text-primary">Clarity</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            ClearPath Consultancy helps businesses streamline financial processes 
            and improve operational efficiency. Expert guidance, tailored solutions, 
            and reliable support across the UK.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow transition-smooth group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Consultation
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">UK Based</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;