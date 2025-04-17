import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS, } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles,alignment,options} = attributes;

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
	const faqLeftSl = `${faqWrapperSl} .faq-left`;
	const faqTitle = `${faqLeftSl} .title`;
	const faqhighlighteSl = `${faqLeftSl} .highlight`;
	const faqDescriptionSl = `${faqLeftSl} .description`;
	
	const faqContactButtonrSl = `${faqLeftSl} .contact-btn`;





	return (
		<>
		<style dangerouslySetInnerHTML={{
			__html: `

	
			
	
			${getTypoCSS('', styles?.question?.typho)?.googleFontLink}
			${getTypoCSS('', styles?.title?.typho)?.googleFontLink}
			${getTypoCSS('', styles?.description?.typho)?.googleFontLink}
			${getTypoCSS('', styles?.button?.typho)?.googleFontLink}
	
	
			${getTypoCSS(questionSl, styles?.question?.typho)?.styles}
			${getTypoCSS(faqContactButtonrSl, styles?.button?.typho)?.styles}
			${getTypoCSS(faqTitle, styles?.title?.typho)?.styles}
			${getTypoCSS(faqhighlighteSl, styles?.title?.typho)?.styles}
			${getTypoCSS(faqDescriptionSl, styles?.description?.typho)?.styles}

			


			${faqWrapperSl}{
			gap:${styles?.gap?.desktop};
			}
			
			${faqDescriptionSl}{
			 color:${styles?.description?.color};
			}
			
			${faqTitle}{
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
	
			border-radius:${getBoxCSS(styles?.answer?.radius)};
			 .faq-answer-dec{
		    padding:${getBoxCSS(styles?.answer?.padding)};
		   }
		
		   }
		   ${faqContactButtonrSl}{
		    ${getColorsCSS(styles?.button?.colors)}
			 padding:${getBoxCSS(styles?.button?.padding)};
			 border-radius:${getBoxCSS(styles?.button?.radius)};
		   }
		   ${iconSl} svg {
		   fill:${styles?.question?.colors?.color};
		   
		   }
	
			${wrapperSl}{
				justify-content: ${alignment};
				${options?.selectedTheme ==="theme3"?getBackgroundCSS(styles?.bg):""}
	
			
			}
			${faqhighlighteSl} {
			${getBackgroundCSS(styles?.title?.highlightColor)}
			 
				
			  }
				
			
			${containerSl}{
			${options?.selectedTheme==="theme2"?getBackgroundCSS(styles?.bg):""}
			 padding:${getBoxCSS(styles?.padding.desktop)} ;
			 margin:${getBoxCSS(styles?.margin.desktop)} ;
			 max-width:${styles?.width?.desktop};
			 border-radius:${getBoxCSS(styles?.radius)};
			 justify-content: ${options?.contentAlignment};

			 
	
			}
	
	
			${tabBreakpoint}{
				${containerSl}{
			 padding:${getBoxCSS(styles?.padding.tablet)};
			 margin:${getBoxCSS(styles?.margin.tablet)} ;
			  max-width:${styles?.width?.tablet}
	
	
				}
			  	${faqWrapperSl}{
			   gap:${styles?.gap?.tablet};
			}
			 
			
			}
	
			${mobileBreakpoint}{
				${containerSl}{
			 padding:${getBoxCSS(styles?.padding.mobile)}};
			 margin:${getBoxCSS(styles?.margin.mobile)} ;
			  max-width:${styles?.width?.mobile};
			  
			  }
			  	${faqWrapperSl}{
			   gap:${styles?.gap?.mobile};
			}
			 
			  
			  }

			
	
	
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