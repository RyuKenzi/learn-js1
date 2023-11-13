import Image from "next/image";
import { Navbar } from "./component/navbar";
import Head from "next/head";

export default function Home() {
  return (
  <>
  <Head>
  <title>Home | Learn Next JS</title>
  <meta name="keywords" content="next.js" />
  </Head>
  <Navbar />
  <Image src="/vercel.svg" width={300} height={300} alt="Next.js logo" />
  <h1>Profile</h1>
  <h1>wellcome to my website</h1>
  </>
  );
}