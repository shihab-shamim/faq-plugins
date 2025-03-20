import { __ } from '@wordpress/i18n';

import { Flex, FormToggle, Panel, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { themesOption } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import FaqSetting from '../../../Faq/FaqSetting';


const General = ({ attributes, setAttributes }) => {
  const { options,faqs } = attributes;
  const {selectedTheme}=options;

  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Themes', 'b-blocks')} initialOpen={false}>
      <SelectControl
        label={__('Select A Style', 'b-blocks')}
        labelPosition='left'
        value={selectedTheme}
        options={themesOption}
        // onChange={(v) => setAttributes({ purposeType: updateData(purposeType, v) })}
        onChange={(value) => {
          setAttributes({ options: updateData(options, { selectedTheme: value }) });
        }}
      />



    </PanelBody>


    <PanelBody className='bPlPanelBody' title={__('FAQS!', 'b-blocks')} initialOpen={false}>

      <ItemsPanel newItem={{question: "New Question?",
							answer: "New Answer."}} design="sortable"  attributes={attributes} setAttributes={setAttributes} arrKey="faqItems" itemLabel="FAQ" ItemSettings={FaqSetting}  />
    </PanelBody>
 
    <PanelBody className='bPlPanelBody' title={__('Layouts' , 'b-blocks')} initialOpen={false}>
      <TextControl  placeholder='Title...' label="Title" value={faqs?.title} onChange={(value)=>{setAttributes({faqs:updateData(faqs,value,"title")})}}/>
      <TextControl placeholder='Description...' label="Descriptions" value={faqs?.description} onChange={(value)=>{setAttributes({faqs:updateData(faqs,value,"description")})}}/>
    
       <Label>Show Button <FormToggle
            checked={ options?.isShowButton }
            onChange={ (e) =>setAttributes({options:{...options, isShowButton:!options?.isShowButton }}) }
        /></Label>

       { options?.isShowButton && <> <TextControl value={faqs?.buttonText} label="Button Text"  onChange={(value)=>setAttributes({faqs:updateData(faqs,value,"buttonText")})} />
        <TextControl value={faqs?.buttonLink} label="Button Link"  onChange={(value)=>setAttributes({faqs:updateData(faqs,value,"buttonLink")})} />
        <Label>Open In New Tab <FormToggle
            checked={ options?.isLinkTarget }
            onChange={ (e) =>setAttributes({options:{...options, isLinkTarget:!options?.isLinkTarget }}) }
        /></Label>
</>}
       

    </PanelBody>
   </>
  )
}

export default General