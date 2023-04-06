import PuffLoader from 'react-spinners/PuffLoader';

export const Spinner = () => {
	return (
		<div className='flex items-center justify-center h-full'>
			<PuffLoader color='#312E81' />
		</div>
	);
};
