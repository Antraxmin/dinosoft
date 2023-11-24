import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="inner">
        <Link href="#">
          <h1>DINOSOFT</h1>
        </Link>
        <ul className="gnb">
          <Link href="#">
            <li>서비스</li>
          </Link>
          <Link href="#">
            <li>포트폴리오</li>
          </Link>
          <Link href="#">
            <li>제작사례</li>
          </Link>
          <Link href="#">
            <li>고객지원</li>
          </Link>
        </ul>
        <ul className="util">
          <Link href="#">
            <li>Login</li>
          </Link>
          <Link href="#">
            <li>Join</li>
          </Link>
          <Link href="#">
            <li>Sitemap</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
