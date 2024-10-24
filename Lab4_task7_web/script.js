document.addEventListener('DOMContentLoaded', function() {
    const buttonGrid = document.getElementById('buttonGrid');
    let nextNumber = 1; // Số tiếp theo mà người dùng cần nhấn

    // Tạo các button từ 1 đến 64
    for (let i = 1; i <= 64; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.dataset.number = i; // Lưu số của button vào thuộc tính dữ liệu
        buttonGrid.appendChild(button);

        // Gắn sự kiện nhấn chuột cho từng button
        button.addEventListener('click', function() {
            const number = parseInt(this.dataset.number);

            // Kiểm tra xem người dùng có nhấn đúng số không
            if (number === nextNumber) {
                this.remove(); // Xóa nút nếu đúng
                nextNumber++; // Tăng số tiếp theo
            } else {
                alert('Bạn đã nhấn sai! Hãy thử lại.');
            }
        });
    }
});
