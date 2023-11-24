import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="upper">
          <h1>DINOSOFT</h1>
          <ul>
            <Link href="#">
              <li>Policy</li>
            </Link>
            <Link href="#">
              <li>Terms</li>
            </Link>
            <Link href="#">
              <li>Family Site</li>
            </Link>
            <Link href="#">
              <li>Sitemap</li>
            </Link>
          </ul>
        </div>
        <div className="lower">
          <address>
            충남 아산시 신창면 순천향로 22 순천향대학교 스타트업프라자 712호{" "}
            <br />
          </address>
          <p>2023 DINOSOFT &copy; copyright all right reserved.</p>
        </div>
      </div>
    </footer>
  );
}
