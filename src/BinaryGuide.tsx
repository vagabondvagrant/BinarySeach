
const BinarySearchGuide = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 animate-fadein">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center mb-8 animate-pulse">Guide to Binary Search</h1>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 animate-slidein">
          <div className="md:w-1/2 md:ml-8 animate-fadein">
            <p className="text-xl mb-4 animate-slidein">
              Binary search is a powerful algorithm used to efficiently find a target value within a sorted array.
            </p>
            <p className="text-xl mb-4 animate-slidein">
              It works by repeatedly dividing the search interval in half until the target value is found (or determined to not be in the array).
            </p>
            <p className="text-xl mb-4 animate-slidein">
              Here's how it works:
            </p>
            <ol className="list-decimal pl-6 animate-slidein">
              <li className="text-lg mb-2">Start with the entire sorted array.</li>
              <li className="text-lg mb-2">Compare the target value with the middle element of the array.</li>
              <li className="text-lg mb-2">If the target value matches the middle element, the search is complete.</li>
              <li className="text-lg mb-2">If the target value is less than the middle element, repeat the search on the left half of the array.</li>
              <li className="text-lg mb-2">If the target value is greater than the middle element, repeat the search on the right half of the array.</li>
              <li className="text-lg mb-2">Continue dividing the search interval in half until the target value is found or the interval is empty.</li>
            </ol>
          </div>
        </div>
        <div className="text-center mb-8 animate-bounce">
          <h2 className="text-2xl font-semibold mb-4">Python Code Example:</h2>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto animate-slidein">
            <code className="text-sm text-gray-800">
              {`
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2
        mid_value = arr[mid]

        if mid_value == target:
            return mid
        elif mid_value < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

# Example usage:
sorted_array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
target_element = 12
index = binary_search(sorted_array, target_element)

if index != -1:
    print(f"Target element {target_element} found at index {index}.")
else:
    print(f"Target element {target_element} not found in the array.")
              `}
            </code>
          </pre>
        </div>
        <div className="text-center animate-ping">
          <p className="text-xl animate-bounce">
            Now that you understand the basics of binary search, you can start using it to efficiently search sorted arrays!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BinarySearchGuide;
