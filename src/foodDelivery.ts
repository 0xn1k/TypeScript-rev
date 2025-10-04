// creating a food delivery system

interface FoodItem {
    id: number ;
    name : string;
    price : number;
    category : string;
}

interface DiscountFn{
    (item : string , discountRate : number):number;
}

interface  Delivery{
    deliver(address : string):string;
}



const burger : FoodItem = {
    id: 1,
    name : "Cheese Burger",
    price : 130,
    category : "Fast Food"
}

const applyDiscount : DiscountFn = (item: string , discountRate : number): number => {
    if(item === "Cheese Burger" && discountRate > 0 && discountRate <= 100){
        return burger.price - (burger.price * discountRate / 100);
    }
    return burger.price;
}

console.log(applyDiscount("Cheese Burger", 10));

class ZomatoDelivery implements Delivery{
    deliver(address: string): string {
        return `Your order will be delivered to ${address} in 30 minutes.`; 
    }


}


const d: Delivery = new ZomatoDelivery();
console.log(d.deliver("123 Main St, Cityville"));
