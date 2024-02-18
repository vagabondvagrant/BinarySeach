import React, { useState } from 'react';

const BinarySearch = () => {
  const [array, setArray] = useState<number[]>([]);
  const [target, setTarget] = useState<number | null>(null);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [searchHistory, setSearchHistory] = useState<number[]>([]);
  const [left, setLeft] = useState<number | null>(null);
  const [right, setRight] = useState<number | null>(null);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    newArray.sort((a, b) => a - b);
    setArray(newArray);
    setTarget(null);
    setResultIndex(null);
    setError(null);
    setCurrentStep(null);
    setSearchHistory([]);
    setLeft(null);
    setRight(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTarget(value === '' ? null : Number(value));
    setError(null);
  };

  const binarySearch = () => {
    if (array.length === 0 || target === null) {
      setError('Please enter a target number.');
      return;
    }

    let left = 0;
    let right = array.length - 1;

    const history: number[] = [];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = array[mid];
      setCurrentStep(mid);

      history.push(mid);

      if (midValue === target) {
        setResultIndex(mid);
        setError(null);
        setCurrentStep(null);
        setSearchHistory(history);
        return;
      } else if (midValue < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setResultIndex(null);
    setError(`Target ${target} not found.`);
    setCurrentStep(null);
    setSearchHistory(history);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Binary Search</h1>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <button
            className="bg-gray-700 text-white px-2 py-2 rounded-md mb-2 md:mb-0 md:mr-2"
            onClick={generateRandomArray}
          >
            Generate Random Array
          </button>
          <input
            type="text"
            className="border-gray-300 border rounded-md py-1 px-2 mb-2 md:mb-0 md:mr-2"
            placeholder="Enter target number"
            onChange={handleInputChange}
          />
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-md"
            onClick={binarySearch}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {array.map((num, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center relative rounded-full border-4 ${
                resultIndex === index ? 'border-yellow-300 bg-blue-500' : 'border-gray-300 bg-gray-200'
              }`}
            >
              <span className={`text-sm font-bold ${resultIndex === index ? 'text-white' : 'text-gray-800'}`}>{num}</span>
              {index === currentStep && <span className="absolute top-full text-xs text-gray-500">{index}</span>}
              {index === left && <span className="absolute top-0 left-0 text-xs text-red-500">L</span>}
              {index === right && <span className="absolute top-0 right-0 text-xs text-green-500">R</span>}
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {resultIndex !== null && (
          <p className="mt-4">
            Target {array[resultIndex]} found at index {resultIndex}.
          </p>
        )}
        {searchHistory.length > 0 && (
          <div className="mt-4">
            <p>Search History:</p>
            <ul className="list-disc list-inside">
              {searchHistory.map((index, i) => (
                <li key={i}>{index}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BinarySearch;
