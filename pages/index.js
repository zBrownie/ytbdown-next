import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const linkRef = React.useRef();
  const [loading, setloading] = React.useState(false);
  const handleLink = () => {
    setloading(true);

    axios
      .get("http://localhost:3030/down", {
        params: linkRef.current.value,
      })
      .then((resp) => {
        console.log(resp);
        setloading(false);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          You<a href="https://www.youtube.com/">Down</a>
        </h1>

        <p className={styles.description}>
          Download all you videos from youtube in
          <code className={styles.code}>MP3</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <input
              type="text"
              ref={linkRef}
              placeholder="https://www.youtube.com/watch?v=KK9bwTlAvgo"
            />
            <button type="button" onClick={loading ? () => {} : handleLink}>
              {loading ? "Wait..." : "Down"}
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://media.discordapp.net/attachments/380481733125996544/744988923834531860/unknown.png?width=489&height=497"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sorry by Brownie
        </a>
      </footer>
    </div>
  );
}
