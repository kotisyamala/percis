import React from "react";
import readingImg from "./assets/reading.png";
function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={readingImg}
              alt="reading"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About PERCIS</h1>
            <p>
              As a fact, the Human's attention span dropped from 12sec in 2000
              to shorter than 8sec in 2021. This is bad news for Marketers /
              content creators to hold the attention of an average website
              reader with lengthy articles.
            </p>
            <p>
              PRECIS is an AI-powered text-to-speech(TTS) system which can
              summarize any article content and read out a synopsis of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
