interface PagedResponse {
	page: number;
	total_results: number;
	total_pages: number;
	results: Movie[];
	error: any,
	[key: string]: any;
}

interface Movie {
	[key: string]: any;
}

interface ApiConfiguration {
	[key: string]: any;
}
