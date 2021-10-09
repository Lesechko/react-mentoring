import {ISortingItem} from '../components/common/sorting/Sorting';
import {IMovie} from '../components/movieList/movie/Movie';

export const GenresToggle = [
	{id: 0, title: 'All', active: true},
	{id: 1, title: 'Documentary', active: false},
	{id: 2, title: 'Comedy', active: false},
	{id: 3, title: 'Horror', active: false},
	{id: 4, title: 'Crime', active: false},
];

export const sortingItem: ISortingItem[] = [
	{value: 'release date', id: 1},
	{value: 'runtime', id: 2},
	{value: 'rating', id: 3},
];

export const MovieListItems: IMovie[] = [
	{
		id: '1',
		name: 'Pulp Fiction',
		genre: 'Action & Adventure',
		genreId: [4],
		rating: 1,
		year: 2016,
		runtime: 123,
		img: 'https://cps-static.rovicorp.com/2/Open/Disney_Media_Distribution/Program/37403911/_derived_jpg_q90_310x470_m0/Black_Widow_3x4_6_1628074323937_8.jpg',
	},
	{
		id: '2',
		name: 'Bohemian Rhapsody',
		genre: 'Drama, Biography, Music',
		rating: 4,
		genreId: [1],
		year: 2006,
		img: 'https://filmlitblogg.files.wordpress.com/2019/01/netflix-paramount-28nov18.jpg?w=640',
		runtime: 96,
	},
	{
		id: '3',
		name: 'Kill Bill: Vol 2',
		genre: 'Oscar winning Movie',
		genreId: [4],
		rating: 2,
		year: 2021,
		img: 'https://i.pinimg.com/originals/4f/bc/d7/4fbcd70a187a90beeb26fda1657b441d.jpg',
		runtime: 167,
	},
	{
		id: '4',
		name: 'Avengers: War of Infinity',
		genre: 'Action & Adventure',
		runtime: 46,
		rating: 55,
		genreId: [3],
		year: 2016,
		img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
	},
	{
		id: '5',
		name: 'Inception',
		genre: 'Action & Adventure',
		runtime: 234,
		rating: 5,
		genreId: [1],
		year: 2020,
		img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
	},
	{
		id: '6',
		name: 'Reservoir dogs',
		runtime: 122,
		genre: 'Oscar winning Movie',
		rating: 5,
		genreId: [1],
		year: 1994,
		img: 'https://bestsimilar.com/img/movie/thumb/c1/21264.jpg',
	},
];
