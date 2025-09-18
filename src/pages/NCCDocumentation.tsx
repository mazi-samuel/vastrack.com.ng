import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Building, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NCCDocumentationPage = () => {
  const handleDownload = () => {
    // Create a link to download the PDF file
    const link = document.createElement('a');
    link.href = '/documents/MOBLOGIC LTD (2).pdf';
    link.download = 'MOBLOGIC LTD (2).pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-16 w-16 text-primary mr-4" />
              <Building className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NCC Code of Practice Documentation
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Individual Code of Practice in compliance with the regulatory provisions of the 
              Nigerian Communications Commission Code of Practice Regulations 2024
            </p>
            <Button 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary-glow text-white font-semibold px-8 py-3 text-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Document
            </Button>
          </div>
        </div>
      </section>

      {/* Document Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">MOBLOGIC LTD Document</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>INDIVIDUAL CODE OF PRACTICE</strong><br/>
                  IN COMPLIANCE WITH THE REGULATORY PROVISIONS OF THE NIGERIAN COMMUNICATIONS COMMISSION 
                  CODE OF PRACTICE REGULATIONS 2024, QUALITY OF SERVICE (BUSINESS) REGULATIONS 2024 
                  AND OTHER RELEVANT LAWS/REGULATIONS.
                </p>
                <Button 
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary-glow"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Click Here to Download Document
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Provisions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              THE CODE PROVIDES AS FOLLOWS:
            </h2>
            
            <div className="grid gap-8">
              {/* Section 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">1. PROVISION OF INFORMATION</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(a) Description of services</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Limited provides Value Added Services (content services) using short code numbers 
                      7143, 20105 and 20106. The services are Mob Empowerment Scheme, MobSports, MobQuiz Mania, MobTrivia land, 
                      MobBidnWin, MobGame Luck, Mob Tetrix, MobCroft Trivia, MobAfroHisto, MobToktok, MobCare. The services aim 
                      to empower subscribers and customer with right skills and knowledge in various sectors.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(b) Service Contract and Duration</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd provides content services using short code numbers. Moblogic Technologies Ltd 
                      makes clear the service contract and duration for all short code services and products to allow customers 
                      to make informed decisions. The services are priced at N100 for a duration of one day and N150 for a 
                      duration of three days.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(c) Service Subscription</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd offer Value Added services as listed in (a) above, that customers subscribe to, 
                      by sending keyword of the service to the approved short code number also listed in (a) above, like MD to 7143.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(d) Contract terms and conditions</h4>
                    <p className="text-muted-foreground mb-3">
                      Moblogic Technology Ltd makes clear the contract terms and conditions. The Terms and conditions for all 
                      subscription services and products includes the following:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>The description of the offer, the terms of the service, the subscription timelines/package(s), the minimum subscription period, terms of termination.</li>
                      <li>All subscription services have a proper outline and clear communication with the prescribed prices/tariffs for transparency which is N100 daily and N150 for three days (N is naira)</li>
                      <li>The specific services covered by the subscription, the frequency of charges or other conditions that generate fees, all circumstances under which charges or fees may change with time.</li>
                      <li>When Moblogic Technologies Ltd updates prices/fees/tariffs are effected or anticipated, customers are informed in advance of the reasons for such updates or review or increase.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(e) Opt in and opt out</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd customers are provided with the options to either opt in (Send Keyword to designated 
                      short code, MD to 7143) or opt out (Send Stop keyword to designated short code, stop MD to 7143).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">2. ADVERTISING AND REPRESENTATION OF SERVICES</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Moblogic Technologies Ltd adopts and complies with advertising standards for its service offerings.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(a) Availability of Service</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd publishes advertising materials of its short code services that are readily 
                      available and on all the networks/platforms where it is available except there are any geographical or 
                      technical limitations that affect the network access to that geographical location and in such cases it 
                      communicates clearly in the advertisement so that consumers are not misled.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(b) Advertisement of packaged services</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd is able to supply all components of service packaged as put in the advert.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      <strong>Non-Discrimination:</strong> Advertisement or notice of a promotion of Moblogic Technologies Ltd 
                      short code services does not provide any obscenities or profanities unsuitable for young persons and 
                      children and does not provide any racial or prejudicial content relating to national origin, religion, 
                      sex, gender or age.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(c) Disclaimer</h4>
                    <p className="text-muted-foreground">
                      Moblogic Technologies Ltd provides all important information in our advertorial to furnish our 
                      clients/customers with all material information for an informed decision including disclaimers in a 
                      manner that does not negate the principal message of the advertorial. Disclaimers accompanying Moblogic 
                      Ltd adverts are clear, understandable and unequivocal.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(d) Telemarketing</h4>
                    <p className="text-muted-foreground">
                      Moblogic Ltd does not produce, print or through any other medium disseminate any unsolicited advertising 
                      or telemarketing except it discloses the name of the company on whose behalf the advert is being made and 
                      all essential elements of the product, service, terms and conditions and the price and a preservation of 
                      the rights to opt in and opt out of the service/product or message/text or call within a reasonable time 
                      and via a toll free number where a call is necessary for such feedback.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">3. COMPLAINT HANDLING</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(a) Complaint processes</h4>
                    <p className="text-muted-foreground">
                      Moblogic Ltd maintains a customer complaints service to respond to issues and problems encountered by 
                      our customers in engaging and enjoying our services and resolves problems and concerns in a timely fashion.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(b) Further Recourse</h4>
                    <p className="text-muted-foreground">
                      Moblogic Ltd clients/customers are informed of their rights to complain when dissatisfied with any of 
                      our short code service or outcome, or if any of the terms of our service is violated or generally to 
                      verify any information. Such are made to our complaint desk accessible at our office at No 4, Babatope 
                      Bejide crescent, Lekki phase 1, Lagos, and via telephone on 08087391898 or via email to tech@vastracktech.com.ng
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">(c) Data collection and analysis of complaint and outcome</h4>
                    <p className="text-muted-foreground mb-3">
                      Customers have their data/information, details of their subscription and a summary of the complaint put 
                      together before engaging Moblogic Ltd complaint desk. This helps to accelerate the resolution process. 
                      Verbal complaints are acknowledged immediately when communicated, and all complaints are tracked using a 
                      unique reference number assigned at the time of lodging the complaint.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Moblogic Ltd acknowledges all complaints provided it is not frivolous or vexatious and makes the initial response in accordance with the particulars of the complaint and where necessary and appropriate.</li>
                      <li>A reference/tracking number is assigned to every complaint for easy tracking and identification, speedy process, filing and future reference.</li>
                      <li>A complainant may be advised on a process of investigation of the complaint and timeline for response and resolution given in furtherance of the rectification process.</li>
                      <li>Moblogic ensures that no complaint is left unresolved for more than 60 days.</li>
                      <li>Moblogic does not entertain frivolous and vexatious complaints, and if a complaint is deemed to be frivolous, Moblogic notifies the customer also. The customer may then proceed to escalate the complaint.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Sections 4-6 continue with similar structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">4. CONSUMER OBLIGATIONS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Consumers and customers are bound by the terms and conditions of every short code service offering they 
                    agree and subscribe to, which are always very clearly outlined in simple words and also have the option 
                    to accept or reject, and to opt out of subscriptions or contracts according to the terms and conditions thereof.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">5. PROTECTION OF CONSUMER INFORMATION</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Moblogic Ltd collects and manages consumer information in accordance with the highest ethical standards, 
                    ensuring data is fairly and lawfully collected, processed for specified purposes, relevant to services, 
                    and kept accurate and secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">6. CONSUMER BILLING</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Moblogic Ltd operates a transparent and accurate billing policy with clear billing information, timely 
                    issuance, payment confirmation systems, and proper record retention for at least 24 months.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Company Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Moblogic Technologies Limited</strong><br/>
                    Legal and Regulatory Department
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    4, Babatope Bejide Crescent,<br/>
                    Lekki Phase 1, Lagos, Nigeria
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">08087391898</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">tech@vastracktech.com.ng</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Download Complete Documentation
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get the full NCC Code of Practice compliance document
          </p>
          <Button 
            onClick={handleDownload}
            className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Document
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NCCDocumentationPage;