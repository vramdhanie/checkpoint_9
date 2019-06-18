const costs = {
  'Building Permit': 4264,
  Impact: 3165,
  'Water and Sewer Inspection': 3761,
  'Excavation and foundation': 15878,
  Steel: 1637,
  Framing: 34805,
  Sheathing: 3869,
  Windows: 6236,
  'Exterior doors': 1930,
  'Interior doors': 3356,
  Stairs: 1676,
  Roof: 8472,
  Siding: 12858,
  Gutters: 949,
  Plumbing: 11753,
  Electrical: 8309,
  'Lighting fixtures': 2372,
  HVAC: 8860,
  Insulation: 3332,
  Drywall: 11332,
  Painting: 7638,
  Cabinets: 12444,
  Appliances: 3583,
  Tiles: 11436,
  Trim: 7394,
  Landscaping: 7088,
  'Wood deck': 1948,
  Driveway: 3083,
  Other: 19085
};

/**
 * Write the objectForEach function here
 */
function objectForEach(obj, callback) {
  for (const key in obj) {
    callback(obj[key]);
  }
}

/**
 * Write a function named objectSum as a callback for forEach
 * that sums the value in the object and stores the result in
 * the variable named totalCost.
 */

let totalCost = 0;

/**
 * Write object Sum here
 */
function objectSum(value) {
  totalCost += value;
}

/**
 * Invoke objectForEach with objectSum here
 */
objectForEach(costs, objectSum);

/**
 * Write the function named objectMap here
 */

function objectMap(obj, callback) {
  const result = {};
  for (key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;
}

/**
 * Write the function named usToUk here
 */
function usToUk(us) {
  return us * 0.79;
}
