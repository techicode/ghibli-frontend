function App() {
  return (
    <div className="App">
      <div className="left-side flex min-h-screen ">
        <div className="bg-eggsheld flex-none w-1/3 caveat text-7xl max-w-xl text-center ">
          <div class="flex-col flex place-content-around h-full">
            <div className="mb-10">Logo</div>
            <div className="h-1/5 underline decoration-wavy decoration-violet-200 decoration-4 underline-offset-8 text-violet-400">
              Movies
            </div>
            <div className="h-1/5">Producers</div>
            <div className="h-1/5">Directors</div>
            <div className="h-1/5">A.I</div>
          </div>
        </div>
        <div className="bg-ice flex-1 flex-col flex  justify-around rancho">
          <div className="rounded-lg  h-full grid grid-cols-5 my-5 ">
            <img
              src="https://www.ghibli.jp/images/kazetachinu.jpg"
              alt=""
              className="object-scale-down h-40 w-96"
            />
            <div className="flex-none col-span-2">
              <h1 className="rancho text-2xl">The Wind Rises</h1>
              <p className="rancho">
                A lifelong love of flight inspires Japanese aviation engineer
                Jiro Horikoshi (Hideaki Anno), whose storied career includes the
                creation of the A6M World War II fighter plane.
              </p>
            </div>
            <div className="flex-none col-span-2">asdfg</div>
          </div>
          <div className="rounded-lg rancho h-full grid grid-cols-5 my-5 ">
            <img
              src="https://www.ghibli.jp/images/kazetachinu.jpg"
              alt=""
              className="object-scale-down h-40 w-96"
            />
            <div className="flex-none  col-span-2">
              <h1 className=" text-2xl">The Wind Rises</h1>
              <p>
                A lifelong love of flight inspires Japanese aviation engineer
                Jiro Horikoshi (Hideaki Anno), whose storied career includes the
                creation of the A6M World War II fighter plane.
              </p>
            </div>
            <div className="flex-none col-span-2">asdfg</div>
          </div>
          <div className="rounded-lg  h-full grid grid-cols-5 my-5 ">
            <img
              src="https://www.ghibli.jp/images/kazetachinu.jpg"
              alt=""
              className="object-scale-down h-40 w-96"
            />
            <div className="flex-none col-span-2">
              <h1 className=" text-2xl">The Wind Rises</h1>
              <p>
                A lifelong love of flight inspires Japanese aviation engineer
                Jiro Horikoshi (Hideaki Anno), whose storied career includes the
                creation of the A6M World War II fighter plane.
              </p>
            </div>
            <div className="flex-none col-span-2">asdfg</div>
          </div>
          <div className="rounded-lg  h-full grid grid-cols-5 my-5 ">
            <img
              src="https://www.ghibli.jp/images/kazetachinu.jpg"
              alt=""
              className="object-scale-down h-40 w-96"
            />
            <div className="flex-none col-span-2">
              <h1 className=" text-2xl">The Wind Rises</h1>
              <p>
                A lifelong love of flight inspires Japanese aviation engineer
                Jiro Horikoshi (Hideaki Anno), whose storied career includes the
                creation of the A6M World War II fighter plane.
              </p>
            </div>
            <div className="flex-none col-span-2">asdfg</div>
          </div>

          <div className="h-min">pagination</div>
        </div>
      </div>
    </div>
  );
}

export default App;
