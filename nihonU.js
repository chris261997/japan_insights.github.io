// Handle form submission for image upload
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    // Get the file and description input
    const fileInput = document.getElementById('image');
    const descriptionInput = document.getElementById('description');
    const file = fileInput.files[0];
    const description = descriptionInput.value;

    // Convert the image file to base64
    const reader = new FileReader();
    reader.onloadend = function() {
        // Store image data and description in localStorage
        const imageData = reader.result; // base64 image data
        const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];

        // Add new image and description to the gallery data array
        galleryData.push({ image: imageData, description: description });

        // Save the updated data back to localStorage
        localStorage.setItem('galleryData', JSON.stringify(galleryData));

        // Clear the form fields
        fileInput.value = '';
        descriptionInput.value = '';
        alert('Image uploaded successfully!');
    };
    reader.readAsDataURL(file); // Convert image to base64
});
