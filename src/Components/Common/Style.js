import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles,alignment} = attributes;

	const mainSl = `#${id}`;
	const wrapperSl = `${mainSl} .wrapper`; 
	const containerSl = `${wrapperSl} .container`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		

		${wrapperSl}{
			justify-content: ${alignment};

		
		}
		
		${containerSl}{
		${getBackgroundCSS(styles?.bg)}
		 padding:${getBoxCSS(styles?.padding.desktop)} ;
		 margin:${getBoxCSS(styles?.margin.desktop)} ;
		 max-width:${styles?.width?.desktop}
		 

		}


		${tabBreakpoint}{
			${containerSl}{
		 padding:${getBoxCSS(styles?.padding.tablet)};
		 margin:${getBoxCSS(styles?.margin.tablet)} ;
		  max-width:${styles?.width?.tablet}


			}
		
		}

		${mobileBreakpoint}{
		    ${containerSl}{
         padding:${getBoxCSS(styles?.padding.mobile)}};
		 margin:${getBoxCSS(styles?.margin.mobile)} ;
		  max-width:${styles?.width?.mobile};


	`}} />;
}
export default Style;