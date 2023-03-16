import classes from "./Intro.module.css";

function Intro() {
  return (
    <section className={classes.container}>
      <div className={classes.right}>
        <div className={classes.hero}>
          <img src="/images/illustration-hero.svg" alt="hero illustration" />
        </div>
        <div className={classes.pattern}></div>
      </div>
      <div className={classes.left}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={classes.actions}>
          <button className={classes.btn1}>Get it on Chrome</button>
          <button className={classes.btn2}>Get it on Firefox</button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
