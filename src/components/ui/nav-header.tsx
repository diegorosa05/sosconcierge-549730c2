import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/10 backdrop-blur-md"
      } rounded-full border-2 ${isScrolled ? "border-[#E0AE2E]" : "border-white/30"}`}
    >
      <ul
        className="relative flex w-fit p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition} href="#home" isScrolled={isScrolled}>
          Home
        </Tab>
        <Tab setPosition={setPosition} href="#about" isScrolled={isScrolled}>
          Sobre
        </Tab>
        <Tab setPosition={setPosition} href="#services" isScrolled={isScrolled}>
          Serviços
        </Tab>
        <Tab setPosition={setPosition} href="#contact" isScrolled={isScrolled}>
          Contato
        </Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
  isScrolled,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
  isScrolled: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer"
    >
      <a
        href={href}
        className={`block px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base transition-colors ${
          isScrolled ? "text-black hover:text-[#E0AE2E]" : "text-white mix-blend-difference"
        }`}
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default NavHeader;
