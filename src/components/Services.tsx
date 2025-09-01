import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, FileText, ArrowRight, Calculator } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Payroll Setup & Implementation",
      description: "Complete payroll system setup and implementation tailored to your business needs. We ensure everything is configured correctly from day one.",
      features: [
        "Initial payroll system assessment",
        "Custom system configuration",
        "Employee data migration",
        "Testing & validation"
      ]
    },
    {
      icon: FileText,
      title: "Compliance & Regulatory Support",
      description: "Stay compliant with UK payroll regulations and requirements. We keep you updated with the latest changes and ensure full compliance.",
      features: [
        "HMRC compliance guidance",
        "Auto enrolment support",
        "Statutory payment calculations",
        "Regular compliance reviews"
      ]
    },
    {
      icon: Calculator,
      title: "Complete Payroll Outsourcing",
      description: "Let us handle your entire payroll process from start to finish. Focus on your business while we manage all payroll operations with precision and reliability.",
      features: [
        "Full payroll processing service",
        "Monthly payroll runs & reporting",
        "HMRC submissions & compliance",
        "Employee self-service portal"
      ]
    },
    {
      icon: TrendingUp,
      title: "Process Optimization & Training",
      description: "Optimize your payroll processes for maximum efficiency and provide comprehensive training to your team for ongoing success.",
      features: [
        "Workflow analysis & improvement",
        "Staff training & documentation",
        "Best practice implementation",
        "Ongoing support & guidance"
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
            We offer comprehensive payroll consultancy services designed to streamline your 
            operations and ensure full compliance with UK regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us Today
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Services;