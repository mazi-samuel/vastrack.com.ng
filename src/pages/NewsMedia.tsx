import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import { Calendar, ArrowRight, Play, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import heroImage from "@/assets/images/rich-tervet-i8r3Kt2-mr8-unsplash.jpg";
import fiveGImage from "@/assets/images/markus-winkler-QxZWOjp2jZQ-unsplash.jpg";
import nccImage from "@/assets/images/NCC.jpeg";
import partnershipImage from "@/assets/images/curated-lifestyle-FNQaITPFg5c-unsplash.jpg";
import vasRevenueImage from "@/assets/images/allison-saeng-di9INIIhvj8-unsplash.jpg";
import ceoVideoImage from "@/assets/images/ngozi-ejionueme-fCkpkEZzoaw-unsplash.jpg";
import smsGatewayImage from "@/assets/images/brett-jordan-LPZy4da9aRo-unsplash.jpg";
import mobileMoneyImage from "@/assets/images/random-institute-v0l4L1DfAbw-unsplash.jpg";

const NewsMediaPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState(6);
  const newsItems = [
    {
      type: "Documentation",
      title: "NCC Code of Practice Compliance: Moblogic Technologies Individual Code of Practice",
      excerpt: "Complete regulatory documentation in compliance with Nigerian Communications Commission Code of Practice Regulations 2024, outlining Value Added Services provided through short code numbers 7143, 20105 and 20106.",
      date: "September 12, 2024",
      image: nccImage,
      category: "Regulatory",
      featured: true,
      isDocument: true,
      documentRoute: "/ncc-documentation"
    },
    {
      type: "Article",
      title: "5G Network Infrastructure: Transforming Nigeria's Digital Landscape",
      excerpt: "Explore how 5G technology is revolutionizing telecommunications and creating new opportunities for businesses across Nigeria. This comprehensive analysis covers the implementation challenges, opportunities, and future prospects of 5G deployment in West Africa.",
      date: "September 10, 2024",
      image: fiveGImage,
      category: "Technology"
    },
    {
      type: "Press Release",
      title: "Vastrack Technologies Partners with Leading Telecom Providers",
      excerpt: "Strategic partnerships announced to expand VAS solutions and enhance customer experience across multiple networks.",
      date: "September 5, 2024",
      image: partnershipImage,
      category: "Business"
    },
    {
      type: "Video",
      title: "Digital Transformation in African Telecommunications",
      excerpt: "Watch our CEO discuss the future of telecom services and how value-added solutions are driving innovation.",
      date: "August 28, 2024",
      image: ceoVideoImage,
      category: "Interview",
      isVideo: true
    },
    {
      type: "Article",
      title: "VAS Solutions: Driving Revenue Growth for Telecom Operators",
      excerpt: "An in-depth look at how Value-Added Services are creating new revenue streams and improving customer engagement.",
      date: "August 20, 2024",
      image: vasRevenueImage,
      category: "Technology"
    },
    {
      type: "Case Study",
      title: "Successful SMS Gateway Implementation for Financial Services",
      excerpt: "How we helped a leading financial institution streamline their customer communications with our SMS solutions.",
      date: "August 15, 2024",
      image: smsGatewayImage,
      category: "Case Study"
    },
    {
      type: "Article",
      title: "The Future of Mobile Money in Nigeria",
      excerpt: "Exploring the growth potential and technological innovations shaping the mobile financial services landscape.",
      date: "August 10, 2024",
      image: mobileMoneyImage,
      category: "Finance"
    }
  ];

  const categories = ["All", "Technology", "Business", "Interview", "Case Study", "Finance", "Regulatory"];

  // Filter and search functionality
  const filteredItems = useMemo(() => {
    return newsItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [newsItems, searchTerm, selectedCategory]);

  const featuredItem = filteredItems.find(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);
  const displayedItems = regularItems.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleItems(6); // Reset visible items when category changes
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-hero-bg to-hero-bg/80 py-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-hero/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-6">
              News & Media
            </h1>
            <p className="text-xl text-hero-foreground/80 max-w-3xl mx-auto">
              Stay informed with the latest updates, insights, and announcements 
              from Vastrack Technologies and the telecommunications industry.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search news and articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className="text-sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Search Results Summary */}
          {(searchTerm || selectedCategory !== "All") && (
            <div className="mb-6 p-4 bg-background rounded-lg border">
              <p className="text-sm text-muted-foreground">
                {filteredItems.length === 0 ? (
                  <>No results found</>
                ) : (
                  <>
                    Showing {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                    {searchTerm && <> for "<span className="font-medium">{searchTerm}</span>"</>}
                    {selectedCategory !== "All" && <> in <span className="font-medium">{selectedCategory}</span></>}
                  </>
                )}
                {(searchTerm || selectedCategory !== "All") && (
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="ml-2 p-0 h-auto"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setVisibleItems(6);
                    }}
                  >
                    Clear all filters
                  </Button>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Article */}
      {featuredItem && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                Featured Article
              </span>
              <Card className="overflow-hidden group hover:shadow-xl hover:bg-primary hover:-translate-y-2 transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredItem.image} 
                      alt={featuredItem.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredItem.date}</span>
                      <span className="ml-auto text-primary group-hover:text-white font-medium">{featuredItem.category}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-white mb-4">
                      {featuredItem.title}
                    </h2>
                    
                    <p className="text-muted-foreground group-hover:text-white/90 mb-6">
                      {featuredItem.excerpt}
                    </p>
                    
                    <Button className="bg-primary hover:bg-primary-glow group-hover:bg-white group-hover:text-primary group-hover:border-white">
                      {featuredItem.isDocument ? (
                        <Link 
                          to={featuredItem.documentRoute || "#"} 
                          className="flex items-center"
                        >
                          View Document
                          <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </Link>
                      ) : (
                        <>
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            {searchTerm || selectedCategory !== "All" ? "Search Results" : "Latest News & Updates"}
          </h2>
          
          {displayedItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchTerm ? 
                    `No articles match your search "${searchTerm}"` : 
                    `No articles found in the ${selectedCategory} category`
                  }
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setVisibleItems(6);
                  }}
                >
                  View All Articles
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedItems.map((item, index) => (
                  <Card key={index} className="group hover:shadow-xl hover:bg-primary hover:-translate-y-2 transition-all duration-300 bg-card border-border/50">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.isVideo && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                            <Play className="h-6 w-6 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      {item.isDocument && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0c8c84' }}>
                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.category === 'Regulatory' 
                            ? 'text-white' 
                            : 'bg-primary text-primary-foreground group-hover:bg-white group-hover:text-primary'
                        }`}
                        style={item.category === 'Regulatory' ? { backgroundColor: '#0c8c84' } : undefined}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                        <span className="ml-auto text-primary group-hover:text-white font-medium">{item.type}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-white mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground group-hover:text-white/90 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <Button variant="outline" className="group/btn group-hover:bg-white group-hover:text-primary group-hover:border-white">
                        {item.isDocument ? (
                          <Link 
                            to={item.documentRoute || "#"} 
                            className="flex items-center"
                          >
                            View Document
                            <svg className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </Link>
                        ) : (
                          <>
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              {visibleItems < regularItems.length && (
                <div className="text-center">
                  <Button variant="outline" size="lg" onClick={handleLoadMore}>
                    Load More Articles ({regularItems.length - visibleItems} remaining)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default NewsMediaPage;