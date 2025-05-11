function categories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategorie(data.categories))
}
categories()

function displayCategorie(categories){
    const btnContainer = document.getElementById('btn-container')
    for(const categorie of categories){
        console.log(categorie)
        const newBtn = document.createElement("div")
        newBtn.innerHTML=` 
        <button class="btn btn-md bg-white text-black hover:bg-[#FF1F3D] hover:text-white transition-all duration-300">${categorie.category}</button>`
        btnContainer.append(newBtn)
    }
}