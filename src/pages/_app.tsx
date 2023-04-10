import "../styles/global.scss";

import Header from "../components/Header";
import Palyer from "../components/Player";

import styles from "../styles/app.module.scss";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Palyer />
      </div>
    </PlayerContextProvider>  
  );
}

export default MyApp;
