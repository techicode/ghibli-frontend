const MovieRow = () => {

  return (
    <div className="rounded-lg  h-full grid grid-cols-5 my-5 ">
    <img
      src="https://www.ghibli.jp/images/kazetachinu.jpg"
      alt=""
      className="object-scale-down h-40 w-96"
    />
    <div class="sm:col-span-2">
      <ul class="flex gap-1">
        <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
          Notice
        </li>

        <li class="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
          Information
        </li>
      </ul>

      <h1 className=" text-2xl text-gray-800">The Wind Rises</h1>

      <p className="text-gray-700">
        A lifelong love of flight inspires Japanese aviation engineer
        Jiro Horikoshi (Hideaki Anno), whose storied career includes the
        creation of the A6M World War II fighter plane.
      </p>
    </div>
    <div className="flex-none col-span-2">
      <strong class="inline-flex items-center gap-2 px-5 py-2 bg-very-light-pink rounded-full">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="object-cover w-12 h-12 -ml-2 rounded-full"
        />
        <ul class="flex-col gap-1">
          <li class="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-eggsheld rounded-full">
            Director
          </li>
          <li class="text-xl px-3 py-1 font-medium text-gray-900">
            Eric Frusciante
          </li>
        </ul>
      </strong>
      <strong class="inline-flex items-center gap-2 px-5 py-2 bg-eggsheld rounded-full">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="object-cover w-12 h-12 -ml-2 rounded-full"
        />

        <ul class="flex-col gap-1">
          <li class="inline-block px-3 py-1 text-xs font-semibold text-gray-500 bg-very-light-pink rounded-full">
            Producer
          </li>
          <li class="text-xl px-3 py-1 font-medium text-gray-900">
            Eric Frusciante
          </li>
        </ul>
      </strong>
    </div>
  </div>
  
  )
}

export default MovieRow;