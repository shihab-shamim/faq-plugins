import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS, } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles,alignment} = attributes;

	const mainSl = `#${id}`;
	const wrapperSl = `${mainSl} .wrapper`; 
	const containerSl = `${wrapperSl} .container`;
	const faqWrapperSl = `${containerSl} .faq-wrapper`;
	const faqRightrSl = `${faqWrapperSl} .faq-right`;
	const faqItemrSl = `${faqRightrSl} .faq-item`;
	const faqAnswerSl = `${faqRightrSl} .faq-answer`;
	const faqQuestionSl = `${faqItemrSl} .faq-question`;
	const toggleBtnSl = `${faqQuestionSl} .toggle-btn`;
	const iconSl = `${toggleBtnSl} .icon`;
	const questionSl = `${faqQuestionSl} .question`;
	const faqLefttrSl = `${faqWrapperSl} .faq-left`;
	const faqLitlerSl = `${faqLefttrSl} .title`;
	const faqhighlighterSl = `${faqLefttrSl} .highlight`;
	const faqDescriptionrSl = `${faqLefttrSl} .description`;

	// console.log(styles?.title?.highlightColor);
	// background:${styles?.title?.highlightColor?.gradient};

	// const highLightColor = (value)=>{
	// 	if(value?.type ==="solid"){
	// 		const color=`background-color:${value?.color}`
	// 		return color;
	// 	}
	// 	if(value?.type ==="gradient"){
	// 		const color =`background:${styles?.title?.highlightColor?.gradient}`
	// 		return color;
	// 	}

	// }




	return (
		<>
		<style dangerouslySetInnerHTML={{
			__html: `

	
			
	
			${getTypoCSS('', styles?.question?.typho)?.googleFontLink}
			${getTypoCSS('', styles?.title?.typho)?.googleFontLink}
			${getTypoCSS('', styles?.description?.typho)?.googleFontLink}
	
	
			${getTypoCSS(questionSl, styles?.question?.typho)?.styles}
			${getTypoCSS(faqLitlerSl, styles?.title?.typho)?.styles}
			${getTypoCSS(faqhighlighterSl, styles?.title?.typho)?.styles}
			${getTypoCSS(faqDescriptionrSl, styles?.description?.typho)?.styles}

			


			
			${faqDescriptionrSl}{
			 color:${styles?.description?.color};
			}
			
			${faqLitlerSl}{
			color:${styles?.title?.color}
			}

			${faqQuestionSl}{
		   ${getColorsCSS(styles?.question?.colors)}
		   padding:${getBoxCSS(styles?.question?.padding)};
		   margin-bottom:${styles?.question?.gap};
		   margin-top:${styles?.question?.gap};
		  
			}
		   ${faqAnswerSl}{
			${getColorsCSS(styles?.answer?.colors)}
			 .faq-answer-dec{
		    padding:${getBoxCSS(styles?.answer?.padding)};
		   }
			
		   }
		   ${iconSl} svg {
		   fill:${styles?.question?.colors?.color};
		   
		   }
	
			${wrapperSl}{
				justify-content: ${alignment};
	
			
			}
			${faqhighlighterSl} {
			${getBackgroundCSS(styles?.title?.highlightColor)}
			 
				
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
	
	
		`}} />




		<style dangerouslySetInnerHTML={{__html:`
		${getTypoCSS('',styles?.answer?.typho)?.googleFontLink}
		${getTypoCSS(faqAnswerSl, styles?.answer?.typho)?.styles}
		
		
		
		`


		}}

		/>
		
		</>
	);
}
export default Style;