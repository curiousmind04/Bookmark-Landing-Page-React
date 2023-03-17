import { useState } from "react";

import classes from "./FAQ.module.css";

function FAQ() {
  const [question, setQuestion] = useState();

  const openHandler = (e) => {
    if (e.target.innerHTML === "What is Bookmark?") {
      setQuestion(1);
    }
    if (e.target.innerHTML === "How can I request a new browser?") {
      setQuestion(2);
    }
    if (e.target.innerHTML === "Is there a mobile app?") {
      setQuestion(3);
    }
    if (e.target.innerHTML === "What about other Chromium browsers?") {
      setQuestion(4);
    }
  };

  return (
    <section className={classes.faq}>
      <h1>Frequently Asked Questions</h1>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className={classes.questions}>
        <div className={question === 1 ? classes.chosen : ""}>
          <button onClick={openHandler}>What is Bookmark?</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
          {question === 1 && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          )}
        </div>
        <div className={question === 2 ? classes.chosen : ""}>
          <button onClick={openHandler}>
            How can I request a new browser?
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
          {question === 2 && (
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          )}
        </div>
        <div className={question === 3 ? classes.chosen : ""}>
          <button onClick={openHandler}>Is there a mobile app?</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
          {question === 3 && (
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          )}
        </div>
        <div className={question === 4 ? classes.chosen : ""}>
          <button onClick={openHandler}>
            What about other Chromium browsers?
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="#5267DF"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
          {question === 4 && (
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          )}
        </div>
      </div>
      <button>More Info</button>
    </section>
  );
}

export default FAQ;
