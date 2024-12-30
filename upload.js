let db;

// Open or create IndexedDB
const request = indexedDB.open("ImageDatabase", 1);

request.onerror = function(event) {
    console.log("Database error: " + event.target.errorCode);
};

// Create object store if the database is created for the first time
request.onupgradeneeded = function(event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("images", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("image", "image", { unique: false });
};

// Function to store the image in IndexedDB
function storeImage(imageData) {
    const transaction = db.transaction(["images"], "readwrite");
    const objectStore = transaction.objectStore("images");
    const newImage = {
        image: imageData
    };
    objectStore.add(newImage);
    transaction.oncomplete = function() {
        console.log("Image stored successfully.");
        displayImages(); // Refresh image gallery after adding
    };
    transaction.onerror = function(event) {
        console.log("Error storing image: ", event.target.error);
    };
}

// Function to display images from IndexedDB
function displayImages() {
    const objectStore = db.transaction("images").objectStore("images");
    const request = objectStore.getAll();

    request.onsuccess = function(event) {
        const images = event.target.result;
        const galleryDiv = document.getElementById("imageGallery");
        galleryDiv.innerHTML = ""; // Clear previous gallery
        images.forEach(function(image) {
            const imgElement = document.createElement("img");
            imgElement.src = image.image;
            galleryDiv.appendChild(imgElement);
        });
    };
}

// Function to preview the uploaded image and store it
document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    // When file is read, display and store it
    reader.onload = function(e) {
        const imgElement = document.createElement("img");
        imgElement.src = e.target.result;
        const previewDiv = document.getElementById("imagePreview");
        previewDiv.innerHTML = ""; // Clear previous preview
        previewDiv.appendChild(imgElement);
        
        // Store the image in IndexedDB
        storeImage(e.target.result);
    };

    if (file) {
        reader.readAsDataURL(file); // Read file as Data URL
    }
});

// Wait until the IndexedDB is ready
request.onsuccess = function(event) {
    db = event.target.result;

    // Clear all data in the database on page load
    const transaction = db.transaction(["images"], "readwrite");
    const objectStore = transaction.objectStore("images");
    objectStore.clear(); // Clear all images stored in the object store

    transaction.oncomplete = function() {
        console.log("All images cleared from database.");
        displayImages(); // Display images (empty gallery after clearing)
    };

    transaction.onerror = function(event) {
        console.log("Error clearing images: ", event.target.error);
    };
};
