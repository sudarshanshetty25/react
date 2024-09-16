const add =(a,b)=>a+b;
console.log(add(30,20));

class cart{
    constructor(){
        this.items = ['apple','orange','banana'];

    }
    showItems(){
        // this.items.forEach(function(item)){
        //     console.log(this);

        this.items.forEach((item) => {
            console.log(this);
        });
        }
    }

    const c=new cart();
    c.showItems();

    const username="sudarshan";
    const greeting=`hello , ${username}! Welcome to Alvas training program`;
    console.log(greeting);
   

    function formatCurrency(Strings,Amount){
        const formatAmmount=`$${parseFloat(Amount).toFixed(2)}`
        return `${Strings[0]} ${formatAmmount}`;
        
        
    }