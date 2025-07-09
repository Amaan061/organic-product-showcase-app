import React, { useRef, useEffect, useState } from "react";
import vegatablesImg from './images/vegatables.jpg';
import fruitsImg from './images/fruits.jpg';


const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [bgIndex, setBgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const bgImages = [
    vegatablesImg,
    fruitsImg,
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
  ];

  // Animate in hero text
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
          headingRef.current.style.opacity = '1';
          headingRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Background image slider (only runs when visible)
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length, isVisible]);

  const handleShopNow = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden">
      {/* Background images slider */}
      <div className="absolute inset-0 w-full h-full">
        {bgImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${idx === bgIndex ? 'opacity-100 translate-x-0 z-0' : 'opacity-0 -translate-x-full z-0'}`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transitionProperty: 'opacity, transform',
            }}
            aria-hidden={idx !== bgIndex}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-organic-green-light/30 to-transparent" />
      </div>
      {/* Content stays centered and fixed */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-extrabold mb-2"
          style={{
            color: '#fff',
            textShadow: '0 2px 12px #fef9c3',
            WebkitTextStroke: '0.5px #fef9c3'
          }}
        >
          Nourish Naturally with Organic Goodness
        </h1>
        <button
          onClick={handleShopNow}
          className="mt-4 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 bg-[#28a745] text-white hover:bg-[#28a745] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#28a745]/60"
          style={{
            backgroundColor: '#28a745',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
