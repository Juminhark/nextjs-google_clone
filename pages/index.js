import Head from 'next/head';
import Avatar from '../components/Avatar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Google</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/* Left Section */}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>

				{/* Right Section */}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>

					{/* Icon */}

					{/* crl + spacebar : 자동 import */}

					<Avatar url="http://coaching.papareact.com/ai9" />
				</div>
			</header>

			{/* Body */}

			{/* Footer */}
		</div>
	);
}
