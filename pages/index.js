import Link from "next/link";

export default function Home() {
  return (
      <>
        <h1>watchit</h1>
        <ul>
          <Link href="/movies/1">
            1번 영화
          </Link>
          <Link href="/movies/2">
            2번 영화
          </Link>
          <Link href="movies/3">
            3번 영화
          </Link>
        </ul>
      </>
  );
}
