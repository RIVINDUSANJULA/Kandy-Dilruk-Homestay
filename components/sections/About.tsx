'use client';

import GlassCard from '../ui-custom/GlassCard';

export default function About() {
  const features = [
    {
      icon: "🌄",
      title: "Breathtaking Views",
      description: "Stunning mountain and city views directly from your private balcony."
    },
    {
      icon: "🍛",
      title: "Authentic Meals",
      description: "Delicious home-cooked meals. We are famous for our authentic Chicken Curry and fresh daily breakfasts."
    },
    {
      icon: "🚶‍♂️",
      title: "Prime Location",
      description: "Nestled in a peaceful hill setting, yet only a 15-minute scenic walk to Kandy city center."
    },
    {
      icon: "🛏️",
      title: "Comfort & Cleanliness",
      description: "Fully equipped with AC, Hot Water, reliably fast Free Wi-Fi, and secure Free Parking."
    }
  ];

  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 text-shadow-strong">
            Your Home in the Hills
          </h2>
          <div className="w-20 h-1 bg-sunset mx-auto rounded-full opacity-80"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.15} 
              className="flex flex-col sm:flex-row p-8 gap-6 items-start hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-5xl drop-shadow-md">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-white mb-3 tracking-wide">{feature.title}</h3>
                <p className="font-sans text-cream/90 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
