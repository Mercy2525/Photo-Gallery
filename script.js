
//Create and array and store an object inside of it
let images=[{
    owner:"Brownie",
    imageUrl:"https://images.pexels.com/photos/3892129/pexels-photo-3892129.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 700
},
{
    owner:"Mercy",
    imageUrl:"https://images.pexels.com/photos/7947149/pexels-photo-7947149.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 900
},
{
    owner:"Mary",
    imageUrl:"https://images.pexels.com/photos/3038552/pexels-photo-3038552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1000
},
{
    owner:"Maggy",
    imageUrl:"https://images.pexels.com/photos/4388222/pexels-photo-4388222.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1200
},
{
    owner:"Tosh",
    imageUrl:"https://images.pexels.com/photos/2814202/pexels-photo-2814202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 1300
},

]

//Sample loops (for ..of,, while,, for..in(Objects),, forEach,, do while,, map)

// we'll use (for...of) in this;



for(image of images){
   console.log(image)
   const newDiv= document.createElement('div')
   newDiv.className="card"
   newDiv.innerHTML=`
    <img src='${image.imageUrl}' alt="art from my gallery">
    <h4> ${image.owner}</h4>
    <p> Ksh ${image.price}</p> `
   let parent=document.getElementById("pic")
   parent.appendChild(newDiv)
}

//adding eventlistner(submit event in Forms)

let form= document.querySelector('#submitForm')
let newOwner= document.getElementById("owner")
let newImage= document.getElementById("imageUrl")
let price=document.getElementById("price")

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let newObject={
        owner: newOwner.value,
        imageUrl: newImage.value,
        price:price.value
    }
    console.log(newObject)

    const formDiv= document.createElement('div')
   formDiv.className="card"
   formDiv.innerHTML=`
    <img src='${newObject.imageUrl}' alt="art from my gallery">
    <h4> ${newObject.owner}</h4>
    <p> Ksh ${newObject.price}</p> `
   let parent=document.getElementById("pic")
   parent.appendChild(formDiv)

   form.reset()
})



