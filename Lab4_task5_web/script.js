$(document).ready(function() {
    let rotationAngle = 0;

    // Hàm xoay hình
    function rotateImage() {
        rotationAngle += 15; // Tăng góc xoay thêm 15 độ
        $('#rotatingImage').css('transform', `rotate(${rotationAngle}deg)`);
    }

    // Gọi hàm xoay mỗi 2 giây
    setInterval(rotateImage, 2000);
});
