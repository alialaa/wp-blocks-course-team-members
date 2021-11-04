import { registerBlockType } from '@wordpress/blocks';
import './team-member';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/team-members', {
	edit: Edit,
	save,
} );
