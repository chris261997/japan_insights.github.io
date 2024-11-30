document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '300px';
            img.style.maxHeight = '300px';
            document.getElementById('preview').innerHTML = '';
            document.getElementById('preview').appendChild(img);

            // Set up the download button
            const downloadButton = document.getElementById('downloadButton');
            downloadButton.style.display = 'block';
            downloadButton.onclick = function() {
                const link = document.createElement('a');
                link.href = e.target.result;
                link.download = file.name;
                link.click();
            };
        };

        reader.readAsDataURL(file);
    }
});
