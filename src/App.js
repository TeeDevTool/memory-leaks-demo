import Demo1 from "./demo/demo1";
import Demo2 from "./demo/demo2";
import Demo3 from "./demo/demo3";
import Demo4 from "./demo/demo4";
import Demo5 from "./demo/demo5";
import Demo6 from "./demo/demo6";
import Demo7 from "./demo/demo7";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Memory leaks Demo :)</h1>
      <Demo1 />
    </div>
  );
}
