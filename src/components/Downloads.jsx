import classes from "./Downloads.module.css";

function Downloads() {
  return (
    <section className={classes.downloads}>
      <h1>Download the extension</h1>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className={classes.options}>
        <div className={classes.option}>
          <img src="/images/logo-chrome.svg" alt="chrome logo" />
          <h2>Add to Chrome</h2>
          <p>Minimum version 62</p>
          <img src="/images/bg-dots.svg" alt="dot pattern" />
          <button>Add & Install Extension</button>
        </div>
        <div className={classes.option}>
          <img src="/images/logo-firefox.svg" alt="firefox logo" />
          <h2>Add to Firefox</h2>
          <p>Minimum version 55</p>
          <img src="/images/bg-dots.svg" alt="dot pattern" />
          <button>Add & Install Extension</button>
        </div>
        <div className={classes.option}>
          <img src="/images/logo-opera.svg" alt="opera logo" />
          <h2>Add to Opera</h2>
          <p>Minimum version 46</p>
          <img src="/images/bg-dots.svg" alt="dot pattern" />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
}

export default Downloads;
