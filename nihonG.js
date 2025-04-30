window.onload = function() {
    const galleryData = JSON.parse(localStorage.getItem('galleryData')) || [];
    const galleryElement = document.getElementById('gallery');

    galleryData.forEach((item, index) => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('gallery-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = item.image;  // Image source (base64 or URL)
        img.alt = item.description;

        // Create the description paragraph
        const description = document.createElement('p');
        description.textContent = item.description;

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.addEventListener('click', function() {
            const newDescription = prompt("Edit image description:", item.description);
            if (newDescription && newDescription !== item.description) {
                item.description = newDescription;
                description.textContent = newDescription;
                updateLocalStorage(galleryData);
            }
        });

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', function() {
            const confirmDelete = confirm("Are you sure you want to delete this image?");
            if (confirmDelete) {
                galleryData.splice(index, 1); // Remove the item from the galleryData array
                updateLocalStorage(galleryData); // Update localStorage
                galleryElement.removeChild(imageElement); // Remove the image from the DOM
            }
        });

        // Append the image and description to the gallery item
        imageElement.appendChild(img);
        imageElement.appendChild(description);
        imageElement.appendChild(editButton);
        imageElement.appendChild(deleteButton);

        // Append the gallery item div to the gallery
        galleryElement.appendChild(imageElement);
    });

    // Function to update localStorage with the new galleryData
    function updateLocalStorage(data) {
        localStorage.setItem('galleryData', JSON.stringify(data));
    }
};
