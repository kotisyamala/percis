import React from "react";
import Post from "../blog/Post";
import ReactDOM from "react-dom";
import ideaIcon from "../assets/idea.png";
import "./PercisController.css";
class PercisController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    const domNote = ReactDOM.findDOMNode(this);
    let pageContent = "";
    domNote.querySelectorAll("p").forEach((element) => {
      pageContent += element.innerText;
    });

    //Find number of words
    let numberOfWords = pageContent.match(/\w+/g).length;
    let sentences = 3;
    if (numberOfWords > 500 && numberOfWords < 1000) {
      sentences = 4;
    } else if (numberOfWords > 1000) {
      sentences = 5;
    }
    //Prepare content for voice api call by removing [...] unwanted chars
    let pageContentWithoutSplChars = pageContent.replace("[...]", "");
    console.log("pageContent :" + pageContent);
    console.log("sentences:" + sentences + " numberOfWords:" + numberOfWords);
    let formdata = new FormData();
    formdata.append("key", "b8e422f6e87679edd3a236bb458d564e");
    formdata.append("txt", pageContent);
    formdata.append("sentences", sentences);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://api.meaningcloud.com/summarization-1.0", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          user: json
        });
      });
  }
  render() {
    return (
      <div>
        <details>
          <summary class="synopsis">
            <b>Synopsis </b>
            <img src={ideaIcon} class="idea" alt="Idea" />
          </summary>
          {this.state.user.summary}
        </details>
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default PercisController;
