// components/MyComponent.tsx
import React from 'react';
import Dropdown from './dropdown';
import Link from 'next/link';

// Define the type for props (if needed)
type HistoryItemProps = {
	topic?: string;
	created_at?: string;
};

const HistoryItem: React.FC<HistoryItemProps> = ({ topic, created_at }) => {
	return (
		<>
			<div className='flex flex-row items-center h-[50px] border-b border-[#C0C0C0]-400 pr-4'>

				<div className='flex flex-col flex-1 justify-center'>
					<div className='flex flex-row items-center'>
						<p className='text-[#636262] text-[16px]'>{topic || 'This is a reusable component view.'}</p>
						<img src="/assets/images/alink.svg" className="w-[12px] h-[12px]"/>
					</div>
					<p className='text-[#8B8A91] text-[12px]'>{created_at || 'Sunday, October 27, 2024 at 9:34am'}</p>
				</div>
				
				<div className="dropdown flex shrink-0">
					<Dropdown
						offset={[0, 8]}
						btnClassName="relative group block"
						button={
							<div className="h-9 w-9 bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 rounded-full object-cover saturate-50 group-hover:saturate-100"> 
								<img src="/assets/images/tdot.svg" className="w-[20px] h-[20px]"/>
							</div>}
					>
						<ul className="w-[150px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
							<li>
								<Link href="/history" className="dark:hover:text-white">
									Share
								</Link>
							</li>
							<li>
								<Link href="/history" className="dark:hover:text-white">
									Rename
								</Link>
							</li>
							<li>
								<Link href="/history" className="dark:hover:text-white">
									Bookmark
								</Link>
							</li>
							<li>
								<Link href="/history" className="dark:hover:text-white">
									Delete Chat
								</Link>
							</li>
						</ul>
					</Dropdown>
				</div>
			</div>
		
		</>
	);
};

export default HistoryItem;
