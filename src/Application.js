import React, {useContext} from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataContext} from "./providers/DataProvider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const data = useContext(DataContext);

    const style = {
        mainContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
        },
    };

    const padding = '0px 6.94%'
    return (
        <>
            {data ? (
                <Router>
                    <ScrollToTop/>
                    <Switch>
                        <>
                            <div style={style.mainContainer}>
                                <div>
                                    <Header padding={padding} data={data}/>
                                    <div className={"container-body"} style={{padding: padding}}>
                                        <Route path="/">
                                            <Body data={data}/>
                                        </Route>
                                    </div>
                                </div>
                                <Footer data={data}/>
                            </div>
                        </>
                    </Switch>
                </Router>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default App;
