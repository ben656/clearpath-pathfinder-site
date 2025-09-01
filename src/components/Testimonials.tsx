import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Managing Director",
      company: "TechStart Solutions",
      content: "ClearPath transformed our financial processes completely. Their expertise saved us countless hours and significantly improved our operational efficiency. The team's professionalism and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Finance Director",
      company: "GrowthCorp Ltd",
      content: "Working with ClearPath has been a game-changer for our business. Their strategic guidance helped us navigate complex challenges and achieve sustainable growth. I highly recommend their services to any business looking to optimize operations.",
      rating: 5
    },
    {
      name: "Emma Williams",
      position: "CEO",
      company: "Innovative Retail Group",
      content: "The payroll consultancy service provided by ClearPath was exceptional. They streamlined our entire payroll system and ensured full compliance. Their ongoing support gives us confidence and peace of mind.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            working with ClearPath Consultancy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-elegant border-border hover:shadow-glow transition-smooth h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-elegant p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let us help your business achieve the same level of success. 
              Contact us today to discuss your specific needs.
            </p>
            <div className="flex justify-center">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-semibold transition-smooth shadow-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;