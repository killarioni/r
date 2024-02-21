import React from "react";
import  ReactDOM  from "react-dom/client";
import Application from "./Application";

class App extends React.Component {
    render(){
        return(
            <div>
                <Application />
           </div>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);