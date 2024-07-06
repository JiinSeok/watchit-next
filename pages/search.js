import { useRouter } from 'next/router';
import SearchForm from "@/components/SearchForm";

export default function Search() {
    const { keyword } = useRouter().query;

    return (
        <div>
            <h1>watchit</h1>
            <SearchForm initialValue={keyword} />
            <p>{keyword} 검색 결과</p>
        </div>
    );
}