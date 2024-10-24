document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử từ DOM
    const textA = document.getElementById('textA');
    const textB = document.getElementById('textB');
    const countButton = document.getElementById('countButton');
    const resultDiv = document.querySelector('.result');

    // Hàm để đếm số lần xuất hiện của chuỗi B trong A
    function countOccurrences(text, pattern) {
        if (pattern === '') return 0; // Trả về 0 nếu chuỗi cần tìm là rỗng

        const regex = new RegExp(pattern, 'gi'); // Tạo biểu thức chính quy để tìm kiếm không phân biệt hoa thường
        const matches = text.match(regex); // Tìm tất cả các kết quả khớp
        return matches ? matches.length : 0; // Trả về số lượng kết quả khớp
    }

    // Sự kiện khi nhấn nút Đếm
    countButton.addEventListener('click', function() {
        const text = textA.value;
        const pattern = textB.value;
        const count = countOccurrences(text, pattern);

        // Hiển thị kết quả
        resultDiv.textContent = `Số lần xuất hiện của "${pattern}": ${count}`;
    });
});
