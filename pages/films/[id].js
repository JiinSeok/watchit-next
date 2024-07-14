import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";
import styles from '@/styles/Movie.module.css'
import Container from "@/components/Container";
import Image from "next/image";
import Head from "next/head";
import Spinner from "@/components/Spinner";

export async function getServerSideProps(context) {
    const movieId = context.params.id;

    let movie = null;

    try {
        const response = await axios.get(`/movies/${movieId}`);
        movie = response.data;
    } catch {
        return { notFound: true };
    }

    const response = await axios.get(`/movie_reviews/?movie_id=${movieId}`);
    const movieReviews = response.data.results ?? [];

    return {
        props: { movie, movieReviews },
    }
}

export default function Movie({ movie, movieReviews }) {
    if (!movie) {
        return (
            <div>
                <Spinner/>
                <p>로딩중입니다. 잠시만 기다려주세요.</p>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{movie.title} - Watchit</title>
            </Head>
            <Container page>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <div className={styles.poster}>
                    <Image fill src={movie.posterUrl} alt={movie.title} />
                </div>
                <MovieReviewList movieReviews={movieReviews}/>
            </Container>
        </>
    );
}