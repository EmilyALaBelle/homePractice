let drinksArr = [{
    drinkName: 'Coke',
    drinkPrice: 1.50,
},
{
    drinkName: 'Lemonade',
    drinkPrice: 3.25,
},
{
    drinkName: 'Beer',
    drinkPrice: 5.00,
},
{
    drinkName: 'Apple Juice',
    drinkPrice: 3.00,
},
{
    drinkName: 'Wine',
    drinkPrice: 10.00,
},]
function sortsDrinks(drinksArr) {
    for (let i = 0; i < drinksArr.length; i++) {
        const drinks = drinksArr[i]
        console.log(drinks.drinkPrice.toFixed(2))
    }
}
sortsDrinks(drinksArr)