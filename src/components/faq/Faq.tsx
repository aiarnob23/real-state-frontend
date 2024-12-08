import { useState } from "react";

export default function About() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index: any) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I start the process of buying a property?",
      answer:
        "To start the process of buying a property, first assess your needs and budget. Research the areas you're interested in, and consult with a real estate agent to understand the market and find the right property for you. Once you’ve found a property, you’ll typically need to secure financing through a mortgage and then make an offer on the property.",
    },
    {
      question: "What should I look for when buying a home?",
      answer:
        "When buying a home, consider factors such as location, price, condition of the property, and future resale value. Check for any needed repairs, the neighborhood’s amenities, proximity to schools, work, and transportation, and ensure it meets your long-term goals and lifestyle needs. Don't forget to assess the potential for growth in the area.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "The down payment required typically ranges from 5% to 20% of the property’s purchase price. It varies depending on your lender and the type of mortgage you qualify for. Some government-backed loans may offer lower down payment options, but it’s essential to save enough to reduce your mortgage balance and avoid private mortgage insurance (PMI).",
    },
    {
      question: "Do you offer property management services?",
      answer:
        "Yes, we offer property management services for our clients. Our team handles everything from finding tenants to managing maintenance requests, ensuring your property is well-maintained and rented out. We aim to provide a hassle-free experience so you can focus on your investment without worrying about day-to-day operations.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we partner with several banks to offer competitive financing options for our clients. Our team will assist you in exploring the best options available for your property purchase.",
    },
    {
      question: "How do I get started with a property investment?",
      answer:
        "To start investing, you can browse our listings or contact our team for personalized advice. We will guide you through the entire process, from selecting the right property to finalizing the investment.",
    },
    {
      question: "What makes Phoenix different from other developers?",
      answer:
        "At Phoenix, we prioritize innovation, sustainability, and excellence. Our properties are designed with the future in mind, combining cutting-edge technology, quality materials, and a commitment to creating vibrant, thriving communities.",
    },
  ];

  return (
    <div className="max-w-[1280px] mt-20 container mx-auto">
      {/* FAQ Section */}
      <div className="mt-[56px]">
        <h3 className="text-[52px] font-medium leading-[63px] text-center mb-12">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-[#E0E0E0]">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleQuestion(index)}
              >
                <h4 className="text-[24px] font-medium">{faq.question}</h4>
                <svg
                  className={`transition-transform duration-300 ${
                    activeQuestion === index ? "rotate-180" : ""
                  }`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#51525C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {activeQuestion === index && (
                <p className="text-[#70707B] text-[18px] leading-[28px] px-6 py-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
