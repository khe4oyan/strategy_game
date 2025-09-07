// styles
import { Link } from 'react-router-dom';
import classes from './styles.module.css';

export default function UpdatePlans() {
  return (
    <div className={classes.root}>
      <main className={classes.container}>
        <article className={classes.card}>
          <header className={classes.header}>
            <h1>
              Update <span className={classes.highlight}>0.3.0</span> — Global Upgrade
            </h1>
            <p>Major update: multiplayer, new interface, fresh characters, and prize tournaments.</p>
          </header>

          <section className={classes.sections}>
            <section className={classes.block}>
              <h2>🕹️ Multiplayer — Play Together</h2>
              <p>Now you can battle against other players in real time. Form a squad (up to 4 units), plan module combinations, and prove your dominance on the battlefield.</p>
              <ul>
                <li>1v1 mode and quick matches</li>
                <li>Lobbies and matchmaking by ranking</li>
                <li>Replay saving for analysis</li>
              </ul>
            </section>

            <section className={classes.block}>
              <h2>🎨 New UI/UX</h2>
              <p>Complete interface redesign: minimalism, clear navigation, and smooth handling of character modules.</p>
              <div className={classes.grid}>
                <div className={classes.gridItem}>
                  <strong>Usability</strong>
                  <span>Clear menu hierarchy and quick access to your character collection.</span>
                </div>
                <div className={classes.gridItem}>
                  <strong>Minimalism</strong>
                  <span>Nothing extra — focus on tactics and gameplay.</span>
                </div>
              </div>
            </section>

            <section className={classes.block}>
              <h2>🧙‍♂️ New Characters and Features</h2>
              <p>
                In upcoming updates, we plan to add <strong>new heroes</strong> and <strong>unique modules</strong> that will expand tactical options.
                Details are still under wraps, but get ready for fresh strategies and new ways to win!
              </p>
            </section>

            <section className={classes.block}>
              <h2>🌿 Seasons and New Game Modes</h2>
              <p>
                The game will feature <strong>themed seasons</strong> and two new modes:
              </p>
              <ul>
                <li><strong>Seasonal Mode</strong> — battles using only characters from the current season.</li>
                <li><strong>Classic Mode</strong> — free choice of any characters and modules.</li>
              </ul>
              <p>
                Each season will bring new challenges, interesting hero combinations, and <strong>secret rewards</strong> for the most active players.
              </p>
            </section>

            <section className={classes.block}>
              <h2>🏆 Prize Tournaments</h2>
              <p>We are launching a competitive system with regular tournaments, rankings, and rewards for top players.</p>
              <ul>
                <li>Seasonal tournaments and weekly events</li>
                <li>Ranking system and leaderboards</li>
                <li>Matches with prizes and in-game rewards</li>
              </ul>
            </section>

            <section className={classes.future}>
              <h3>Looking Ahead</h3>
              <p>This is just the beginning. Plans include further story expansion, module balance, user-generated content support, and multiplayer improvements.</p>
            </section>
          </section>

          <footer className={classes.footer}>
            <div className={classes.buttons}>
              <a href="https://t.me/+TO_lh7siwX1iNzYy" target='_blank' className={classes.buttonOutline}>
                Subscribe on Telegram
              </a>
            </div>
            <div className={classes.version}>Version 0.3.0 · Update in progress</div>
          </footer>
        </article>
      </main>
    </div>
  )
}
