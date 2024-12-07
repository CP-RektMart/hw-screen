function App() {
  const horizontal = 640;
  const vertical = 480;

  return (
    <div>
      <div>
        {Array.from({ length: vertical }).map((_, y) => (
          <div key={y} style={{ display: "flex" }}>
            {Array.from({ length: horizontal }).map((_, x) => (
              <div key={x}>
                {(y >= 0 && y < 480 && x >= 0 && x < 1) ||
                (y >= 0 && y < 480 && x >= 639 && x < 640) ||
                (y >= 0 && y < 1 && x >= 0 && x < 640) ||
                (y >= 479 && y < 480 && x >= 0 && x < 640) ? (
                  <div className="w-[1px] h-[1px] bg-black"></div>
                ) : (x >= 480 && x < 620 && y >= 150 && y < 200) ||
                  (x >= 480 && x < 620 && y >= 220 && y < 270) ||
                  (x >= 480 && x < 620 && y >= 290 && y < 340) ||
                  (x >= 480 && x < 620 && y >= 360 && y < 410) ? (
                  <div className="w-[1px] h-[1px] bg-sky-400"></div>
                ) : x >= 120 && x < 140 && y >= 360 && y < 450 ? (
                  <div className="w-[1px] h-[1px] bg-amber-950"></div>
                ) : (x >= 70 && x < 190 && y >= 330 && y < 360) ||
                  (x >= 90 && x < 170 && y >= 300 && y < 330) ||
                  (x >= 110 && x < 150 && y >= 270 && y < 300) ? (
                  <div className="w-[1px] h-[1px] bg-green-700"></div>
                ) : x >= 460 && x < 640 && y >= 130 && y < 450 ? (
                  <div className="w-[1px] h-[1px] bg-stone-500"></div>
                ) : x >= 0 && x < 640 && y >= 400 && y < 480 ? (
                  <div className="w-[1px] h-[1px] bg-green-300"></div>
                ) : (x >= 545 && x < 555 && y >= 110 && y < 130) ||
                  (x >= 535 && x < 565 && y >= 100 && y < 110) ||
                  (x >= 525 && x < 575 && y >= 90 && y < 100) ||
                  (x >= 535 && x < 565 && y >= 80 && y < 90) ||
                  (x >= 545 && x < 555 && y >= 70 && y < 80) ||
                  (x >= 125 && x < 135 && y >= 250 && y < 270) ||
                  (x >= 115 && x < 145 && y >= 240 && y < 250) ||
                  (x >= 105 && x < 155 && y >= 230 && y < 240) ||
                  (x >= 115 && x < 145 && y >= 220 && y < 230) ||
                  (x >= 125 && x < 135 && y >= 210 && y < 220) ? (
                  <div className="w-[1px] h-[1px] bg-yellow-300"></div>
                ) : (
                  <div className="w-[1px] h-[1px] bg-white"></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
