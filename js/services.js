const services = [
  {
    id: 1,
    title: "Digestive Issues",
    description: "We help identify and treat common digestive problems such as bloating, heartburn, and irregular digestion through personalized care and nutrition advice.",
    icon: "ri-lungs-line"
  },
  {
    id: 2,
    title: "Hormonal Health",
    description: "Our approach focuses on balancing hormones naturally to improve energy, sleep quality, and overall well-being for both men and women.",
    icon: "ri-drag-drop-line"
  },
  {
    id: 3,
    title: "Mental Well-being",
    description: "We provide support for stress management, emotional balance, and mindfulness practices to help you achieve better mental clarity and peace.",
    icon: "ri-brain-line"
  },
  {
    id: 4,
    title: "Pediatric Care",
    description: "We offer gentle and holistic healthcare for children, supporting their growth, immunity, and overall wellness from infancy to adolescence.",
    icon: "ri-bear-smile-line"
  },
  {
    id: 5,
    title: "Autoimmune & Inflammation",
    description: "Our team works to identify root causes of inflammation and autoimmune disorders, developing strategies to reduce symptoms and improve long-term health.",
    icon: "ri-fire-line"
  },
  {
    id: 6,
    title: "Heart Health",
    description: "We provide guidance on nutrition, lifestyle, and prevention strategies to support a strong and healthy cardiovascular system.",
    icon: "ri-heart-pulse-line"
  }
];



const generateServiceCard = (service) => {
  return `
    <div class="bg-white shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer rounded-lg overflow-hidden">
      <div class="p-6 text-left">
        <i class="${service.icon} text-5xl text-primary-green mb-4 block"></i>
        <h3 class="text-2xl mb-4 font-bold">${service.title}</h3>
        <p class="text-base text-gray-paragraph">${service.description}</p>
      </div>
    </div>
  `;
};


const servicesCards = document.getElementById("service-cards");

servicesCards.innerHTML = services.map((service) => generateServiceCard(service)).join("");
