import { useState } from "react";
import FaqItem from "../../utils/FaqItem";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";


const Style1 = ({faqs,setAttributes,attributes,isView}) => {

  console.log(faqs?.faqItems);
    // const faqData = [
    //     {
    //       question: "What is BTCPayServer used for?",
    //       answer: "BTCPayServer is a self-hosted, open-source cryptocurrency payment processor that helps businesses accept Bitcoin payments without third-party involvement."
    //     },
    //     {
    //       question: "Is it possible to run BTCPayServer without technical knowledge?",
    //       answer: "Yes, many hosting services offer one-click deployments, so you can get started without deep technical skills."
    //     },
    //     {
    //       question: "Can I accept both Bitcoin and Lightning payments?",
    //       answer: "Absolutely! BTCPayServer supports both traditional Bitcoin on-chain payments and the Lightning Network."
    //     },
    //     {
    //       question: "Is there a transaction fee for using BTCPayServer?",
    //       answer: "No extra fees are charged by BTCPayServer itself. You only pay the standard network fees associated with Bitcoin transactions."
    //     },
    //     {
    //       question: "Does BTCPayServer integrate with online stores?",
    //       answer: "Yes, it supports plugins for popular e-commerce platforms like WooCommerce, Shopify (via third-party), and others."
    //     },
    //     {
    //       question: "How do I secure my BTCPayServer setup?",
    //       answer: "You can enhance security by keeping your server software up-to-date, using strong passwords, and running BTCPayServer behind a reverse proxy or firewall."
    //     }
    //   ];
      const [leftActiveIndex, setLeftActiveIndex] = useState(null);
const [rightActiveIndex, setRightActiveIndex] = useState(null);

const toggleLeftFaq = (index) => {
  setLeftActiveIndex(leftActiveIndex === index ? null : index);
};

const toggleRightFaq = (index) => {
  setRightActiveIndex(rightActiveIndex === index ? null : index);
};

  
        const {faqItems}=attributes;
      
          const [activeIndex, setActiveIndex] = useState(null);
        
          const toggleFaq = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
          };
          
    return (
       <div className="defaultThemeContainer">

        <div className="heading">
        {attributes?.options?.isShowButton &&
      (isView ?  (
        <a 
          href={faqs?.buttonLink} 
          target={attributes?.options?.isLinkTarget ? "_blank" : "_self"} 
          className="contact-btn"  rel="noreferrer"
        >
          <span  
            className="buttonIcon" 
            dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }} 
          ></span>
          <span>{faqs?.buttonText} </span>
          
        </a>
      ) : (
        <span className="contact-btn">
           <span 
            className="buttonIcon" 
            dangerouslySetInnerHTML={{ __html: faqs?.buttonIcon }} 
          ></span>
          <RichText
            value={faqs?.buttonText}
            onChange={(value) =>
              setAttributes({ faqs: updateData(faqs, value, "buttonText") })
            }
          />
         
        </span>
      ))
    }
    {isView? <h1 className="title style-3-title">{faqs?.title}</h1> :<RichText placeholder=" title Here..." value={faqs?.title} className="title style-3-title"  onChange={(value)=>{
                setAttributes({faqs:updateData(faqs,value,"title")})
               }}/>}
        </div>
       
         <div className="container">
            
            <div className="faq-wrapper">
              <div className="faq-left">
             
                 {/* {isView? <h1 className="title style-3-title">{faqs?.title}</h1> :<RichText placeholder=" title Here..." value={faqs?.title} className="title style-3-title"  onChange={(value)=>{
                setAttributes({faqs:updateData(faqs,value,"title")})
               }}/>}
                
               {isView? <p className="description">{faqs?.description}</p> :<RichText placeholder="Enter Your Description Here..." value={faqs?.description}  className="description" onChange={(value)=>{
                setAttributes({faqs:updateData(faqs,value,"description")})
               }} />} */}
   <div className="custom-shadow" style={{backgroundColor:"#FFFFFF",padding:"20px",borderRadius:"20px"}}>
    <h5 style={{color:"#192534",fontWeight:"600", fontSize:"28px",textTransform:"capitalize"}}>{faqs?.faqItems?.titleOne}</h5>
   {faqs?.faqItems?.general.map((item, index) => (
  <FaqItem
    key={index}
    isView={isView}
    index={index}
    question={item.question}
    answer={item.answer}
    isActive={leftActiveIndex === index}
    onClick={() => toggleLeftFaq(index)}
    attributes={attributes}
    setAttributes={setAttributes}
    faqCategory='general'

  />
))}
   </div>
               
    
    
              </div>
    
              <div className="faq-right">
            <div className="custom-shadow" style={{backgroundColor:"#FFFFFF",padding:"20px",borderRadius:"20px",overflow:"hidden"}}>
            <h5 style={{color:"#192534",fontWeight:"600", fontSize:"28px",textTransform:"capitalize"}}>{faqs?.faqItems?.titleTwo}</h5>
            {faqs?.faqItems?.generalTwo.map((item, index) => (
        <FaqItem isView={isView}
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleFaq(index)}
          attributes={attributes}
          setAttributes={setAttributes}
          faqCategory='generalTwo'
        />
      ))}
            </div>
            <div className="custom-shadow" style={{backgroundColor:"#FFFFFF",padding:"20px",borderRadius:"20px",overflow:"hidden",marginTop:"20px"}}>
            <h5 style={{color:"#192534",fontWeight:"600", fontSize:"28px",textTransform:"capitalize"}}>{faqs?.faqItems?.titleThree}</h5>
            {faqs?.faqItems?.support.map((item, index) => (
        <FaqItem isView={isView}
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isActive={rightActiveIndex === index}
          onClick={() => toggleRightFaq(index)}
          attributes={attributes}
          setAttributes={setAttributes}
          faqCategory='support'
        />
      ))}
            </div>
    </div>
            </div>
          </div>
       </div>
    );
};

export default Style1;