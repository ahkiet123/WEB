// Danh sách các lời chào ngẫu nhiên
const greetings = [
    "Chào bạn! Chúc một ngày tốt lành!",
    "Xin chào! Rất vui được gặp bạn!",
    "Chào buổi sáng! Hy vọng bạn có một ngày tuyệt vời!",
    "Chào buổi chiều! Chúc bạn một buổi chiều vui vẻ!",
    "Chào buổi tối! Chúc bạn một buổi tối ấm áp!",
    "Hello! Chào mừng bạn đến với trang web!",
    "Xin chào! Hãy tận hưởng ngày của bạn!",
    "Chào! Cảm ơn bạn đã ghé thăm!",
    "Hi! Hy vọng bạn có một trải nghiệm tuyệt vời!",
    "Chào bạn! Hôm nay bạn cảm thấy thế nào?"
];

// Hàm để chọn một lời chào ngẫu nhiên
function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

// Hiển thị lời chào lên trang web
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.querySelector('.greeting');
    greetingElement.textContent = getRandomGreeting();
});
