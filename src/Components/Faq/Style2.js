
import { useState } from "react";
import FaqItem from "../../utils/FaqItem";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../utils/functions";


const Style2 = ({faqs,setAttributes,attributes,isView}) => {
    const words = faqs?.title.split(" ");
    const lastWord = words.pop()
      const [activeIndex, setActiveIndex] = useState(null);
    
      const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return (
        <div className="container">
        <div className="faq-wrapper">
          <div className="faq-left">
            <h1 className="title">{words.join(" ")} <span className="highlight">{lastWord}</span></h1>
            
           {isView? <p className="description">{faqs?.description}</p> :<RichText placeholder="Enter Your Description Here......" value={faqs?.description}  className="description" onChange={(value)=>{
            setAttributes({faqs:updateData(faqs,value,"description")})
           }} />}
                  <a href="#" className="contact-btn" > <span>{faqs?.buttonText}</span> <span><svg 
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
  {faqs.faqItems.map((item, index) => (
    <FaqItem isView={isView}
      key={index}
      index={index}
      question={item.question}
      answer={item.answer}
      isActive={activeIndex === index}
      onClick={() => toggleFaq(index)}
      attributes={attributes}
      setAttributes={setAttributes}
    />
  ))}
</div>
        </div>
      </div>
    );
};

export default Style2;