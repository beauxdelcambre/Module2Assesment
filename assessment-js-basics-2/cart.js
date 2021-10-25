///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]




const summedPrice = (num1, num2, num3, reduced) => num1 + num2 + num3;

const orderTotal = summedPrice(9.99,8.99,7.99, summedPrice)

console.log(orderTotal)


// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 
    */

   const calcFinalPrice = [
    {
        cartTotal: 26.97,
        tax: .07,
        couponValue: 5.00
    } 
   ]
   
    const totalTax = (cartTotal, tax) => cartTotal * tax;
    console.log(totalTax(26.97, .07))

    const totalWithTax = (totalTax, cartTotal) => totalTax + cartTotal;
    console.log(totalWithTax(26.97, 1.89))

    const finalNumber = (totalWithTax, couponValue) =>
totalWithTax - couponValue;
console.log(finalNumber(28.86, 5.00))

    
        
    
    
    
    
   
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
//properties for cart object: 
name: to know whos order it is, 
order time: to know what time they ordered,
order number: to know which order it is, 
order: to know what they ordered

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {

    customerName: "Jake",
    orderTime: "7:30",
    orderNumber: 234,
    order: "Pizza, Soup, and an Italian Soda"
    
}
// console.log(customer)