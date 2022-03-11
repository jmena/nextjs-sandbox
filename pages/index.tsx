import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useAppContext } from "context/state";
import AccuracyWidget from "components/AccuracyWidget";

export default function Home() {
  let state = useAppContext();

  function clicked() {
    console.log(state);
    state.setAccuracy(Math.random());
  }

  return (
    <>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">title</h1>
          <p className="description">{state.accuracy}</p>
          Widget 1:
          <AccuracyWidget />
          Widget 2:
          <AccuracyWidget />
          <button onClick={clicked}>hello</button>
        </main>

        <footer></footer>
      </div>
    </>
  );
}
