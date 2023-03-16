import React from 'react';

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
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="relative flex flex-end gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
							<div className='flex flex-col'>
							<h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
								Connect your Wallet
							</h3>
							<p className="dark:text-jacarta-300">
								Once {"you've"} set up your wallet of choice, connect it to OpenSeaby clicking the
								NFT Marketplacein the top right corner.
							</p>
							</div>
						</div>
						<div className="relative flex flex-end gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
							<div className='flex flex-col'>
							<h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
								Connect your Wallet
							</h3>
							<p className="dark:text-jacarta-300">
								Once {"you've"} set up your wallet of choice, connect it to OpenSeaby clicking the
								NFT Marketplacein the top right corner.
							</p>
							</div>
						</div>
						<div className="relative flex flex-end gap-5 rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
							<div className='flex flex-col'>
							<h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
								Connect your Wallet
							</h3>
							<p className="dark:text-jacarta-300">
								Once {"you've"} set up your wallet of choice, connect it to OpenSeaby clicking the
								NFT Marketplacein the top right corner.
							</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end process --> */}
		</>
	);
};

export default Process;
