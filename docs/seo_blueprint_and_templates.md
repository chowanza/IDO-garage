# SOS Garage Door Group: Local SEO & CRO Blueprint

Este documento contiene la arquitectura de información, estrategias de conversión, datos estructurados Schema.org, fórmulas de copys de metadatos y plantillas de código solicitadas para maximizar el posicionamiento y conversión del negocio.

---

## 1. Mapa de Sitio & Wireframe Layout (Estructura de Conversión)

Para lograr una autoridad temática ante Google (Topical Authority) y maximizar el porcentaje de conversión (CRO), la estructura de navegación y el flujo visual deben seguir este orden lógico:

### A. Estructura Jerárquica del Sitio (Silo Structure)
```
/ (Página de Inicio - Chicago / Chicagoland Authority Hub)
├── /services/ (Hub de Servicios)
│   ├── /services/garage-door-repair (Reparación General)
│   ├── /services/garage-door-spring-replacement (Cambio de Resortes - Alta Conversión)
│   ├── /services/garage-door-opener-repair-installation (Motores / Abridores)
│   ├── /services/overhead-door-services (Portones Industriales/Comerciales)
│   ├── /services/emergency-repair-24-7 (Servicio de Emergencia)
├── /locations/ (Programmatic Local SEO Engine)
│   ├── /locations/chicago-il/ (Landing de Ubicación Principal)
│   ├── /locations/naperville-il/
│   ├── /locations/schaumburg-il/
│   └── /locations/chicago-il/garage-door-spring-replacement/ (Doble Silo Local)
└── /reviews-and-projects/ (Pruebas de Trabajo Geo-localizadas)
```

### B. Estructura del Wireframe de la Página de Inicio (Sección por Sección)
1.  **Header (Sticky Glassmorphic Nav):**
    *   Izquierda: Logo (SOS Garage Door Group).
    *   Centro: Enlaces rápidos a Servicios, Cotizador, Testimonios y FAQ.
    *   Derecha: Botón de llamada telefónica de emergencia `(773) 839-2852` destacado en rojo carmesí con icono parpadeante.
2.  **Hero Section (Conversión en Primer Plano):**
    *   Fondo: Imagen premium de una cochera residencial moderna con iluminación nocturna.
    *   Columna Izquierda:
        *   Badge: "Atención de Emergencias 24/7 en Chicagoland".
        *   H1: Propuesta de valor localizada enfocada en dolor del usuario ("Reparación de Portones de Garaje en Chicago — Técnicos en Sitio en 45 Minutos").
        *   Subtítulo: Explicación de garantía, licencia e inspección gratis.
        *   Badges de Confianza: Google Rating (4.9/5 estrellas), Licencia y Seguro locales.
    *   Columna Derecha:
        *   Formulario rápido de 3 pasos (CRO): Selección de problema (ej. resorte roto) -> Código Postal -> Teléfono y Nombre.
3.  **Client Logos & Trust Badges (Pruebas de Calidad):**
    *   Carrusel silencioso de marcas de fabricantes autorizados (LiftMaster, Chamberlain, Genie, Clopay, Amarr).
4.  **Services Grid (Topical Breadth):**
    *   Mosaico de 6 tarjetas con efectos hover premium mostrando los servicios principales, precios de salida claros (ej. "Desde $99") y botones rápidos de "Pedir Servicio".
5.  **Emergency Status Banner (Garantía de Rapidez):**
    *   Franja roja con un aviso de técnicos activos: "Técnicos en tu zona listos para despacho. Tiempo estimado de arribo: 30-45 minutos".
6.  **Interactive Estimator Widget (Cotizador):**
    *   Selector interactivo para que el usuario calcule un presupuesto inmediato de su proyecto. Reduce la fricción de cotizar telefónicamente.
7.  **Geo-tagged Reviews & Projects (Pruebas Sociales):**
    *   Carrusel de opiniones de clientes reales importadas de Google Maps con menciones de zonas locales (ej. "Excelente trabajo en Lincoln Park...").
8.  **Local SEO FAQ Section (Snippets Estructurados):**
    *   Sección de preguntas frecuentes con acordeones interactivos conteniendo respuestas de costos, tiempos de llegada y tipo de reparaciones.
9.  **Footer (Pie de Página Físico):**
    *   Dirección física local, mapas, enlaces legales, licencias y enlaces a subpáginas de ciudades.

---

## 2. Esquema de Datos Estructurados JSON-LD (Schema.org)

Inyectar este código en la cabecera `<head>` de la página para que los motores de búsqueda muestren estrellas de calificación, rangos de precios y preguntas frecuentes directamente en los resultados (Rich Snippets).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://sosgaragesolutions.com/#business",
      "name": "SOS Garage Door Group",
      "url": "https://sosgaragesolutions.com",
      "telephone": "+1-773-839-2852",
      "priceRange": "$$",
      "image": "https://sosgaragesolutions.com/public/hero-bg.jpg",
      "logo": "https://sosgaragesolutions.com/public/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6200 N Francisco Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60659",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.008469,
        "longitude": -87.693725
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "sameAs": "https://en.wikipedia.org/wiki/Chicago"
        },
        {
          "@type": "City",
          "name": "Evanston",
          "sameAs": "https://en.wikipedia.org/wiki/Evanston,_Illinois"
        },
        {
          "@type": "City",
          "name": "Skokie",
          "sameAs": "https://en.wikipedia.org/wiki/Skokie,_Illinois"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Garage Door Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Spring Replacement",
              "description": "Professional torsion and extension spring replacement with lifetime warranty options."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Garage Door Opener Installation",
              "description": "Installation of LiftMaster and Chamberlain heavy-duty smart belt/chain openers."
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://sosgaragesolutions.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to replace a garage door spring in Chicago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost to replace a garage door spring in Chicagoland typically ranges from $150 to $350. This estimate covers high-cycle springs, professional balance calibration, and a parts warranty."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide emergency garage door services on weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SOS Garage Door Group provides 24/7 emergency service in Chicago and suburbs, including late nights, weekends, and holidays, with no emergency premium rates for same-day service."
          }
        }
      ]
    }
  ]
}
```

---

## 3. Fórmulas de Copys para Metadatos (Local SEO CTR Optimization)

Fórmulas matemáticas de copywriting para maximizar el CTR (Click-Through Rate) en la SERP de Google:

### A. Títulos SEO (Límite: 55-60 Caracteres)
*   *Fórmula:* `[Servicio] [Ciudad/Zona] | [Gancho de Rapidez] | [Marca]`
*   *Ejemplo 1 (Springs):* `Garage Door Spring Repair Chicago | Same-Day Service | SOS` (58 chars)
*   *Ejemplo 2 (Emergencia):* `Emergency Garage Door Repair Chicago | 24/7 Dispatch | SOS` (58 chars)
*   *Ejemplo 3 (General):* `Garage Door Repair Chicago IL | Free Inspection | SOS Group` (59 chars)

### B. Meta Descripciones (Límite: 150-160 Caracteres)
*   *Fórmula:* `[Dolor/Problema] ⚡ [Solución Local]. [Beneficios / Oferta]. Llamar ahora al [Teléfono]! [Llamada a la acción].`
*   *Ejemplo 1:* `¿Resortes rotos o portón caído? ⚡ Reparación de portones en Chicago en menos de 45 mins. Inspección gratis, licencia y garantía. ¡Llama al (773) 839-2852!` (158 chars)
*   *Ejemplo 2:* `Reparación urgente de portones de garaje residenciales y comerciales en Chicago 24/7. Técnicos listos para despacho express. Llama ya al (773) 839-2852.` (157 chars)

---

## 4. Plantilla de Código (React + Tailwind CSS)

### A. Hero Section con Formulario de 3 Pasos
```tsx
import React, { useState } from 'react';

export default function HeroSection() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [zip, setZip] = useState('');
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-950 text-white overflow-hidden py-16">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-1" />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 block"></span>
            Chicago & Suburbs 24/7 Emergency Dispatch
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headings tracking-tight leading-none mb-6">
            Fast Garage Door Repair in <span className="text-red-600">Chicago</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Spring replacement, smart openers, and off-track repairs. Licensed techs dispatched in under 45 minutes. 100% Free On-Site Inspections.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 items-center border-t border-gray-800 pt-8 w-full max-w-lg">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-bold text-lg">★ 4.9/5</span>
              <span className="text-gray-400 text-sm">(180+ Google Reviews)</span>
            </div>
            <div className="h-4 w-px bg-gray-800 hidden sm:block"></div>
            <div className="text-gray-400 text-sm font-semibold">
              ✓ Same-Day Guarantee
            </div>
            <div className="text-gray-400 text-sm font-semibold">
              ✓ Licensed & Fully Insured
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-gray-900/90 border border-gray-800 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded">
              Free Quote
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 border border-green-500/30 flex items-center justify-content-center mx-auto mb-6 text-3xl">✓</div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-gray-400">Our Chicago dispatch team will call you back in under 15 minutes.</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4 font-headings">Rapid Service Booking</h3>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-800 rounded-full mb-6">
                  <div 
                    className="h-full bg-red-600 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service selection */}
                  {step === 1 && (
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-gray-300 mb-1">What service do you need?</label>
                      {[
                        'Broken Spring Replacement',
                        'Garage Door Won\'t Open/Close',
                        'New Opener / Installation',
                        'General Cable & Roller Repair'
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`w-full text-left p-3 rounded-lg border text-sm font-medium transition ${
                            service === item 
                              ? 'bg-red-950/40 border-red-500 text-red-400' 
                              : 'bg-gray-800/40 border-gray-800 hover:border-gray-700 text-gray-300'
                          }`}
                          onClick={() => {
                            setService(item);
                            handleNext();
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 2: ZIP Code */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-300">Enter your Zip Code (Chicago Area)</label>
                      <input
                        type="text"
                        pattern="[0-9]{5}"
                        required
                        placeholder="e.g. 60659"
                        className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-red-500"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                      />
                      <div className="flex gap-3 pt-2">
                        <button 
                          type="button" 
                          className="w-1/3 p-3 rounded-lg border border-gray-800 text-sm font-semibold text-gray-400 hover:bg-gray-800/30"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                        <button 
                          type="button" 
                          disabled={zip.length < 5}
                          className="w-2/3 p-3 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold rounded-lg text-sm transition"
                          onClick={handleNext}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Juan"
                          className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-red-500"
                          value={contact.name}
                          onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="(773) 839-2852"
                          className="w-full p-3 rounded-lg bg-gray-950 border border-gray-800 text-white focus:outline-none focus:border-red-500"
                          value={contact.phone}
                          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button 
                          type="button" 
                          className="w-1/3 p-3 rounded-lg border border-gray-800 text-sm font-semibold text-gray-400 hover:bg-gray-800/30"
                          onClick={handlePrev}
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="w-2/3 p-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm transition"
                        >
                          Submit Free Request
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### B. Sticky Mobile Dispatch Bar (CRO de Respuesta Rápida)
```tsx
import React from 'react';

export default function MobileDispatchBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 grid grid-cols-2 p-2.5 gap-2 md:hidden">
      {/* Call Dispatch Button */}
      <a 
        href="tel:+17738392852" 
        className="flex items-center justify-center gap-2 py-3 bg-red-600 active:bg-red-700 text-white rounded-xl font-bold font-headings text-sm shadow-[0_0_20px_rgba(220,38,38,0.3)] animate-pulse"
      >
        <span className="text-lg">📞</span>
        Call Dispatch
      </a>
      
      {/* Book Online Button */}
      <a 
        href="#contacto" 
        className="flex items-center justify-center gap-2 py-3 bg-gray-900 border border-gray-800 text-gray-200 rounded-xl font-bold font-headings text-sm"
      >
        <span className="text-lg">⚡</span>
        Book Online
      </a>
    </div>
  );
}
```
