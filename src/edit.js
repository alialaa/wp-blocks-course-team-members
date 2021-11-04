import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ [ 'blocks-course/team-member' ] }
				template={ [
					[ 'blocks-course/team-member' ],
					[ 'blocks-course/team-member' ],
					[ 'blocks-course/team-member' ],
				] }
			/>
		</div>
	);
}
