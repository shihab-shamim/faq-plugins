import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Faq from './Components/Faq/Faq';
// import BlockName from './Components/Frontend/BlockName';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			{/* <BlockName attributes={attributes} /> */}

			<Faq isView={true} attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});