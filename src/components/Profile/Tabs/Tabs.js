import { useState } from 'react';

import { Orders } from './Orders/Orders';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';

export const Tabs = () => {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className='container mx-auto'>
			<div className='flex justify-center space-x-4'>
				<button
					className={`${
						activeTab === 1
							? 'bg-violet-900 text-white'
							: 'hover:text-gray-900 hover:bg-gray-100'
					} py-2 px-4 rounded-lg`}
					onClick={() => setActiveTab(1)}
				>
					Mis datos
				</button>
				<button
					className={`${
						activeTab === 2
							? 'bg-violet-900 text-white'
							: 'hover:text-gray-900 hover:bg-gray-100'
					} py-2 px-4 rounded-lg`}
					onClick={() => setActiveTab(2)}
				>
					Mis compras
				</button>
			</div>
			<div className='py-8'>
				{activeTab === 1 && <PersonalInfo />}
				{activeTab === 2 && <Orders />}
			</div>
		</div>
	);
};
