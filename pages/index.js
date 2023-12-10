import Layout from "../components/layout";
import Head from "next/head";
import Hero from "../components/home/hero";
import Animation from "../components/animation";
export default function Home() {
  return (
    <Layout>
        <Head>
            <title>BottleHoony 포트폴리오</title>
            <meta name="description" content="BottleHoony 포트폴리오!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className="flex min-h-screen flex-col item-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero />

            </div>
        </section>


    </Layout>
  );
}
