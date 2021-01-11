import React from 'react';
import { IColumn, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import { ShimmeredDetailsList, IShimmeredDetailsListProps } from 'office-ui-fabric-react/lib/ShimmeredDetailsList';

const shimmeredDetailsListProps: IShimmeredDetailsListProps['listProps'] = {
	renderedWindowsAhead: 0,
	renderedWindowsBehind: 0,
};

export const ShimmerApplicationExample: React.FunctionComponent = () => {
	const columns: Array<IColumn> = [
		{
			key: 'name',
			name: 'Name',
			minWidth: 0,
		},
		{
			key: 'description',
			name: 'Description',
			minWidth: 0,
		},
	];

	return (
		<>
			<div>
				<ShimmeredDetailsList
					setKey="items"
					items={[]}
					columns={columns}
					selectionMode={SelectionMode.none}
					enableShimmer={true}
					ariaLabelForShimmer="Content is being fetched"
					ariaLabelForGrid="Item details"
					listProps={shimmeredDetailsListProps}
				/>
			</div>
		</>
	);
};
