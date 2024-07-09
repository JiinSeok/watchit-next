import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';

export default function Home() {

    return (
        <>
            <Header />
            <Container page>
                <SearchForm />
                <MovieList className={styles.movieList} />
            </Container>
        </>
    );
}
