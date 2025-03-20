
import {TextControl} from "@wordpress/components"
const FaqSetting = (props) => {
    const {attributes,setAttributes,index}=props;
    const {faqItems} =attributes
    const item = faqItems[index];
    
    return (
        <div>
            <TextControl label="Question" value={item.question}/>
            <TextControl label="Answer" value={item.answer}/>
            
        </div>
    );
};

export default FaqSetting;
