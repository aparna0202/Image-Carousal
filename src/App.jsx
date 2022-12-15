import { useEffect, useState } from "react";
const App = () => {
  const api = `http://jsonplaceholder.typicode.com/photos`;
  const [dataSet, setDataSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setDataSet(data.slice(0, 10)));
  }, []);

  const openPreviousImage = () => {
    currentIndex === 0
      ? setCurrentIndex(dataSet.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const openNextImage = () => {
    currentIndex === dataSet.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="flex gap-8 items-center justify-center mt-80 ">
      {dataSet.length > 0 ? (
        <div className="flex gap-3 items-center">
          <button
            className="bg-slate-900 text-white h-[40px] w-[100px] hover:bg-white hover:text-slate-800 hover:border border-slate-800 "
            onClick={() => openPreviousImage()}
          >
            Previous{" "}
          </button>
          <img
            src={dataSet[currentIndex].url}
            alt="image"
            className="h-[400px] w-[400px]"
          />
          <button
            className="bg-slate-900 text-white h-[40px] w-[100px] hover:bg-white hover:text-slate-800 hover:border border-slate-800 "
            onClick={openNextImage}
          >
            Next{" "}
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
