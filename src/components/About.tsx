import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Expert payroll consultancy tailored to your business needs",
    "Proven track record of streamlining financial processes", 
    "Comprehensive support for operational efficiency",
    "Trusted by companies across the United Kingdom"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">ClearPath</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ClearPath Consultancy, we specialize in helping businesses streamline their 
                payroll processes and improve operational efficiency. Our mission is to provide 
                expert guidance and reliable support to companies across the UK.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that effective payroll management is crucial for business success. 
                Our team provides tailored solutions that ensure compliance, efficiency, and peace 
                of mind. Every business is unique, which is why we take a personalized approach 
                to every client relationship.
              </p>

              <div className="bg-gradient-subtle p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Transparency, reliability, and excellence drive everything we do. 
                  We're committed to building long-term partnerships that help your payroll 
                  processes run smoothly and efficiently with flexible pricing that scales with your business.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Why Choose ClearPath?</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-elegant border border-border">
                <blockquote className="text-lg text-muted-foreground italic">
                  "Our commitment is simple: to provide the clarity and expert payroll 
                  guidance your business needs to operate efficiently and with confidence."
                </blockquote>
                <div className="mt-4 text-sm text-primary font-semibold">
                  — ClearPath Consultancy Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;