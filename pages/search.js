import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import SearchForm from "@/components/SearchForm";
import MovieList from "@/components/MovieList";
import axios from "@/lib/axios";
import Container from "@/components/Container";
import styles from '@/styles/Search.module.css';
import Head from "next/head";

export default function Search() {
    const { q } = useRouter().query;
    const [movies, setMovies] = useState([]);

    async function searchMovies(query) {
        const response = await axios.get(`/movies/?q=${query}`);
        const nextMovies = response.data.results || [];
        setMovies(nextMovies);
    }

    useEffect(() => {
        if (q) {
            searchMovies(q);
        }
    },[q]);


    return (
        <>
            <Head>
                <title>{q} 검색결과 - Watchit</title>
            </Head>
            <Container page>
                <SearchForm initialQuery={q} />
                <h2 className={styles.title}>
                    <span className={styles.keyword}>{q}</span> 검색 결과
                </h2>
                <MovieList movies={movies}/>
            </Container>
        </>
    );
}