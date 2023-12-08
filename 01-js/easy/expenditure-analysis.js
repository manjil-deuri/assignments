/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = [];
  let filteredElement;

  transactions.forEach(element => {
    filteredElement = totalSpentByCategory.filter((item) => {
      if(item["category"] == element["category"])
       return item;
    })

    if(filteredElement.length <= 0) {
      totalSpentByCategory.push({
              "category" : element["category"],
              "totalSpent" : element["price"]
            })
    } else {
        filteredElement[0]["totalSpent"] = +filteredElement[0]["totalSpent"] + +element["price"]
    }
  });
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
