import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export async function getStaticProps() {
    const response = await axios.get('/movies');
    const movies = response.data.results ?? [];
    return {
        props: { movies, },
    };

}

export default function Home({ movies }) {
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
