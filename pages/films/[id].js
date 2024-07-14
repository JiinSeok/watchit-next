import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";
import styles from '@/styles/Movie.module.css'
import Container from "@/components/Container";
import Image from "next/image";
import Head from "next/head";

export default function Movie() {
    const { id } = useRouter().query;
    const [movie, setMovie] = useState(); // 받아올 스테이트 설정
    const [movieReviews, setMovieReviews] = useState([]); // 받아올 스테이트 설정

    async function getMovie(targetId){
        const response = await axios.get(`/movies/${targetId}`);
        const nextMovie = response.data;
        setMovie(nextMovie);
    }

    async function getMovieReviews(targetId){
        const response = await axios.get(`/movie_reviews/?movie_id=${targetId}`);
        const nextMovieReviews = response.data.results ?? [];
        setMovieReviews(nextMovieReviews);
    }

    useEffect(() => {
        if(id){
            getMovie(id);
            getMovieReviews(id);
        }
    }, [id]);

    if (!movie) return <div>정보가 없습니다.</div>;

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