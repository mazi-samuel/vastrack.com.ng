const Statistics = () => {
  const stats = [
    {
      number: "1000+",
      label: "Active Clients",
      description: "Businesses trust our services"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service guarantee"
    },
    {
      number: "50M+",
      label: "Messages/Month",
      description: "Successfully delivered monthly"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'white' }}>
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12 md:mb-16 p-6 md:p-8 rounded-2xl mx-auto max-w-4xl" 
          style={{ backgroundColor: '#5cbc8c' }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white px-2">
            Our numbers speak for themselves - delivering exceptional results for businesses across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group h-full"
            >
              <div 
                className="rounded-2xl p-6 md:p-8 border-2 transition-all duration-100 ease-out group-hover:shadow-2xl group-hover:shadow-[#5cbc8c]/30 group-hover:bg-[#5cbc8c] group-hover:border-[#4a9b73] relative overflow-hidden h-full flex flex-col justify-center min-h-[240px] md:min-h-[280px]"
                style={{ 
                  backgroundColor: 'white',
                  borderColor: '#5cbc8c'
                }}
              >
                {/* Animated background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5cbc8c]/0 via-[#5cbc8c]/0 to-[#5cbc8c]/0 group-hover:from-[#5cbc8c]/10 group-hover:via-[#5cbc8c]/5 group-hover:to-[#5cbc8c]/10 transition-all duration-100 ease-out"></div>
                
                <div className="relative z-10">
                  <div 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-100 ease-out group-hover:text-white group-hover:text-4xl sm:group-hover:text-5xl md:group-hover:text-6xl lg:group-hover:text-7xl group-hover:drop-shadow-lg group-hover:font-black"
                    style={{ color: '#5cbc8c' }}
                  >
                    {stat.number}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 transition-all duration-100 ease-out group-hover:text-white group-hover:text-xl sm:group-hover:text-2xl md:group-hover:text-3xl group-hover:font-bold group-hover:drop-shadow-md" style={{ color: '#5cbc8c' }}>
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed transition-all duration-100 ease-out group-hover:text-white group-hover:font-semibold group-hover:text-base sm:group-hover:text-lg group-hover:drop-shadow-sm text-center px-2" style={{ color: '#5cbc8c' }}>
                    {stat.description}
                  </p>
                </div>
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#5cbc8c]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;