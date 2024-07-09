import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import axios from "@/lib/axios";
import MovieReviewList from "@/components/MovieReviewList";

export default function Movie() {
    const { id } = useRouter().query;
    const [movie, setMovie] = useState(); // 받아올 스테이트 설정
    const [movieReviews, setMovieReviews] = useState([]); // 받아올 스테이트 설정

    async function getMovie(targetId){
        const response = await axios.get(`/movie/${targetId}`);
        const nextMovie = response.data;
        setMovie(nextMovie);
    }

    async function getMovieReviews(targetId){
        const response = await axios.get(`/movie_reviews/?movie=${targetId}`);
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
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <MovieReviewList movieReviews={movieReviews} />
        </div>
    );
}