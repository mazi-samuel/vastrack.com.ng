import mtnLogo from "./images/MTN-ICON2.png";
import airtelLogo from "./images/AIRTEL-ICON2.png";
import gloLogo from "./images/glo-icon.png";
import nineMobileLogo from "./images/9mobil-icon.png";

const Partners = () => {
  const partners = [
    {
      name: "MTN Nigeria",
      logo: mtnLogo,
      color: "text-yellow-500"
    },
    {
      name: "Globacom",
      logo: gloLogo,
      color: "#5cbc8c"
    },
    {
      name: "Airtel Nigeria", 
      logo: airtelLogo,
      color: "text-red-500"
    },
    {
      name: "9Mobile",
      logo: nineMobileLogo,
      color: "#5cbc8c"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#5cbc8c' }}>
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg" style={{ color: '#97a8b7' }}>
            Proudly partnering with Nigeria's leading telecommunications providers
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="text-sm font-medium" style={{ color: '#97a8b7' }}>
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;