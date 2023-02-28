console.log("person1 : shows ticket");
console.log("person2 : shows ticket");

const preMovie=async()=>{

    const wifebringingTickets = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`ticket`);
        },3000)
    })

    const getPopcorn = new Promise ((resolve, reject)=>{
        resolve(`popcorn`);
    })

    const getbutter = new Promise((resolve, reject)=>{
        resolve(`butter`);
    })

    const getcolddrink = new Promise((resolve, reject)=>{
        resolve(`cooldrink`);
    })

    let ticket = await wifebringingTickets;

    console.log(`wife : i have the ${ticket}`);
    console.log("husband : lets go in now");
    console.log("wife : no, i am hungry");

    let popcorn = await getPopcorn;

    console.log(`husband : i got some ${popcorn}`);
    console.log("husband : lets go in now");
    console.log("wife : no, i need some butter on popcorn");

    let butter = await getbutter;

    console.log(`husband : i got ${butter}`);
    console.log("husband : lets go in now");
    console.log("wife : i need cold drink");

    let coldDrink = await getcolddrink;

    console.log(`husband : i got  ${coldDrink}`);
    console.log("husband : lets go in now");
    console.log("wife : ok, thanks");
    console.log("*shessh* finally");


    return ticket;

}



preMovie().then((m)=> console.log(`person3 : shows ${m}`));

console.log("person4 : shows ticket");
console.log("person5: shows ticket");