"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="medium"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Inicio",
          id: "hero",
        },
        {
          name: "Cómo funciona",
          id: "about",
        },
        {
          name: "Personalizar",
          id: "feature",
        },
        {
          name: "Planes",
          id: "pricing",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="MenúLatam"
      button={{
        text: "Crear menú gratis",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Come rico, sano y a tu medida"
      description="Menús personalizados que se adaptan a tu bolsillo, salud e ingredientes locales de toda Latinoamérica."
      buttons={[
        {
          text: "Crear mi menú gratis",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "h1",
          imageSrc: "http://img.b2bpic.net/free-photo/tropical-fruits-with-copyspace_23-2147795418.jpg",
          imageAlt: "Comida latina saludable",
        },
        {
          id: "h2",
          imageSrc: "http://img.b2bpic.net/free-photo/fruit-salad-coconut-pineapple-plates_23-2148494813.jpg",
          imageAlt: "Desayuno saludable",
        },
        {
          id: "h3",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-hummus-plate-still-life_23-2149595643.jpg",
          imageAlt: "Almuerzo nutritivo",
        },
        {
          id: "h4",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-corn-rings-with-fruits-blue-surface-horizontal_176474-828.jpg",
          imageAlt: "Snack nutritivo",
        },
        {
          id: "h5",
          imageSrc: "http://img.b2bpic.net/free-photo/different-types-porridge-with-vegetables-wooden-board_23-2148014751.jpg",
          imageAlt: "Cena deliciosa",
        },
        {
          id: "h6",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-harvest-basket-beautifully-presented-outside-market-sale_346278-732.jpg",
          imageAlt: "Ingredientes frescos",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Tu cocina, nuestras ideas"
      description="Simplificamos tu alimentación semanal. Seleccionamos recetas basadas en tu región y presupuesto, ahorrándote tiempo y dinero al comprar."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-woman-writing-down-her-recipe-making-notes-notebook-cooking-sitting_1258-204662.jpg"
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Alergias e Intolerancias",
          description: "Opción sin gluten, lactosa, o preferencias veganas.",
          imageSrc: "http://img.b2bpic.net/free-vector/collection-healthy-food-with-names_23-2147590826.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/view-allergens-commonly-found-food_23-2150170308.jpg",
          buttonText: "Elegir",
        },
        {
          title: "Presupuesto Semanal",
          description: "Niveles económico, moderado y premium a tu alcance.",
          imageSrc: "http://img.b2bpic.net/free-photo/small-business-owners-giving-delivery-order-male-courier_482257-67620.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/young-woman-doing-her-groceries-shopping_23-2149015851.jpg",
          buttonText: "Elegir",
        },
        {
          title: "Regionalización",
          description: "Cocina mexicana, andina, caribeña o del cono sur.",
          imageSrc: "http://img.b2bpic.net/free-photo/cut-out-paper-globe-icon_53876-74635.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/wooden-spoons-surrounded-with-different-leaves-feathers-black-background_181624-16328.jpg",
          buttonText: "Elegir",
        },
      ]}
      title="Personaliza tu plan"
      description="Filtros adaptados a la realidad latinoamericana"
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Menú",
          name: "Desayuno Nutritivo",
          price: "10 min prep",
          rating: 5,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/seasonal-green-vegetable-salad-with-herbs-tomato_114579-4501.jpg",
        },
        {
          id: "p2",
          brand: "Menú",
          name: "Almuerzo Andino",
          price: "20 min prep",
          rating: 5,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-plate-with-assortment-healthy-food_23-2148381259.jpg",
        },
        {
          id: "p3",
          brand: "Menú",
          name: "Snack de Frutas",
          price: "5 min prep",
          rating: 4,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fresh-greens-with-vegetables-light-blue-background-ripe-salad-photo-meal-color_140725-141822.jpg",
        },
        {
          id: "p4",
          brand: "Menú",
          name: "Cena Ligera Caribeña",
          price: "15 min prep",
          rating: 5,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-summer-cocktail-pina-colada-fresh-summer-drink-concept_185193-109324.jpg",
        },
        {
          id: "p5",
          brand: "Menú",
          name: "Bowl de Proteína",
          price: "25 min prep",
          rating: 5,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-shrimp-salad-with-avocado-cherry-tomatoes-bowl_140725-12490.jpg",
        },
        {
          id: "p6",
          brand: "Menú",
          name: "Postre Saludable",
          price: "10 min prep",
          rating: 5,
          reviewCount: "Alta",
          imageSrc: "http://img.b2bpic.net/free-photo/chocolate-brownies-table_1339-6791.jpg",
        },
      ]}
      title="Ejemplo de tu menú semanal"
      description="Una muestra de lo que puedes recibir en tu email"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "economico",
          title: "Económico",
          price: "Free",
          period: "/semana",
          features: [
            "Ingredientes de mercado",
            "Cocina local básica",
          ],
          button: {
            text: "Seleccionar",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-arrangement-meal-plan_23-2148484638.jpg",
        },
        {
          id: "moderado",
          title: "Moderado",
          price: "$5",
          period: "/semana",
          features: [
            "Más variedad",
            "Recetas premium",
          ],
          button: {
            text: "Seleccionar",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-with-copy-space-wooden-background_23-2148305825.jpg",
        },
        {
          id: "premium",
          title: "Premium",
          price: "$12",
          period: "/semana",
          features: [
            "Recetas gourmet",
            "Lista compra optimizada",
          ],
          button: {
            text: "Seleccionar",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-different-fresh-fruits-inside-plates-white-background-tropical-ripe-healthy-life-diet-exotic_140725-98389.jpg",
        },
      ]}
      title="Planes accesibles"
      description="Tu bienestar no tiene por qué ser caro"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ana García",
          handle: "@anag",
          testimonial: "¡Me encanta! Me ayuda a ahorrar y comer súper sano con cosas que encuentro en mi mercado local.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-charming-curly-hispanic-girl-cooking-her-kitchen-grates-cheese-grater_613910-4901.jpg",
        },
        {
          id: "t2",
          name: "Luis Pérez",
          handle: "@luisp",
          testimonial: "Por fin encontré algo que respeta mis costumbres andinas. Súper útil.",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-young-cheerful-girl-baking-kitchen-making-dough-holding-recipe-book-having-ideas_1258-198349.jpg",
        },
        {
          id: "t3",
          name: "Familia Ríos",
          handle: "@famrios",
          testimonial: "Comer sano en casa ahora es más divertido y organizado gracias a estos menús.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-kitchen_1303-4738.jpg",
        },
        {
          id: "t4",
          name: "Sofía López",
          handle: "@sofil",
          testimonial: "Ahorro mucho tiempo en la cocina con los menús personalizados.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-her-kitchen_329181-20396.jpg",
        },
        {
          id: "t5",
          name: "Diego Castro",
          handle: "@dcast",
          testimonial: "Excelente servicio, la lista de compras es un salvavidas total.",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-lunch-with-bulgur-meat-fresh-vegetables-fruit-pink-surface-fitness-healthy-lifestyle-concept-lunchbox-top-view_2829-6075.jpg",
        },
      ]}
      title="Lo que dicen nuestros usuarios"
      description="Historias de éxito desde toda Latinoamérica"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "¿Es realmente gratis?",
          content: "La versión básica es gratuita, con planes premium opcionales.",
        },
        {
          id: "q2",
          title: "¿Funciona en mi país?",
          content: "Sí, tenemos ingredientes adaptados para México, región Andina, Cono Sur y Caribe.",
        },
        {
          id: "q3",
          title: "¿Puedo descargar la lista?",
          content: "Sí, al crear tu menú semanal puedes descargar la lista de compras en PDF.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cheerful-mature-call-center-operator-looking-laptop-screen_74855-4013.jpg"
      title="Preguntas frecuentes"
      description="Todo lo que necesitas saber"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contacto"
      title="Comienza hoy tu plan"
      description="Recibe en tu correo semanalmente las mejores opciones para comer delicioso y sano."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-young-woman-looking-cooking-ingredients-kitchen-counter-making-notes-writing_1258-204678.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Inicio",
              href: "#hero",
            },
            {
              label: "Cómo funciona",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "Planes",
              href: "#pricing",
            },
            {
              label: "Privacidad",
              href: "#",
            },
          ],
        },
      ]}
      logoText="MenúLatam"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
