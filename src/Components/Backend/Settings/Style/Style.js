// import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  // __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as  UnitControl ,  __experimentalBoxControl as Boxcontrol
} from "@wordpress/components";
import {  Background, BoxControl, ColorControl, ColorsControl, Device, IconLibrary, Label, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes,device }) => {
  const { styles,options} = attributes;


// console.log(options?.selectedTheme);


  return (
    <>
  


      <PanelBody
      
        className="bPlPanelBody"
        title={__(`${"Wrapper"}`, "b-blocks")}
        initialOpen={false}
      >
          <PanelRow><Label>{__("Width","b-blocks")}</Label> <Device/></PanelRow>

        <UnitControl value={styles?.width[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"width",device)})}  />

        
        <Background  isImage={false} value={styles?.bg}  onChange={(value)=>setAttributes({styles:updateData(styles,value,"bg")})} />


          
          <PanelRow><Label>{__("Padding","b-blocks")}</Label> <Device/></PanelRow>

          <BoxControl values={styles?.padding[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"padding",device)})} />

          <PanelRow><Label>{__("Margin","b-blocks")}</Label> <Device/></PanelRow>

          <BoxControl values={styles?.margin[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"margin",device)})} />

            <div className="border-radius">
            <Boxcontrol label={__("Radius","b-blocks")} values={styles?.radius} onChange={value=>setAttributes({styles:updateData(styles,value,"radius")})} />


            </div>


       
        
      </PanelBody>


      <PanelBody className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}>

          <Typography value={styles?.title?.typho} onChange={value=>setAttributes({styles:updateData(styles,value,"title","typho")})} />
  <ColorControl value={styles?.title?.color} onChange={value=>setAttributes({styles:updateData(styles,value,"title","color")})}   />

 { options?.selectedTheme ==="theme2" && <Background label={__("High Light Color","b-blocks")} isImage={false}  value={styles?.title?.highlightColor} onChange={value=>setAttributes({styles:updateData(styles,value,"title","highlightColor")})}  />}


    </PanelBody>
    
    <PanelBody  className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}>

          <Typography  value={styles?.description?.typho}  onChange={value=>setAttributes({styles:updateData(styles,value,"description","typho")})} />

            <ColorControl value={styles?.description?.color} onChange={value=>setAttributes({styles:updateData(styles,value,"description","color")})} />

    </PanelBody>
    
    { options?.isShowButton && <PanelBody  className="bPlPanelBody"
        title={__("Button", "b-blocks")}
        initialOpen={false}>

          <Typography value={styles?.button?.typho} onChange={value=>setAttributes({styles:updateData(styles,value,"button","typho")})}  />


          <ColorsControl value={styles?.button?.colors}  onChange={value=>setAttributes({styles:updateData(styles,value,"button","colors")})} />

          <BoxControl style={{marginTop:"15px"}} label={__("Padding","b-blocks")} values={styles?.button?.padding}  onChange={value=>setAttributes({styles:updateData(styles,value,"button","padding")})} />
            
          <BoxControl style={{marginTop:"15px"}} label={__("Radius","b-blocks")} values={styles?.button?.radius}  onChange={value=>setAttributes({styles:updateData(styles,value,"button","radius")})} />


      </PanelBody>}

      <PanelBody
      
      className="bPlPanelBody"
        title={__("Question", "b-blocks")}
        initialOpen={false}>
          <Typography value={styles?.question?.typho}  onChange={v=>setAttributes({styles:updateData(styles,v,"question","typho")})} />

    <ColorsControl value={styles?.question?.colors} onChange={value=>setAttributes({styles:updateData(styles,value,"question","colors")})}  />

      <BoxControl label={__("Padding","b-blocks")} values={styles?.question?.padding}  onChange={(value)=>setAttributes({styles:updateData(styles,value,"question","padding")})} />

          

       <Label> Gap: <UnitControl value={styles?.question?.gap}  onChange={value=>setAttributes({styles:updateData(styles,value,"question","gap")})} /></Label>

       <IconLibrary label={__("Icon","b-blocks")}  value={options?.icon}  onChange={value=>setAttributes({options:updateData(options,value,"icon")})} />


           { options?.selectedTheme==="theme2"?"" : <ColorsControl label={__("Active Colors","b-blocks")} value={styles?.question?.active} onChange={value=>setAttributes({styles:updateData(styles,value,"question","active")})} />}
 
      </PanelBody>

      <PanelBody 
      className="bPlPanelBody"
      title={__("Answer", "b-blocks")}
      initialOpen={false}>
        <Typography value={styles?.answer?.typho}  onChange={v=>setAttributes({styles:updateData(styles,v,"answer","typho")})} />

        <ColorsControl  value={styles?.answer?.colors} onChange={value=>setAttributes({styles:updateData(styles,value,"answer","colors")})}  /> 

        <BoxControl style={{marginTop:"15px"}} label={__("Padding","b-blocks")} values={styles?.answer?.padding}  onChange={(value)=>setAttributes({styles:updateData(styles,value,"answer","padding")})} />
        <BoxControl style={{marginTop:"15px"}} label={__("Radius","b-blocks")} values={styles?.answer?.radius}  onChange={(value)=>setAttributes({styles:updateData(styles,value,"answer","radius")})} />


      </PanelBody> 
    </>
  );
};

export default Style;  

