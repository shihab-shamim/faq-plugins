import { RichText } from "@wordpress/block-editor";
import { updateData } from "./functions";

const FaqItem = ({ question, answer, isActive, onClick,attributes,setAttributes,isView,index}) => {
    const {options,faqItems}=attributes;
  return (
    <div  className={`faq-item ${isActive ? "active" : ""}`}>
      <div  className="faq-question" onClick={onClick}> 
        { isView? <span className="question">{question}</span>: <RichText placeholder="Enter Your Questions Here..." className="question" value={question} onChange={(value)=>{
            setAttributes({faqItems:updateData(faqItems,value,index,"question")})
        }} />
    }
        <button className="toggle-btn">
        <span className="icon" dangerouslySetInnerHTML={{ __html: options?.icon }}></span>


        </button>
      </div>
      <div className="faq-answer" style={{ maxHeight: isActive ? "400px" : "0",  padding:isActive?"10px 10px":"0px 10px"}}>
        { isView? <span className="faq-answer-dec">{answer}</span>:<RichText placeholder="Enter Your Answer Here..." className="faq-answer-dec" value={answer} onChange={(value)=>{
            setAttributes({faqItems:updateData(faqItems,value,index,"answer")})
        }}  />}
      </div>
    </div> 
  );
}; 
export default FaqItem;

