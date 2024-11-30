// Get elements from DOM
const slider =
document.querySelector('.image-slider');
const arrLeft =
document.querySelector('.arrow-left');
const arrRight =
document.querySelector('.arrow-right');
const heading =
document.querySelector('.caption h1');
const description =
document.querySelector('.caption p');

// Data for the slider
const images = [
    "mountain.avif", "castle.avif", "downtown.avif", "landmark.jpg", "shinkansen.avif", "onsen.jpg", "sakura.avif", "hakone.jpg", "sushi.avif", "anime.avif", "temple.avif", "bamboo.avif", "bonsai.avif"
];

const headings = [
    "Mount Fuji, Shizuoka-Yamanashi Prefecture", "Himeji Castle, Hyōgo Prefcture", "Kabukichō District, Shinjuku Ward, Tokyo", "Tokyo Tower, Minato Ward, Tokyo", "Kyushu region, Japan", "Kusatsu Onsen, Gunma Prefecture", "Tatebayashi, Gunma Prefecture", "Hakone Shrine's famous lakefront Torii gate, Kanagawa Prefecture", "Traditional Tuna Nigiri Sushi", "Background Grid displaying iconic animes produced in Japan", "Shitennō-ji Temple, Osaka", "Sagano Bamboo Forest, Kyoto", "Originating in Japan and China over a millennium ago, the art of bonsai is intricately linked to promoting relaxation and balance. It also aligns with spiritual movements like Zen Buddhism, embodying the essence of natural beauty and harmony"
];

const descriptions = [
    "View of Mt. Fuji from top of Chūrei-tō Pagoda",
    "White Heron Castle",
    "Tokyo's redlight-district",
    "The Eiffel Tower of Japan",
    "Train operator overseeing the arrival of a Shinkansen",
    "The Yubatake (湯畑, lit. 'hot water pasture')",
    "Breathtaking display of Cherry Blossom Flower during Spring",
    "Beyond this gate, God resides",
    "Japan's finest delicacy",
    "Japan's largest cultural export",
    "Temple of the 'Four Heavenly Kings'",
    "Ghost Forests of Japan",
    "The art of Bonsai",
];

// Slider ID
let id = 0;

// The Slider function
function slide(id){
    // Set the background image
    slider.style.backgroundImage =
    `url(gallery/${images[id]})`;
    // Add image fade animation
    slider.classList.add('image-fade');
    /*Remove animation after it's done,
    so it can be used again*/
    setTimeout(() => {
        slider.classList.remove('image-fade');
    }, 550);
    // Change Heading
    heading.innerText = headings[id];
    // Change Description
    description.innerText = descriptions[id];
}

// Add click event to Left Arrow
arrLeft.addEventListener('click', () => {
    // Decrement img id
    id--;
    /*Check if id is smaller than
    the number of available slides*/
    if(id < 0) {
        // Change to last image
        id = images.length - 1;
    }
    // Run the slide function
    slide(id);
});

// Add click event to right arrow
arrRight.addEventListener('click', () => {
    // Increment img id
    id++;
    /*Check if id is greater than
    the number of available slides*/
    if (id > images.length - 1) {
        // Change to first image
        id = 0;
    }
    // Run the slide function
    slide(id);
});