import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem( props ) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable( { id: props.id } );

	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
	};
	return (
		<div
			ref={ setNodeRef }
			style={ style }
			{ ...attributes }
			{ ...listeners }
		>
			Item { props.id }
		</div>
	);
}
