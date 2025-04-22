import { __ } from '@wordpress/i18n';

import {  FormToggle, PanelBody, PanelRow, SelectControl, TextControl,__experimentalUnitControl as UnitControl } from '@wordpress/components';
import { contentAlignment, themesOption } from '../../../../utils/options';
import { themeSwitch, updateData } from '../../../../utils/functions';
import { BButtonGroup, Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import FaqSetting from '../../../Faq/FaqSetting';
import FaqItems from '../../../Faq/FaqItems';




const General = ({ attributes, setAttributes,device}) => {
  const { options,faqs,styles} = attributes;
  const {selectedTheme}=options;

  const getValueByPath = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  const general =getValueByPath(attributes,"faqs.faqItems.general")
  const generalTwo =getValueByPath(attributes,"faqs.faqItems.generalTwo")
  const support =getValueByPath(attributes,"faqs.faqItems.support")

  // console.log(general,generalTwo,support);

  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Themes', 'b-blocks')} initialOpen={false}>
      <SelectControl
        label={__('Select A Style', 'b-blocks')}
        labelPosition='left'
        value={selectedTheme}
        options={themesOption}
       
        onChange={(value) => {
          setAttributes(themeSwitch(value,attributes));
        }}
      />



    </PanelBody>


    <PanelBody  >

      
      { options?.selectedTheme ==="theme1"?<>
            <PanelBody className='bPlPanelBody' title={__(`${faqs?.faqItems?.titleOne}`, 'b-blocks')} initialOpen={false}>
              <TextControl label="Title" value={faqs?.faqItems?.titleOne} onChange={value=>{
                setAttributes({faqs:updateData(faqs,value,"faqItems","titleOne")})
              }}   />
           {general.map((item,index)=><FaqItems item={item} setAttributes={setAttributes} index={index} attributes={attributes} type="general"  key={index} />)}

            </PanelBody>

      </> :<ItemsPanel newItem={{question: "New Question?",
							answer: "New Answer."}} design="sortable"  attributes={attributes} setAttributes={setAttributes} arrKey="faqItems" itemLabel="FAQ" ItemSettings={FaqSetting}  />
    }
              
    </PanelBody>
 
    <PanelBody className='bPlPanelBody' title={__('Layout' , 'b-blocks')} initialOpen={false}>
      <TextControl  placeholder='Title...' label="Title" value={faqs?.title} onChange={(value)=>{setAttributes({faqs:updateData(faqs,value,"title")})}}/>
      {options?.selectedTheme==="theme1"?"":<TextControl placeholder='Description...' label="Descriptions" value={faqs?.description} onChange={(value)=>{setAttributes({faqs:updateData(faqs,value,"description")})}}/>}
    
   <Label>Show Button <FormToggle
            checked={ options?.isShowButton }
            onChange={ () =>setAttributes({options:{...options, isShowButton:!options?.isShowButton }}) }
        /></Label>

       { options?.isShowButton && <> <TextControl value={faqs?.buttonText} label="Button Text"  onChange={(value)=>setAttributes({faqs:updateData(faqs,value,"buttonText")})} />
        <TextControl value={faqs?.buttonLink} label="Button Link"  onChange={(value)=>setAttributes({faqs:updateData(faqs,value,"buttonLink")})} />
        <Label>Open In New Tab <FormToggle
            checked={ options?.isLinkTarget }
            onChange={ () =>setAttributes({options:{...options, isLinkTarget:!options?.isLinkTarget }}) }
        /></Label>
</>}

      <PanelRow>
      <Label>Gap</Label>
        
      <Device/>

      </PanelRow>
      <UnitControl value={styles?.gap[device]}  onChange={value=>setAttributes({styles:updateData(styles,value,"gap",device)})} />


       <BButtonGroup style={{marginTop:"15px"}} label={__("Alignment","b-blocks")} options={contentAlignment} value={options?.contentAlignment}  onChange={(value)=>setAttributes({options:updateData(options,value,"contentAlignment")})} />
      

    </PanelBody>
   </>
  )
}

export default General;

