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
		const faqAnswerSl = `${containerSl} .faq-answer`;
		const faqQuestionSl = `${containerSl} .faq-question`;
		const toggleBtnSl = `${faqQuestionSl} .toggle-btn`;
		const iconSl = `${toggleBtnSl} .icon`;
		const questionSl = `${containerSl} .question`;
		const activeSl = `${containerSl} .active`;
		const faqLeftSl = `${faqWrapperSl} .faq-left`;
		const faqTitle = `${wrapperSl} .title`;
		const faqhighlighteSl = `${faqLeftSl} .highlight`;
		const faqDescriptionSl = `${faqLeftSl} .description`;
		
		const faqContactButtonrSl = `${wrapperSl} .contact-btn`;
		// theme 1 
		const defaultThemeContainerSl=`${wrapperSl} .defaultThemeContainer`;


	// console.log(styles?.question?.active);
	// color: ${styles?.question?.active?.color} !important;
	// background: ${styles?.question?.active?.bg} !important;
	const getActiveColorsCSS =(colors)=>{

		if(colors?.bgType==="solid"){
			const color=`color: ${styles?.question?.active?.color} !important;`
		const background=` background-color: ${styles?.question?.active?.bg} !important; `

		return `${color} ${background}`;

		}
		if(colors?.bgType==="gradient"){
			const color=`color: ${styles?.question?.active?.color} !important;`
		const background=` background: ${styles?.question?.active?.gradient} !important; `

		return `${color} ${background}`;

		}


			
	}



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
				grid-template-columns:${options?.selectedTheme ==="theme1"?"1fr 1fr":" minmax(200px, 500px) auto"};
				gap:${styles?.gap?.desktop};

				}
				${activeSl}{
				${getActiveColorsCSS(styles?.question?.active)}

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
		
				
				}
				${faqhighlighteSl} {
				${getBackgroundCSS(styles?.title?.highlightColor)}
				
					
				}
					
				
				${containerSl}{
				${options?.selectedTheme === "theme1"?"":getBackgroundCSS(styles?.bg)}
				padding:${options?.selectedTheme === "theme1"?"":getBoxCSS(styles?.padding.desktop)} ;
				margin:${options?.selectedTheme === "theme1"?"":getBoxCSS(styles?.margin.desktop)} ;
				max-width:${options?.selectedTheme === "theme1"?"":styles?.width?.desktop};
				border-radius:${options?.selectedTheme === "theme1"?"":getBoxCSS(styles?.radius)};
				justify-content: ${options?.selectedTheme === "theme1"?"":options?.contentAlignment};

				
		
				}
				${defaultThemeContainerSl}{
				${getBackgroundCSS(styles?.bg)}
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
				grid-template-columns:${options?.selectedTheme ==="theme1"?"1fr":" 1fr"};

				gap:${styles?.gap?.tablet};
				}
				
				
				}
		
				
					
				
				
				

				${mobileBreakpoint}{
					${faqWrapperSl}{
						gap:${styles?.gap?.mobile};
				grid-template-columns:${options?.selectedTheme ==="theme1"?"1fr":" 1fr"};

					}
					${containerSl}{
					padding:${getBoxCSS(styles?.padding.mobile)};
				margin:${getBoxCSS(styles?.margin.mobile)} ;
				max-width:${styles?.width?.mobile};
				
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