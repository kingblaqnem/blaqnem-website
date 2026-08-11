const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));

// =============================
// SMART STREAM MODAL
// =============================

const openButtons = document.querySelectorAll(".open-stream");

const modal = document.getElementById("streamModal");

const closeModal = document.querySelector(".close");

const spotifyLink = document.querySelector(".spotify-link");
const appleLink = document.querySelector(".apple-link");
const audiomackLink = document.querySelector(".audiomack-link");
const youtubeLink = document.querySelector(".youtube-link");

const songs = {

    lucy: {

        spotify: "https://open.spotify.com/track/5BRr8ajyxiRVK3EdYIlrRg?si=ixPIKKF8R-WnXPN4rMnoSQ&utm_source=copy-link&context=spotify%3Aalbum%3A4oD45LwytpuUiNJn2IoalT",

        apple: "https://music.apple.com/ng/album/lucy-feat-boyxina/6798807932?i=6798807933",

        audiomack: "https://audiomack.com/blaqnem/song/lucy-feat-boyxina?share-user-id=75347139",

        youtube: "https://youtube.com/playlist?list=OLAK5uy_mY_p7MtJFu4_W_Nv6LJTwLWILok0xUzQ8&si=sRyj2Ai_E7PRx9ua"

    },

    packnleave: {

        spotify: "https://open.spotify.com/album/0LzSyJwszGYOGhlkq5b5jD?si=nw6ZjBiDT_u1OR-6iPDNsw&utm_source=copy-link",

        apple: "https://music.apple.com/ng/album/pack-n-leave-feat-ofomet/6777937281?i=6777937344",

        audiomack: "https://audiomack.com/blaqnem/song/pack-n-leave?share-user-id=75347139",

        youtube: "https://youtu.be/prjtSNmlIuk?si=l_XIklh1g_2stz3O"
        
    },

    toughest: {

    spotify: "https://open.spotify.com/track/6gv2lp9BEoJhs8R7SAMmXo?si=ac2e81f2adc7472b",

    apple: "https://music.apple.com/us/album/toughest-soldiers-single/1694215715",

    audiomack: "https://audiomack.com/blaqnem/song/blaqnem-toughest-soldiers",

    youtube: "https://youtu.be/Eg5upDYBeGc?si=dM7UICnGIUJ_0atH"

   },

   sickpain: {

    spotify: "https://open.spotify.com/track/6BVuf1EwpCD1InN1O7PUxt?si=35a5af9e6a7e4f58",

    apple: "https://music.apple.com/us/song/sick-pain/1701361562",

    audiomack: "https://audiomack.com/blaqnem/song/sick-pain",

    youtube: "https://youtu.be/cm0yvvtopAc?si=VU1gYVTzeoUZfb0W"

   },

   genesis: {

    spotify: "https://open.spotify.com/album/1RcXiKMEHCofp4TgZjVbmY?si=lWVkJVz3THyHki9e94SQXA",

    apple: "https://music.apple.com/us/album/genesis-ep/1726755845",

    audiomack: "https://audiomack.com/blaqnem/album/genesis",

    youtube: "https://www.youtube.com/watch?v=zTZK1FoThoM&list=OLAK5uy_n-CwUrGqw2zU3zOJByrngwYE8gv0oTSYE"

   },

   lettertostormzy: {

    spotify: "https://open.spotify.com/album/6JsVAIMyM5RGy5PV3slY2d?si=Cp-PUnJ2TE2uhjsQAGuN8Q",

    apple: "https://music.apple.com/us/album/letter-to-stormzy-single/1775538469",

    audiomack: "https://audiomack.com/blaqnem/song/letter-to-stormzy",

    youtube: "https://youtu.be/VHezds-wL9c?si=mBxCL5e8OFzNy9Bq"

   }

};

openButtons.forEach(button => {

    button.addEventListener("click", () => {

        const songName = button.dataset.song;

        const song = songs[songName];

        if(!song){

            console.error("Song links not found:", songName);

            return;

        }

        spotifyLink.href = song.spotify;
        appleLink.href = song.apple;
        audiomackLink.href = song.audiomack;
        youtubeLink.href = song.youtube;

        modal.style.display = "flex";

    });

});


closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});


window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});
closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});

// =============================
// GALLERY LIGHTBOX
// =============================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const lightboxClose = document.querySelector(".lightbox-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active");

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});

// ====================================
// SCROLL REVEAL
// ====================================

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1800);

});

