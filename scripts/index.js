function removeActiveClass (){
    const activeBtn = document.getElementsByClassName("active")
    for (let btn of activeBtn){
       btn.classList.remove("active")
    }
}

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
        removeActiveClass()
        const clickedBtn = document.getElementById(`btn-${ID}`)
        clickedBtn.classList.add("active")
        displayVideo(data.category)
    })
}

function displayCategorie(categories){
    const btnContainer = document.getElementById('btn-container')
    for(const categorie of categories){
        const newBtn = document.createElement("div")
        newBtn.innerHTML=` 
        <button id="btn-${categorie.category_id}" onclick = "loadVideosByCategory(${categorie.category_id})" class=" btn btn-md bg-white text-black hover:bg-[#FF1F3D] hover:text-white">${categorie.category}</button>`
        // newBtn.onclick = () =>{
        //     loadVideosByCategory(categorie.category_id)
        // }
        btnContainer.append(newBtn)
    }
}

function loadVideoDetails(videoId){
    console.log(videoId)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
    .then(res=>res.json())
    .then(data=>{
        displayVideoDetails(data.video)
    })
}

const displayVideoDetails = (video) =>{
     console.log(video)
     document.getElementById("video_details").showModal()
     const modalContainer = document.getElementById("modal-container")
     modalContainer.innerHTML = `
     <div class="card bg-base-100">
  <figure>
    <img class="object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl font-bold">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Play</button>
    </div>
  </div>
</div>`
}



function videos(searchText = ""){
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then(res=>res.json())
    .then(data=>{
        removeActiveClass()
        document.getElementById("btn-all").classList.add("active")
        displayVideo(data.videos)
    })
}


function displayVideo(videos){
    const videoContainer = document.getElementById("video")
    videoContainer.innerHTML = ""
    if (videos.length==0){
        videoContainer.innerHTML =`<div class="flex flex-col col-span-full items-center justify-center text-center py-20">
        <img src="Icon.png" alt="">
        <p class="text-2xl font-bold">Oops!! Sorry, There is no content here</p>
    </div>`
    }
    for (const video of videos){
        const newVideo = document.createElement("div")
        newVideo.innerHTML=`
        <div class="bg-base-100 grid">
            <figure class="relative">
                <img class="rounded-xl w-full h-50 object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 bg-black p-2 rounded-xl right-2 text-white">3hrs 56min ago</span>
            </figure>

            <div class="flex gap-10 items-center px-0 py-5">

                <div class="profile">
                    <img class="rounded-full w-12 h-12 object-cover"
                        src="${video.authors[0].profile_picture}" />
                </div>
                <div class="Intro">
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    <p class="text-gray-400 flex gap-2">${video.authors[0].profile_name}
                    ${video.authors[0].verified===true ?
                        `<img class="w-6" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"
                            alt=""></img>` : ''}
        
                    </p>
                    <p class="text-gray-400">${video.others.views}</p>
                </div>
            </div>
            <button onclick= "loadVideoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>
        </div>`
        videoContainer.append(newVideo)
    }
}

document.getElementById('search-input').addEventListener("keyup",(event)=>{
    console.log(event.target.value)
    videos(event.target.value)
})