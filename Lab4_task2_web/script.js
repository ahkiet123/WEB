// Các hệ số a, b, c của phương trình bậc II
const a = 1;  // Hệ số a
const b = -3; // Hệ số b
const c = 2;  // Hệ số c

// Tính toán nghiệm của phương trình bậc II
function solveQuadraticEquation(a, b, c) {
    // Tính Delta
    const delta = b * b - 4 * a * c;


    // Tạo thông tin về phương trình
    const equationInfo = `Phương trình bậc II: ${a}x² + ${b}x + ${c} = 0`;
    document.querySelector('.equation-info').textContent = equationInfo;

    let resultText;

    if (delta < 0) {
        // Nếu Delta < 0, phương trình vô nghiệm
        resultText = 'Phương trình vô nghiệm.';
    } else if (delta === 0) {
        // Nếu Delta = 0, phương trình có nghiệm kép
        const x = -b / (2 * a);
        resultText = `Phương trình có nghiệm kép: x = ${x.toFixed(2)}`;
    } else {
        // Nếu Delta > 0, phương trình có 2 nghiệm phân biệt
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultText = `Phương trình có 2 nghiệm phân biệt: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    }

    // Hiển thị kết quả lên trang web
    document.querySelector('.result').textContent = resultText;
}

// Gọi hàm giải phương trình
solveQuadraticEquation(a, b, c);
