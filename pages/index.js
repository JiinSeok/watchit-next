import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Container from '@/components/Container';
import axios from "@/lib/axios";
import Spinner from "@/components/Spinner";

export async function getStaticProps() {
    const response = await axios.get('/movies');
    const movies = response.data.results ?? [];
    return {
        props: { movies, },
    };

}

export default function Home({ movies }) {
    if (!movies) {
        return (
          <div>
              <Spinner/>
              <p>로딩중입니다. 잠시만 기다려주세요.</p>
          </div>
        )
    }

return (
  <>
      <Container page>
          <SearchForm/>
          <MovieList className={styles.movieList} movies={movies} />
            </Container>
        </>
    );
}
