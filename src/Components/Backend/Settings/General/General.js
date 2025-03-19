import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { themesOption } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {
  const { options } = attributes;
  const {selectedTheme}=options;

  

  return (
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
  )
}

export default General