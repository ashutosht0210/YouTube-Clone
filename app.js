const videos = [
  {
    title: "I Built a Full Stack App in 24 Hours",
    channel: "Fireship",
    views: "2.3M views",
    time: "3 days ago",
    thumbnail: "https://picsum.photos/seed/1/400/225"
  },
  {
    title: "CSS Grid in 20 Minutes",
    channel: "Kevin Powell",
    views: "890K views",
    time: "1 week ago",
    thumbnail: "https://picsum.photos/seed/2/400/225"
  },
  {
    title: "JavaScript Async/Await Explained",
    channel: "Traversy Media",
    views: "1.5M views",
    time: "2 weeks ago",
    thumbnail: "https://picsum.photos/seed/3/400/225"
  },
  {
    title: "I Tried Building YouTube in a Day",
    channel: "CodeWithMe",
    views: "450K views",
    time: "5 days ago",
    thumbnail: "https://picsum.photos/seed/4/400/225"
  },
  {
    title: "React vs Vue vs Angular in 2026",
    channel: "Theo",
    views: "3.1M views",
    time: "1 month ago",
    thumbnail: "https://picsum.photos/seed/5/400/225"
  },
  {
    title: "How the Internet Actually Works",
    channel: "Kurzgesagt",
    views: "7.8M views",
    time: "2 months ago",
    thumbnail: "https://picsum.photos/seed/6/400/225"
  },
  {
    title: "Building a REST API with Node.js",
    channel: "Dev Ed",
    views: "620K views",
    time: "3 weeks ago",
    thumbnail: "https://picsum.photos/seed/7/400/225"
  },
  {
    title: "Why Most Developers Fail at CSS",
    channel: "Kevin Powell",
    views: "1.1M views",
    time: "4 days ago",
    thumbnail: "https://picsum.photos/seed/8/400/225"
  },
  {
    title: "Git & GitHub Crash Course 2026",
    channel: "Traversy Media",
    views: "980K views",
    time: "6 days ago",
    thumbnail: "https://picsum.photos/seed/9/400/225"
  }
]

const videoSection = document.querySelector('.video-section')

videos.forEach(video => {
  videoSection.innerHTML += `
    <div class="video glow-dark">
        <img class="thumbnail" src=${video.thumbnail}>
        <div class="title">
            <div class="channel-logo">
                <div class="channel-user">
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
            <div class="text">
                <div class="video-name">${video.title}</div>
                <div class="channel-name">${video.channel}</div>
                <div class="views">${video.views} • ${video.time}</div>
            </div>
            <div class="channel-logo">
                <div class="three-dots glow">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            
        </div>
    </div>
  `
})