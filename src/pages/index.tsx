import Head from "next/head";
import styles from "./index.module.css";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Leo Sammarco - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ marginBottom: "24px" }}>
          <Avatar
            imgSrc="/leo-greyscale.jpg"
            imgAlt="Leo Sammarco"
            height={200}
            width={200}
          />
        </div>
        <h1 className={styles.title}>Leo Sammarco</h1>

        <p className={styles.description}>
          Hi I'm Leo, a software engineer based in London working for
          Trainline.
        </p>
        <Button href="/leo-sammarco-cv.pdf" style={Button.BUTTON_STYLES.PRIMARY}>
          View my CV
        </Button>
        <p className={styles.contact}>
          or
          <br />
          contact me at{" "}
          <a href="mailto:hi@leosammarco.com">hi@leosammarco.com</a>
        </p>
      </main>
    </div>
  );
}
