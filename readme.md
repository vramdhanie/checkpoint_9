# Callback Drills

## Instructions

Download this repository of code and open it in Visual Studio Code.

Start your Live Server and open the file _index.html_ in the browser using Live Server.

Alternatively you may just open the _index.html_ file in your browser without Live Server.

Open the file _index.js_ in your Visual Studio Code editor and write the solutions to the drills. As fast as you write the solutions you will see the tests passing on the HTML file in the browser.

### Task 1

Consider the following object that represent a breakdown of costs for building a house in US dollars. This object may be used for testing the next few questions.

```JS
const costs = {
    "Building Permit": 4264,
    "Impact": 3165,
    "Water and Sewer Inspection": 3761,
    "Excavation and foundation": 15878,
    "Steel": 1637,
    "Framing": 34805,
    "Sheathing": 3869,
    "Windows": 6236,
    "Exterior doors": 1930,
    "Interior doors": 3356,
    "Stairs": 1676,
    "Roof": 8472,
    "Siding": 12858,
    "Gutters": 949,
    "Plumbing": 11753,
    "Electrical": 8309,
    "Lighting fixtures": 2372,
    "HVAC": 8860,
    "Insulation": 3332,
    "Drywall": 11332,
    "Painting": 7638,
    "Cabinets": 12444,
    "Appliances": 3583,
    "Tiles": 11436,
    "Trim": 7394,
    "Landscaping": 7088,
    "Wood deck": 1948,
    "Driveway": 3083,
    "Other": 19085,
};
```

1. Objects in JavaScript also do not have a `forEach()` method. Write a new function named `objectForEach()` that accepts an object and a callback function. Apply the callback function to each value in the object. The callback function accepts a single value and performs some action with and returns `undefined`. For example, to print each value in the console we could invoke `objectForEach() like this:

   ```JS
     function printValue(value) {
         console.log(value);
     }

     objectForEach(costs, printValue);
   ```

2. Use the `objectForEach()` function to calculate the total cost of building the house. Write a callback function named `objectSum()` to help.

3. Objects in JavaScript do not have a `map()` method like the Array does. Suppose we wanted to take an object, perform some operation on each of the values stored in the object and create a new object with the transformed values. Write a function named `objectMap()` that accepts an object and a callback function. Apply the callback function to each of the values in the given object and return a new object with the same keys as the original object but with transformed values.

4. You wish to send the building costs object to a friend in the UK but you need to convert all the costs into British Pounds before you send it. Use your `objectMap()` function to create a new object with the same keys but all costs converted into Pounds. You may use the conversion rate of \$1 == £0.79 or simply look up the current exchange rate and use that. Write a function named `usToUk()` that can work as a callback in `objectMap()`.
