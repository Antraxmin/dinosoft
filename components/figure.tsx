import Link from "next/link";

export default function Figure() {
  return (
    <figure>
      <div className="inner">
        <h1>INNOVATION</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <br />
        <Link href="#">
          <div className="detail">view detail</div>
        </Link>
      </div>
    </figure>
  );
}
