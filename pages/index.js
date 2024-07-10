import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        const response = await axios.get('/movies');
        const nextMovies = response.data.results ?? [];
        setMovies(nextMovies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    if (!movies) {
        return <div>정보가 없습니다.</div>;
    }

    return (
        <>
            <Container page>
                <SearchForm />
                <MovieList className={styles.movieList} movies={movies} />
            </Container>
        </>
    );
}
