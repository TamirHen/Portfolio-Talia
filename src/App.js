import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const DUMMY_DATA = {
    title: "Talia's Portfolio",
    subtitle: "Your subtitle here",
    cubes: [
      {
        rowStart: 1,
        rowEnd: 7,
        columnStart: 1,
        columnEnd: 6,
        name: "Gravity Falls 1",
        genre: "Fashion",
        image:
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2015%2F08%2FGravity-Falls.jpg",
      },
      {
        rowStart: 1,
        rowEnd: 4,
        columnStart: 6,
        columnEnd: 9,
        name: "Gravity Falls 2",
        genre: "Music",
        image:
          "https://d23.com/app/uploads/2016/02/1180-x-600-021616_gravity-falls-press-event-recap-780x440-1455236757.jpg",
      },
      {
        rowStart: 4,
        rowEnd: 7,
        columnStart: 6,
        columnEnd: 9,
        name: "Gravity Falls 3",
        genre: "Fashion",
        image:
          "https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/07/gravity-falls-complete-feature.png",
      },
      {
        rowStart: 7,
        rowEnd: 11,
        columnStart: 1,
        columnEnd: 5,
        name: "Gravity Falls 4",
        genre: "Narrative",
        image:
          "https://www.themarysue.com/wp-content/uploads/2014/08/cf5fffdd-8793-4f3d-9f66-d7c1f6032bda.jpg",
      },
      {
        rowStart: 7,
        rowEnd: 11,
        columnStart: 5,
        columnEnd: 9,
        name: "Gravity Falls 5",
        genre: "Fashion",
        image: "https://miro.medium.com/max/1100/0*chhQu6AxnCDmEhfS.jpg",
      },
    ],
    headerLinks: ["Film", "Photography", "Design", "Genres", "Blog", "About"],
    footerText: `This site is a great example of what we have said before: sometimes it’s\n
      enough to create an excellent “About me” page to promote your brand\n
      (which, actually, will work as a full-fledged website).`,
    grid: {
      rows: 8,
      columns: 8,
    },
  };

  return (
    <Router>
      <Switch>
        <>
          <div style={{ padding: "0px 115px" }}>
            <Header data={DUMMY_DATA} />
            <Route path="/">
              <Body data={DUMMY_DATA} />
            </Route>
          </div>
          <Footer data={DUMMY_DATA} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
