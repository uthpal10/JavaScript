let phone =
{
    Brand:'One Plus',
    Model: 'Nord2T 5G',
    details: function(a,b)
    {
        console.log(`Phone Brand is ${this.Brand} and the model is ${this.Model} and arithmetic operation value is ${a+b}`);
    }
}

let phn = {Brand:'Iphone', Model:"14 plus"}

let phn1 = {Brand:'Redmi', Model:'K21'}

phone.details.call(phn, 2, 9);
phone.details.apply(phn1, [8,6]);
let p3 = phone.details.bind(phn, 7,4);
p3();