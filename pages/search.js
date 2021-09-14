import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import Response from '../Response';

function search({ results }) {
	const router = useRouter();

	console.log(results);

	return (
		<div>
			<Head>
				<title>{router.query.term} - Search Results</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />
			{/* Search Results */}
			<SearchResults results={results} />
		</div>
	);
}

export default search;

export async function getServerSideProps(context) {
	const useDummyData = true;

	const startIndex = context.query.start || '0';

	const data = useDummyData
		? Response
		: await fetch(
				`https://google-search3.p.rapidapi.com/api/v1/search/q=${context.query.term}`,
				{
					method: 'GET',
					headers: {
						'x-user-agent': 'desktop',
						'x-rapidapi-host': 'google-search3.p.rapidapi.com',
						'x-rapidapi-key':
							'9a6015cf11msh13de538a31730c3p1c8457jsn93b4c99001f4',
					},
				}
		  )
				.then((response) => response.json())
				.catch((err) => {
					console.error(err);
				});

	// After the SERVER has rendered... Pass the results to the client
	return {
		props: {
			results: data,
		},
	};
}
