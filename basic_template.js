import React from "react"    //even if this is not being used directly, it help the script in understanding the difference bw HTML and react
import ReactDOM from "react-dom"

// ReactDOM.render(what do you want to render, where do i want to render it)
// more than one JSX elements should be wrapped in <div>

ReactDOM.render(<div><h1>hello world</h1><p>what's up!!!!!</p></div>, document.getElementById('root'))

// var newP = document.createElement("p")
// newP.innerHTML = "my new para."
function MyApp(){
 return(
    <ul>
       <li> harry </li>
       <li> ron </li>
       <li> hermoine </li>
    </ul>
 )
}
ReactDOM.render(<MyApp />, document.getElementById("root"))  //rendering the page with 
