import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const DUMMY_DATA = {
    title: "Talia's Portfolio",
    subtitle: "Your subtitle here",
    cubes: [
      {
        id: 1,
        name: "Gravity Falls 1",
        genre: "Fashion",
        description: "Gravity Falls 1\nDescription here",
        image:
          "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2015%2F08%2FGravity-Falls.jpg",
      },
      {
        id: 2,
        name: "Gravity Falls 2",
        genre: "Music",
        description: "Gravity Falls 2\nDescription here",
        image:
          "https://d23.com/app/uploads/2016/02/1180-x-600-021616_gravity-falls-press-event-recap-780x440-1455236757.jpg",
      },
      {
        id: 3,
        name: "Gravity Falls 3",
        genre: "Fashion",
        description: "Gravity Falls 3\nDescription here",
        image:
          "https://149455152.v2.pressablecdn.com/wp-content/uploads/2018/07/gravity-falls-complete-feature.png",
      },
      {
        id: 4,
        name: "Gravity Falls 4",
        genre: "Narrative",
        description: "Gravity Falls 4\nDescription here",
        image:
          "https://www.themarysue.com/wp-content/uploads/2014/08/cf5fffdd-8793-4f3d-9f66-d7c1f6032bda.jpg",
      },
      {
        id: 5,
        name: "Gravity Falls 5",
        genre: "Fashion",
        description: "Gravity Falls 5\nDescription here",
        image: "https://miro.medium.com/max/1100/0*chhQu6AxnCDmEhfS.jpg",
      },
    ],
    headerLinks: ["Film", "Photography", "Design", "genre", "Blog", "About"],
    footerText: `This site is a great example of what we have said before: sometimes it’s\n
      enough to create an excellent “About me” page to promote your brand\n
      (which, actually, will work as a full-fledged website).`,
    pages: {
      home: {
        grid: {
          rows: 8,
          columns: 8,
          mobile: {
            rows: 12,
            columns: 8,
          },
          tablet: {
            rows: 12,
            columns: 8,
          },
        },
        images: [
          {
            cubeId: 1,
            rowStart: 1,
            rowEnd: 7,
            columnStart: 1,
            columnEnd: 6,
            mobile: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 9,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 9,
            },
          },
          {
            cubeId: 2,
            rowStart: 1,
            rowEnd: 4,
            columnStart: 6,
            columnEnd: 9,
            mobile: {
              rowStart: 4,
              rowEnd: 8,
              columnStart: 1,
              columnEnd: 9,
            },
            tablet: {
              rowStart: 4,
              rowEnd: 8,
              columnStart: 1,
              columnEnd: 9,
            },
          },
          {
            cubeId: 3,
            rowStart: 4,
            rowEnd: 7,
            columnStart: 6,
            columnEnd: 9,
            mobile: {
              rowStart: 8,
              rowEnd: 12,
              columnStart: 1,
              columnEnd: 9,
            },
            tablet: {
              rowStart: 8,
              rowEnd: 12,
              columnStart: 1,
              columnEnd: 9,
            },
          },
          // {
          //   cubeId: 4,
          //   rowStart: 7,
          //   rowEnd: 11,
          //   columnStart: 1,
          //   columnEnd: 5,
          //   mobile: {
          //     rowStart: 0,
          //     rowEnd: 0,
          //     columnStart: 0,
          //     columnEnd: 0,
          //   },
          //   tablet: {
          //     rowStart: 0,
          //     rowEnd: 0,
          //     columnStart: 0,
          //     columnEnd: 0,
          //   },
          // },
          // {
          //   cubeId: 5,
          //   rowStart: 7,
          //   rowEnd: 11,
          //   columnStart: 5,
          //   columnEnd: 9,
          //   mobile: {
          //     rowStart: 0,
          //     rowEnd: 0,
          //     columnStart: 0,
          //     columnEnd: 0,
          //   },
          //   tablet: {
          //     rowStart: 0,
          //     rowEnd: 0,
          //     columnStart: 0,
          //     columnEnd: 0,
          //   },
          // },
        ],
      },
      project: {
        grid: {
          rows: 8,
          columns: 9,
          mobile: {
            rows: 8,
            columns: 2,
          },
          tablet: {
            rows: 8,
            columns: 4,
          },
        },
        images: [
          {
            cubeId: 1,
            rowStart: 1,
            rowEnd: 9,
            columnStart: 1,
            columnEnd: 10,
            mobile: {
              rowStart: 1,
              rowEnd: 2,
              columnStart: 1,
              columnEnd: 2,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 4,
            },
          },
          {
            cubeId: 2,
            rowStart: 1,
            rowEnd: 8,
            columnStart: 2,
            columnEnd: 9,
            mobile: {
              rowStart: 1,
              rowEnd: 2,
              columnStart: 1,
              columnEnd: 2,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 4,
            },
          },
          {
            cubeId: 3,
            rowStart: 1,
            rowEnd: 9,
            columnStart: 1,
            columnEnd: 10,
            mobile: {
              rowStart: 1,
              rowEnd: 2,
              columnStart: 1,
              columnEnd: 2,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 4,
            },
          },
          {
            cubeId: 4,
            rowStart: 1,
            rowEnd: 9,
            columnStart: 1,
            columnEnd: 10,
            mobile: {
              rowStart: 1,
              rowEnd: 2,
              columnStart: 1,
              columnEnd: 2,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 4,
            },
          },
          {
            cubeId: 5,
            rowStart: 1,
            rowEnd: 9,
            columnStart: 1,
            columnEnd: 10,
            mobile: {
              rowStart: 1,
              rowEnd: 2,
              columnStart: 1,
              columnEnd: 2,
            },
            tablet: {
              rowStart: 1,
              rowEnd: 4,
              columnStart: 1,
              columnEnd: 4,
            },
          },
        ],
      },
      hlinks: [
        {
          name: "Film",
          header: "Film",
          grid: {
            rows: 10,
            columns: 8,
            mobile: {
              rows: 12,
              columns: 8,
            },
            tablet: {
              rows: 12,
              columns: 8,
            },
          },
          images: [
            {
              cubeId: 2,
              rowStart: 1,
              rowEnd: 6,
              columnStart: 1,
              columnEnd: 5,
              mobile: {
                rowStart: 1,
                rowEnd: 4,
                columnStart: 1,
                columnEnd: 9,
              },
              tablet: {
                rowStart: 1,
                rowEnd: 5,
                columnStart: 1,
                columnEnd: 9,
              },
            },
            {
              cubeId: 1,
              rowStart: 4,
              rowEnd: 9,
              columnStart: 5,
              columnEnd: 9,
              mobile: {
                rowStart: 4,
                rowEnd: 8,
                columnStart: 1,
                columnEnd: 9,
              },
              tablet: {
                rowStart: 5,
                rowEnd: 10,
                columnStart: 1,
                columnEnd: 9,
              },
            },
            // {
            //   cubeId: 3,
            //   rowStart: 1,
            //   rowEnd: 4,
            //   columnStart: 5,
            //   columnEnd: 9,
            //   mobile: {
            //     rowStart: 0,
            //     rowEnd: 0,
            //     columnStart: 0,
            //     columnEnd: 0,
            //   },
            //   tablet: {
            //     rowStart: 0,
            //     rowEnd: 0,
            //     columnStart: 0,
            //     columnEnd: 0,
            //   },
            // },
            // {
            //   cubeId: 4,
            //   rowStart: 6,
            //   rowEnd: 9,
            //   columnStart: 1,
            //   columnEnd: 5,
            //   mobile: {
            //     rowStart: 0,
            //     rowEnd: 0,
            //     columnStart: 0,
            //     columnEnd: 0,
            //   },
            //   tablet: {
            //     rowStart: 0,
            //     rowEnd: 0,
            //     columnStart: 0,
            //     columnEnd: 0,
            //   },
            // },
          ],
        },
        {
          name: "Photography",
          title: "This is the page's title",
          text: "Some text inside Photography page...",
          grid: {
            rows: 13,
            columns: 8,
          },
          images: [
            {
              cubeId: 1,
              rowStart: 1,
              rowEnd: 7,
              columnStart: 1,
              columnEnd: 9,
            },
            {
              cubeId: 5,
              rowStart: 7,
              rowEnd: 14,
              columnStart: 1,
              columnEnd: 9,
            },
          ],
        },
        {
          name: "Design",
          header: "Design",
          grid: {
            rows: 8,
            columns: 8,
          },
          images: [
            {
              cubeId: 5,
              rowStart: 1,
              rowEnd: 9,
              columnStart: 1,
              columnEnd: 9,
            },
          ],
        },
        {
          name: "Genre",
          grid: {
            rows: 8,
            columns: 8,
          },
          images: [
            {
              cubeId: 5,
              rowStart: 1,
              rowEnd: 5,
              columnStart: 1,
              columnEnd: 5,
            },
            {
              cubeId: 2,
              rowStart: 1,
              rowEnd: 5,
              columnStart: 5,
              columnEnd: 9,
            },
            {
              cubeId: 3,
              rowStart: 5,
              rowEnd: 9,
              columnStart: 3,
              columnEnd: 7,
            },
          ],
        },
        {
          name: "Blog",
          title: "This is the page's title",
          subtitle: "Subtitle here...",
          text: "Some text inside Blog page...",
          grid: {
            rows: 8,
            columns: 8,
          },
          images: [
            {
              cubeId: 4,
              rowStart: 2,
              rowEnd: 8,
              columnStart: 2,
              columnEnd: 8,
            },
          ],
        },
        {
          name: "About",
          title: "About Me",
          subtitle: "Talia Breuer",
          text: "Some text about me...",
        },
      ],
    },
    breakPoints: {
      mobile: "600px",
      tablet: "1200px",
      menu: "800px",
    },
  };

  const style = {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    },
  };

  return (
    <Router>
      <Switch>
        <div style={style.mainContainer}>
          <div style={{ padding: "0px 6.94%" }}>
            <Header data={DUMMY_DATA} />
            <Route path="/">
              <Body data={DUMMY_DATA} />
            </Route>
          </div>
          <Footer data={DUMMY_DATA} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
