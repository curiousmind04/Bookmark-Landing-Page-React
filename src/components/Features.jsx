import { useState } from "react";
import classes from "./Features.module.css";

function Features() {
  const [tab, setTab] = useState(1);

  const tabSwitchHandler = (e) => {
    // console.log(e.target.innerHTML);

    if (e.target.innerHTML === "Simple Bookmarking") {
      setTab(1);
    }
    if (e.target.innerHTML === "Speedy Searching") {
      setTab(2);
    }
    if (e.target.innerHTML === "Easy Sharing") {
      setTab(3);
    }
  };

  return (
    <section className={classes.features}>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className={classes.tabs}>
        <div className={tab === 1 ? classes.chosen : ""}>
          <button onClick={tabSwitchHandler}>Simple Bookmarking</button>
          <div></div>
        </div>
        <div className={tab === 2 ? classes.chosen : ""}>
          <button onClick={tabSwitchHandler}>Speedy Searching</button>
          <div></div>
        </div>
        <div className={tab === 3 ? classes.chosen : ""}>
          <button onClick={tabSwitchHandler}>Easy Sharing</button>
          <div></div>
        </div>
      </div>
      <div className={classes.tab}>
        <div className={classes.left}>
          <div className={classes.illustration}>
            {tab === 1 && (
              <img
                src="/images/illustration-features-tab-1.svg"
                alt="tab 1 illustration"
                className={classes.one}
              />
            )}
            {tab === 2 && (
              <img
                src="/images/illustration-features-tab-2.svg"
                alt="tab 2 illustration"
                className={classes.two}
              />
            )}
            {tab === 3 && (
              <img
                src="/images/illustration-features-tab-3.svg"
                alt="tab 3 illustration"
                className={classes.three}
              />
            )}
          </div>
          <div className={tab === 1 ? classes.pattern : classes.pattern2}></div>
        </div>

        <div className={classes.right}>
          {tab === 1 && <h2>Bookmark in one click</h2>}
          {tab === 2 && <h2>Intelligent search</h2>}
          {tab === 3 && <h2>Share your bookmarks</h2>}
          {tab === 1 && (
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          )}
          {tab === 2 && (
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          )}
          {tab === 3 && (
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
          )}
          <button className={classes.btn}>More Info</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
