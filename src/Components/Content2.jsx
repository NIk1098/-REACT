import imglol from '../../public/muz.png'
import product from '../../public/muzik.avif'

function Content2() {
	return (
		<div className='my-10'>
			<div className='mb-30'>
				<h1 className='text-5xl font-bold text-center mb-5'>
					Our Latest Product
				</h1>
				<p className='text-lg text-center mb-20'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
					facilisis nunc ipsum aliquam, ante.
				</p>
				<div className='flex justify-center gap-30 mt-10'>
					<div className='w-80 shadow-2xl p-5 rounded-3xl'>
						<img className='w-80 mb-10' src={product} />
						<div className='flex justify-between mt-4'>
							<h2 className='text-2xl font-bold'>Read Headphone</h2>
							<p className='text-gray-600'>$ 256</p>
						</div>
					</div>
					<div className='w-80 shadow-2xl p-5 rounded-3xl'>
						<img className='w-80 mb-10' src={product} />
						<div className='flex justify-between mt-4'>
							<h2 className='text-2xl font-bold'>Read Headphone</h2>
							<p className='text-gray-600'>$ 256</p>
						</div>
					</div>
					<div className='w-80 shadow-2xl	p-5 rounded-3xl'>
						<img className='w-80 mb-10' src={product} />
						<div className='flex justify-between mt-4'>
							<h2 className='text-2xl font-bold'>Read Headphone</h2>
							<p className='text-gray-600'>$ 256</p>
						</div>
					</div>
				</div>
			</div>
			<section className='flex justify-center items-center'>
				<img src={imglol} alt='Product Image' className='w-1/2' />
				<div className='w-1/2 p-10 flex flex-col gap-5 justify-center items-center'>
					<p className='text-4xl'>5A Charger</p>
					<p className='text-4xl'>Extra battery</p>
					<p className='text-4xl'>Sophisticated bag</p>
					<p className='text-4xl'>User manual guide</p>
				</div>
			</section>
		</div>
	)
}

export default Content2
