function categories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategorie(data.categories))
}
categories()

function loadVideosByCategory(ID){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${ID}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        displayVideo(data.category)
    })
}

function displayCategorie(categories){
    const btnContainer = document.getElementById('btn-container')
    for(const categorie of categories){
        const newBtn = document.createElement("div")
        newBtn.innerHTML=` 
        <button class="btn btn-md bg-white text-black hover:bg-[#FF1F3D] hover:text-white transition-all duration-300">${categorie.category}</button>`
        newBtn.onclick = () =>{
            loadVideosByCategory(categorie.category_id)
        }
        btnContainer.append(newBtn)
    }
}


function videos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        displayVideo(data.videos)
    })
}


function displayVideo(videos){
    const videoContainer = document.getElementById("video")
    videoContainer.innerHTML = ""
    for (const video of videos){
        // console.log(video)
        const newVideo = document.createElement("div")
        newVideo.innerHTML=`
        <div class="bg-base-100 ">
            <figure class="relative">
                <img class="rounded-xl w-full h-50 object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 bg-black p-2 rounded-xl right-2 text-white">3hrs 56min ago</span>
            </figure>

            <div class="flex gap-10 items-center px-0 py-5">

                <div class="profile">
                    <img class="rounded-full w-12 "
                        src="${video.authors[0].profile_picture}" />
                </div>
                <div class="Intro">
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    <p class="text-gray-400 flex gap-2">${video.authors[0].profile_name}
                        <img class="w-6" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                            alt="">
                    </p>
                    <p class="text-gray-400">${video.others.views}</p>
                </div>
            </div>
        </div>`
        videoContainer.append(newVideo)
    }
}