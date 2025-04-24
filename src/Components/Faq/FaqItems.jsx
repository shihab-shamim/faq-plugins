import { TextareaControl, TextControl } from "@wordpress/components";
import { updateData } from "../../utils/functions";

const FaqItems = ({ item, index, setAttributes, type, attributes }) => {
  const { faqs } = attributes;
  const items = faqs?.faqItems[type];
  const handleDelete = () => {
    const updatedItems = items.filter((_, ind) => ind !== index);
    setAttributes({ faqs: updateData(faqs, updatedItems, "faqItems", type) });
  };
  const handleCopy = (index) => {
    const updatedItems = [
      ...items.slice(0, index + 1),
      item,
      ...items.slice(index + 1),
    ];

    setAttributes({ faqs: updateData(faqs, updatedItems, "faqItems", type) });
  };
  return (
    <div>
      <TextControl
        label="Question"
        value={item.question}
        onChange={(value) => {
          setAttributes({
            faqs: updateData(faqs, value, "faqItems", type, index, "question"),
          });
        }}
      />
      <TextareaControl
        label="Answer"
        value={item.answer}
        onChange={(value) => {
          setAttributes({
            faqs: updateData(faqs, value, "faqItems", type, index, "answer"),
          });
        }}
      />
      <div className="button-container">
        <button onClick={() => handleDelete()} className="btn btn-delete">
          <div className="icon-delete">
            <span className="delete-line delete-line-1"></span>
            <span className="delete-line delete-line-2"></span>
          </div>
          <span className="btn-text">Delete</span>
        </button>

        <button onClick={() => handleCopy()} className="btn btn-copy">
          <div className="icon-copy">
            <span className="copy-paper copy-paper-back"></span>
            <span className="copy-paper copy-paper-front"></span>
          </div>
          <span className="btn-text">Copy</span>
        </button>
      </div>
    </div>
  );
};

export default FaqItems;
