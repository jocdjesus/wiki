import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function MedicalShowcase() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">MediTech</div>
        <div className="menu">
          <Link href="#" className="menu-link">Home</Link>
          <Link href="#" className="menu-link">Products</Link>
          <Link href="#" className="menu-link">Services</Link>
          <Link href="#" className="menu-link">Contact</Link>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              Advanced Medical <span>Technology Solutions</span>
            </h1>
            <p className="hero-description">
              Discover our cutting-edge medical equipment and services designed
              to improve patient care and streamline healthcare operations.
            </p>
            <div className="hero-buttons">
              <Link href="#" className="button">Get Started</Link>
              <Link href="#" className="button">Learn More</Link>
            </div>
          </div>
          {/*<div className="hero-image">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Medical professional using advanced equipment"
              width={800}
              height={600}
            />
          </div>*/}
        </section>

        <section className="equipment-section">
          <h2 className="section-title">Featured Medical Equipment</h2>
          <div className="equipment-list">
            {[
              {
                name: "Advanced MRI Scanner",
                description: "High-resolution imaging for accurate diagnostics",
              },
              {
                name: "Portable Ultrasound",
                description: "Compact and efficient for on-the-go examinations",
              },
              {
                name: "Robotic Surgical System",
                description:
                  "Precision technology for minimally invasive procedures",
              },
            ].map((product, index) => (
              <div key={index} className="equipment-item">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${product.name}`}
                  alt={product.name}
                  width={300}
                  height={200}
                />
                <h3 className="equipment-name">{product.name}</h3>
                <p className="equipment-description">{product.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2 className="section-title">Our Medical Services</h2>
          <div className="services-list">
            {[
              {
                name: "Diagnostic Imaging",
                description:
                  "State-of-the-art imaging services for accurate diagnosis",
              },
              {
                name: "Telemedicine",
                description: "Remote healthcare services for convenient care",
              },
              {
                name: "Preventive Care",
                description:
                  "Comprehensive health screenings and wellness programs",
              },
            ].map((service, index) => (
              <div key={index} className="service-item">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>
        <p className="footer-text">&copy; 2023 MediTech, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
