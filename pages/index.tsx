import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Merry Christmas!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Merry Christmas!</h1>

        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/vecOs-vfPMc?si=V9PC-sM_VKtKSguJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.santaContainer}>
          <div className={styles.santaClaus} />
        </div>
      </main>
    </div>
  );
};

export default Home;
