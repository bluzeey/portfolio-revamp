import React from 'react';
import workex_data from '../../data/work-ex_data';

const Process = () => {
	return (
		<>
			{/* <!-- Process --> */}
			<section className="relative py-24 dark:bg-jacarta-800">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
				</picture>
				<div className="container">
					<h2 className="mb-10 text-center font-display text-3xl text-jacarta-700 dark:text-white">
						My Work Experience
					</h2>
					<div className="flex flex-col gap-8 align-items justify-center md:flex-row">
						{workex_data.map(item=>
							<div key={item.id} className="relative flex flex-end gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
							<img src={item.image} className="h-12 w-12" alt='Company Image'/>
							<div className='flex flex-col'>
							<div className='flex justify-between'>
							<h3 className="font-display text-lg text-jacarta-700 dark:text-white">
								{item.company}
							</h3>
							<h4 className="font-display text-sm text-jacarta-700 dark:text-white">
                                {item.timeline}
							</h4>
							</div>
							<h4 className='text-jacarta-600'>
								{item.position}
							</h4>
							<p className="dark:text-jacarta-300">
								{item.description}
							</p>
							</div>
						</div>)}
					</div>
				</div>
			</section>
			{/* <!-- end process --> */}
		</>
	);
};

export default Process;
