function categories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategorie(data.categories))
}
categories()

function displayCategorie(categories){
    const btnContainer = document.getElementById('btn-container')
    for(const categorie of categories){
        const newBtn = document.createElement("div")
        newBtn.innerHTML=` 
        <button class="btn btn-md bg-white text-black hover:bg-[#FF1F3D] hover:text-white transition-all duration-300">${categorie.category}</button>`
        btnContainer.append(newBtn)
    }
}

// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// authors: [{…}]
// category_id: "1001"
// description: "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others:  {views: '100K', posted_date: '16278'}
// thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg"
// title: "Shape of You"
// video_id: "aaaa"

function videos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res=>res.json())
    .then(data=>displayVideo(data.videos))
}
videos()

function displayVideo(videos){
    const videoContainer = document.getElementById("video")
    for (const video of videos){
        console.log(video)
        const newVideo = document.createElement("div")
        newVideo.innerHTML=`
        <div class="bg-base-100 ">
            <figure class="relative">
                <img class="rounded-xl w-full h-50 object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 bg-black p-2 rounded-xl ml-44 text-white">3hrs 56min ago</span>
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