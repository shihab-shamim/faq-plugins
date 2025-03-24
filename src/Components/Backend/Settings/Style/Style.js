// import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  // __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as  UnitControl
} from "@wordpress/components";
import { Background, BoxControl, Device, Label } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes,device }) => {
  const { styles } = attributes;




  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("ContainerWrapper", "b-blocks")}
        initialOpen={false}
      >
          <PanelRow><Label>{__("Width","b-blocks")}</Label> <Device/></PanelRow>

        <UnitControl value={styles?.width[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"width",device)})}  />

        <Background labe="Background Color" onChange={(value)=>setAttributes({styles:updateData(styles,value,"bg")})} />

          
          <PanelRow><Label>{__("Padding","b-blocks")}</Label> <Device/></PanelRow>

          <BoxControl values={styles?.padding[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"padding",device)})} />

          <PanelRow><Label>{__("Margin","b-blocks")}</Label> <Device/></PanelRow>

          <BoxControl values={styles?.margin[device]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"margin",device)})} />
       
        
      </PanelBody>
    </>
  );
};

export default Style;
