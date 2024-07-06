import { useRouter } from 'next/router';

export default function Movie() {
    const { id } = useRouter().query;

    return <div>Movie 페이지 #{id}</div>;
}