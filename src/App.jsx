import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "red",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      ></AnimatedCursor>
      <div className="text-center space-y-4">
        <p className="font-bold font-sans1 text-xl ">
          This is my new updated go
        </p>
        <button className="font-sans2 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          ratione accusamus dolore laudantium ducimus veniam dignissimos
          asperiores animi ve!
        </button>
        <p className="font-sans3 font-semibold ">আমি </p>
      </div>
    </>
  );
}

export default App;
