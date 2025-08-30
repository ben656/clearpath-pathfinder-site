import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, FileText, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Advisory",
      description: "Strategic guidance to help your business grow and adapt to market changes. We provide insights and recommendations based on industry best practices.",
      features: [
        "Strategic planning & analysis",
        "Market research & insights",
        "Growth strategy development",
        "Risk assessment & mitigation"
      ]
    },
    {
      icon: Users,
      title: "Payroll Consultancy",
      description: "Comprehensive payroll solutions that ensure compliance and efficiency. From setup to ongoing management, we handle the complexities for you.",
      features: [
        "Payroll system implementation",
        "Compliance & regulatory guidance",
        "Process optimization",
        "Staff training & support"
      ]
    },
    {
      icon: FileText,
      title: "Financial Process Improvement",
      description: "Streamline your financial operations with our proven methodologies. We identify inefficiencies and implement solutions that save time and money.",
      features: [
        "Process audit & analysis",
        "Workflow optimization",
        "System integration",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive consultancy services designed to transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-elegant border-border hover:shadow-glow transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow transition-smooth"
          >
            Contact Us Today
          </Button>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tailored Pricing for Every Business
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our pricing is customized to meet your specific business needs and requirements. 
              Contact us for a personalized consultation and quote.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;