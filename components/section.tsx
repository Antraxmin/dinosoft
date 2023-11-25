import Image from "next/image";
import Link from "next/link";

export default function Section() {
  return (
    <section>
      <div className="inner">
        <h1>핵심 서비스</h1>
        <div className="wrap">
          <article>
            <div className="pic">
              <Image
                src="/web.png"
                alt="1번째 이미지"
                width={"280"}
                height={"250"}
              />
            </div>
            <Link href="#">
              <h2>홈페이지 제작</h2>
              <p>
                기획부터 디자인/개발까지, <br />
                홈페이지 제작의 전 과정을 함께합니다
              </p>
            </Link>
          </article>
          <article>
            <div className="pic">
              <Image
                src="/mobile.png"
                alt="2번째 이미지"
                width={"280"}
                height={"250"}
              />
            </div>
            <Link href="#">
              <h2>모바일 앱 제작</h2>
              <p>Lorem ipsum dolor sit, amet consdje dofiwj</p>
            </Link>
          </article>
          <article>
            <div className="pic">
              <Image src="" alt="3번째 이미지" />
            </div>
            <Link href="#">
              <h2>콘텐츠 제작 솔루션</h2>
              <p>Lorem ipsum dolor sit, amet consdje dofiwj</p>
            </Link>
          </article>
          <article>
            <div className="pic">
              <Image className=".img" src="" alt="4번째 이미지" />
            </div>
            <Link href="#">
              <h2>프로젝트 컨설팅</h2>
              <p>Lorem ipsum dolor sit, amet consdje dofiwj</p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
