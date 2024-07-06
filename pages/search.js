import { useRouter } from 'next/router';

export default function Search() {
    const { query } = useRouter().query;

    return (
        <div>
            <h1>watchit</h1>
            <p>{query} 검색 결관</p>
        </div>
    );
}