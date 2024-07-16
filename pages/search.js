import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import SearchForm from "@/components/SearchForm";
import MovieList from "@/components/MovieList";
import axios from "@/lib/axios";
import Container from "@/components/Container";
import styles from '@/styles/Search.module.css';
import Head from "next/head";

export async function getServerSideProps(context) {
    const query = context.query['q'];

    const response = await axios.get(`/movies/?q=${query}`);
    const movies = response.data.results || [];

    return { props: { query, movies } };
}

export default function Search({ query, movies }) {
    return (
        <>
            <Head>
                <title>{query} 검색결과 - Watchit</title>
            </Head>
            <Container page>
                <SearchForm initialQuery={query} />
                <h2 className={styles.title}>
                    <span className={styles.keyword}>{query}</span> 검색 결과
                </h2>
                <MovieList movies={movies}/>
            </Container>
        </>
    );
}