import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "£150",
      period: "/month",
      description: "Perfect for small businesses getting started with professional consultancy.",
      features: [
        "Monthly consultation session",
        "Basic financial process review",
        "Email support",
        "Quarterly business health check",
        "Access to resource library"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "£350",
      period: "/month",
      description: "Ideal for growing businesses looking to optimize operations and scale effectively.",
      features: [
        "Bi-weekly consultation sessions",
        "Comprehensive process optimization",
        "Priority phone & email support",
        "Monthly performance reports",
        "Custom solution development",
        "Dedicated account manager"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "£750",
      period: "/month",
      description: "For established businesses requiring comprehensive, ongoing consultancy support.",
      features: [
        "Weekly consultation sessions",
        "Full operational audit & optimization",
        "24/7 priority support",
        "Real-time performance monitoring",
        "Custom software integration",
        "Dedicated team of specialists",
        "Quarterly strategy sessions"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the consultancy package that best fits your business needs. 
            All packages include our commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative bg-white shadow-elegant border-border hover:shadow-glow transition-smooth ${
                pkg.popular ? 'border-primary' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold transition-smooth ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow' 
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            All packages come with a 30-day satisfaction guarantee. No long-term contracts required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
            >
              Compare All Features
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;