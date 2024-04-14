document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('.message-form');
    const messageInput = document.querySelector('.message-input');
    const chatContent = document.querySelector('.chat-content');
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.querySelector('.like-count');
    const newReelButton = document.querySelector('.new-reel-button');
    const newChatButton = document.querySelector('.new-chat-button');
    const recentChats = document.querySelector('.recent-chats');

    let reels = [];

    // Add message functionality
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message.length > 0) {
            addMessage(message, 'outgoing');
            messageInput.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    });

    // Add message function
    function addMessage(text, type) {
        const message = document.createElement('div');
        message.classList.add('message', type);

        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const messageText = document.createElement('span');
        messageText.classList.add('message-text');
        messageText.textContent = text;
        bubble.appendChild(messageText);

        message.appendChild(bubble);
        chatContent.appendChild(message);
    }

    // Add like functionality
    function addLikeButton(reel) {
        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = 'Like';

        const likeCount = document.createElement('div');
        likeCount.classList.add('like-count');
        likeCount.textContent = '0';

        likeButton.appendChild(likeCount);
        reel.appendChild(likeButton);

        likeButton.addEventListener('click', () => {
            reel.likeCount++;
            likeCount.textContent = reel.likeCount;
            likeHeartContainer.classList.add('active');
            setTimeout(() => {
                likeHeartContainer.classList.remove('active');
            }, 500);
        });
    }

    // Add new reel functionality
    newReelButton.addEventListener('click', () => {
        const reel = document.createElement('div');
        reel.classList.add('reel');
        reel.likeCount = 0;
        reels.push(reel);

        const video = document.createElement('video');
        video.src = '1.mp4';
        video.controls = true;
        video.width = '180';
        video.height = '240';
        reel.appendChild(video);

        addLikeButton(reel);

        chatContent.scrollTop = chatContent.scrollHeight;
    });

    function addReel() {
        const reel = document.createElement('div');
        reel.classList.add('reel');
        reel.likeCount = 0;
        reels.push(reel);

        const video = document.createElement('video');
        video.src = 'reel.mp4';
        video.controls = true;
        video.width = '180';
        video.height = '240';
        reel.appendChild(video);

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.textContent = 'Like';
        reel.appendChild(likeButton);

        const likeCount = document.createElement('div');
        likeCount.classList.add('like-count');
        likeCount.textContent = '0';
        reel.appendChild(likeCount);

        chatContent.appendChild(reel);

        likeButton.addEventListener('click', () => {
            reel.likeCount++;
            likeCount.textContent = reel.likeCount;
            likeHeartContainer.classList.add('active');
            setTimeout(() => {
        });
});
}     