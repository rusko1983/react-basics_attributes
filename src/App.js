import React from "react";
import "./styles.css";
function Article() {
  return <article className="article" >

      <h2 className="article__title" >    NICE SUPER</h2>
      <label htmlFor="name">Type something</label>
      <input type="text" name="name" id="name" />
       <a className="article__link" href="Wikipedia article">CLICK ME</a>

  </article>

}
export default function App() {
  return <Article/>
}
