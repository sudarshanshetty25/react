const todo=["Buy gropceries","Complete Assignments","Prepare for placements"];//structuring of object
//destructuring of object to extract individual item
const [firstTask,secondTask,thirdTask]=todo;
console.log(firstTask);
console.log(secondTask);
console.log(thirdTask);

const product={name:"Laptop",price:35000,brand:"Apple"};
const {name,price,brand}=product;
console.log(name);
console.log(price);
console.log(brand);

//destructuring with default values
const user={uname:"varshith",age:19};
const {uname,age,email="No email provided"}=user;
console.log(uname);
console.log(age);
console.log(email);

const responce={
    status:200,
    data:{
        user:{
            usnName:"varshith",
            address:{
                city:"udupi",
                country:"India",
            }
        } 
        
    }
};

const { status, data: { user: { usrName, address: { city, country } } } } = responce;
console.log(usrName); 
console.log(city);    
console.log(country);