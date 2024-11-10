
import Image from "next/image";
import './homepage.css'
export default function Home() {
  return (
      <div className="main-container">
      <div className="myinfo">
        <div className="container">
        <h1 className="text">Hello!</h1>
       <h1 className="text">I am Abdullah</h1>
       </div>
       <br />
       <br />
        <p>Hello I&apos;m Abdullah <br /> I am in FSc- II and <br />nowaday i am learning next.js and artificial intellegence <br />SEO expert</p>
      </div>
      <div className="image-container">
        <Image
        src="/myimg.jpg" alt="profile picture" width={400} height={400} className="image-container"></Image>        
    </div>
    </div>
  );
}
