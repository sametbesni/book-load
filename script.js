let progress = 0;
const progressBar = document.querySelector('.progress-bar');
const statusText = document.querySelector('.status');

const interval = setInterval(() => {
    if (progress < 100) {
        progress += 1; 
        progressBar.style.width = progress + '%';
        statusText.textContent = `İndirme: ${progress}%`;
    } else {
        clearInterval(interval);
    }
}, 100);