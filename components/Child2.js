import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "../pages/api/data.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <div className={styles.image_gallery_block}>
            <Image src={data.gallery[1].image} width={150} height={150} />
              <p className={styles.image_description}>
                <code className={styles.code}>{data.gallery[1].description}</code>
              </p>
          </div>
      </header>
    </div>
  );
}