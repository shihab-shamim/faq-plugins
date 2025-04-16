import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};



export const themeSwitch=(theme="theme2",attributes)=>produce(attributes,(draft)=>{

  draft["options"]["selectedTheme"]=theme

  switch(theme){
    case "theme1":
      draft["options"]["isShowButton"]=false

    break;

    case "theme2":
      draft["options"]["isShowButton"]=true
      draft["styles"]["bg"]={type:"solid",color:"#000000",gradient: "linear-gradient(135deg,rgb(34,23,23) 0%,rgb(13,13,15) 100%)"};
      draft["styles"]["title"]["color"]="rgba(252, 252, 253, 1)";
      draft["styles"]["button"]["colors"]={color: "#000000",bgType: "solid",bg: "#c5fb00"}
      draft["styles"]["title"]["color"]="rgba(252, 252, 253, 1)"
      draft["styles"]["description"]["color"]="rgba(252, 252, 253, 0.7)"
    
      draft["faqs"]={title: "Frequently asked Questions",
        buttonText: "Contact Us Now",
        description: "Discover clarity and insights as we unravel answers to your questions",
        buttonIcon: "<svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z' clipRule='evenodd'/><path fillRule='evenodd' d='M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z' clipRule='evenodd'/></svg>",
        buttonLink: "#"}
      draft["styles"]["button"]["padding"]={top: '10px',right: '20px', bottom: '10px',left: '20px'};
      draft["styles"]["button"]["radius"]= { top: '8px',right: '8px',bottom: '8px',left: '8px'};
      draft["styles"]["button"]["typho"]= {fontFamily: "Archivo",fontCategory: "sans-serif",fontWeight: 600,fontVariant: "regular",isUploadFont: true,fontSize: { desktop: 18,tablet:18, mobile: 18},fontStyle: "normal",textTransform: "none", textDecoration: "none", lineHeight: "1.35", letterSpace: "0px" };
      draft["styles"]["title"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 700,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 48,
          tablet: 48,
          mobile: 25
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      };
      draft["styles"]["description"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 17,
          tablet: 17,
          mobile: 17
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }




    break;
     
    case "theme3":
      draft["options"]["isShowButton"]=true
      draft["styles"]["bg"]={type:"solid",color:"#ffffff",gradient: "linear-gradient(to right, #ffffff, #007bff)"};
      draft["styles"]["title"]["color"]="#192534";
      draft["styles"]["description"]["color"]="#616A72";
      draft["styles"]["title"]["color"]="#192534"
      draft["styles"]["title"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 700,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 48,
          tablet: 48,
          mobile: 25
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }
      draft["styles"]["description"]["typho"]={
        fontFamily: "Archivo",
        fontCategory: "sans-serif",
        fontWeight: 400,
        fontVariant: "regular",
        isUploadFont: true,
        fontSize: {
          desktop: 17,
          tablet: 17,
          mobile: 17
        },
        fontStyle: "normal",
        textTransform: "none",
        textDecoration: "none",
        lineHeight: "1.35",
        letterSpace: "0px"
      }


      draft["styles"]["button"]["colors"]={color: "#E8DFFF",bgType: "solid",bg: "#451CB3"};
      draft["styles"]["button"]["padding"]={top: '4px',right: '8px', bottom: '4px',left: '8px'};
      draft["styles"]["button"]["radius"]= { top: '0px',right: '0px',bottom: '0px',left: '0px'};
      draft["styles"]["button"]["typho"]= {fontFamily: "Archivo",fontCategory: "sans-serif",fontWeight: 600,fontVariant: "regular",isUploadFont: true,fontSize: { desktop: 14,tablet:14, mobile: 14},fontStyle: "normal",textTransform: "none", textDecoration: "none", lineHeight: "1.35", letterSpace: "0px" };

      draft["faqs"]={title: "General FAQ",
        buttonText: "Support",
        description: "We’re building a company that recognizes how, when, and where our Paddlers do their best work.",
        buttonIcon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z\" opacity=\".99\"></path><path fill=\"currentColor\" d=\"M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413\" opacity=\".5\"></path></svg>",
        buttonLink: "#"}




    break;


  }
})