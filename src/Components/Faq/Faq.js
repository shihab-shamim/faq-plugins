import Style2 from "./Style2";
import Style3 from "./Style3";
import Style1 from "./Style1";

const Faq = ({ isView, setAttributes, attributes }) => {
  const { options, faqs } = attributes;

  const faqData = [
    {
      category: "1",
      title: "General FAQ",
      items: [
        {
          question: "Does BTCPayServer cost extra?",
          answer:
            "No, BTCPayServer is completely free and open-source software.",
        },
        {
          question:
            "Does my Voltage Lightning Node connect to BTC Server automatically?",
          answer:
            "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically.",
        },
        {
          question: "Can I accept payments on chain?",
          answer:
            "Yes, you can accept both on-chain and Lightning payments through the platform.",
        },
        {
          question: "What is BTC Pay Server?",
          answer:
            "BTCPayServer is a self-hosted, open-source cryptocurrency payment processor.",
        },
        {
          question: "How to handle my data?",
          answer:
            "We prioritize your data security with strong encryption and privacy practices.",
        },
        {
          question: "How does it generate responses?",
          answer:
            "BTCPayServer generates responses based on node interactions and blockchain transactions.",
        },
      ],
    },
    {
      category: "2",
      title: "General FAQ",
      items: [
        {
          question: "Does my Voltage Lightning Node connect to BTC Server?",
          answer:
            "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically.",
        },
        {
          question: "Can I accept payments on chain?",
          answer:
            "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically.",
        },
        {
          question: "What is BTC Pay Server?",
          answer:
            "Yes. After you deploy your Lightning Node, you can click the BTCPayServer icon on the node dashboard to easily start your BTCPayServer which connects to your node automatically.",
        },
      ],
    },
    {
      category: "3",
      title: "Support",
      items: [
        {
          question: "What is BTC Pay Server?",
          answer:
            "BTCPayServer is a self-hosted, open-source cryptocurrency payment processor.",
        },
        {
          question: "How do I get started?",
          answer:
            "Simply sign up for an account and follow our step-by-step setup guide to get started.",
        },
        {
          question: "Is technical support available?",
          answer:
            "Yes, our support team is available 24/7 to help you with any technical issues.",
        },
      ],
    },
  ];

  return (
    <div className="wrapper">
      {options.selectedTheme === "theme1" && (
        <Style1
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          faqData={faqData}
          faqs={faqs}
        />
      )}

      {options.selectedTheme === "theme2" && (
        <Style2
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          faqData={faqData}
          faqs={faqs}
        />
      )}

      {options.selectedTheme === "theme3" && (
        <Style3
          isView={isView}
          attributes={attributes}
          setAttributes={setAttributes}
          faqData={faqData}
          faqs={faqs}
        />
      )}
    </div>
  );
};

export default Faq;
