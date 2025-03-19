import { useState } from "react";
import Style2 from "./Style2";

// FAQ Item Component
const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <div className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <button className="toggle-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline
              points={isActive ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
            ></polyline>
          </svg>
        </button>
      </div>
      <div className="faq-answer" style={{ maxHeight: isActive ? "300px" : "0" }}>
        {answer}
      </div>
    </div>
  );
};

// Main FAQ Component
const Faq = ({ isView, setAttributes, attributes }) => {
  const { options,faqs} = attributes;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "1",
      title: "General FAQ",
      items: [
        { question: "Does BTCPayServer cost extra?", answer: "No, BTCPayServer is completely free and open-source software." },
        { question: "Does my Voltage Lightning Node connect to BTC Server automatically?", answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically." },
        { question: "Can I accept payments on chain?", answer: "Yes, you can accept both on-chain and Lightning payments through the platform." },
        { question: "What is BTC Pay Server?", answer: "BTCPayServer is a self-hosted, open-source cryptocurrency payment processor." },
        { question: "How to handle my data?", answer: "We prioritize your data security with strong encryption and privacy practices." },
        { question: "How does it generate responses?", answer: "BTCPayServer generates responses based on node interactions and blockchain transactions." },
      ],
    },
    {
      category: "2",
      title: "General FAQ",
      items: [
        { question: "Does my Voltage Lightning Node connect to BTC Server?", answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically." },
        { question: "Can I accept payments on chain?", answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically." },
        { question: "What is BTC Pay Server?", answer: "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically." },
      ],
    },
    {
      category: "3",
      title: "Support",
      items: [
        { question: "What is BTC Pay Server?", answer: "BTCPayServer is a self-hosted, open-source cryptocurrency payment processor." },
        { question: "How do I get started?", answer: "Simply sign up for an account and follow our step-by-step setup guide to get started." },
        { question: "Is technical support available?", answer: "Yes, our support team is available 24/7 to help you with any technical issues." },
      ],
    },
  ];

  return (
    <div className="wrapper">
      {/* Theme 1 */}
      {options.selectedTheme === "theme1" && (
        <div className="container">
          <div className="header">
            <span className="badge">FAQ</span>
            <h1>Have Any Questions?</h1>
          </div>

          <div className="faq-container">
            <div className="faq-column-1">
              {/* Display category 1 in its own column */}
              {faqData
                .filter((section) => section.category === "1")
                .map((section, sectionIndex) => (
                  <div key={sectionIndex} className="faq-column">
                    <h2>{section.title}</h2>
                    {section.items.map((item, index) => (
                      <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isActive={activeIndex === `${section.category}-${index}`}
                        onClick={() => toggleFaq(`${section.category}-${index}`)}
                      />
                    ))}
                  </div>
                ))}
            </div>

            <div className="faq-column-2">
              {/* Display categories 2 and 3 in the second column */}
              {faqData
                .filter((section) => section.category !== "1")
                .map((section, sectionIndex) => (
                  <div key={sectionIndex} className="faq-column">
                    <h2>{section.title}</h2>
                    {section.items.map((item, index) => (
                      <FaqItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isActive={activeIndex === `${section.category}-${index}`}
                        onClick={() => toggleFaq(`${section.category}-${index}`)}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Theme 2 */}
      {/* {options.selectedTheme === "theme2" && (
        <div className="container">
          <div className="faq-wrapper">
            <div className="faq-left">
              <h1 className="title">Frequently asked <span className="highlight">Questions</span></h1>
              <p className="description">Discover clarity and insights as we unravel answers to your questions.</p>
                    <a href="#" className="contact-btn" > <span>Contact Us Now </span> <span><svg 
        stroke="currentColor" 
        fill="currentColor" 
        strokeWidth="0" 
        viewBox="0 0 16 16" 
        height="20px" 
        width="20px" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path 
            fillRule="evenodd" 
            d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" 
            clipRule="evenodd" 
        />
        <path 
            fillRule="evenodd" 
            d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" 
            clipRule="evenodd" 
        />
        </svg></span>
        </a>
            </div>

            <div className="faq-right">
              {faqData.map((section, sectionIndex) =>
                section.items.map((item, index) => (
                  <FaqItem
                    key={`${sectionIndex}-${index}`}
                    question={item.question}
                    answer={item.answer}
                    isActive={activeIndex === `${section.category}-${index}`}
                    onClick={() => toggleFaq(`${section.category}-${index}`)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )} */}
      {options.selectedTheme === "theme2" && <Style2 isView={isView} attributes={attributes} setAttributes={setAttributes} faqData={faqData} faqs={faqs} />}

      {/* Theme 3 */}
      {options.selectedTheme === "theme3" && <p>Theme 3</p>}
    </div>
  );
};

export default Faq;
