function validateForm() {
    // Thêm logic kiểm tra dữ liệu form ở đây
    var email = document.forms["myForm"]["email"].value;
    var sdt = document.forms["myForm"]["sdt"].value;
    var code = document.forms["myForm"]["code"].value;
    var gop_y = document.forms["myForm"]["gop_y"].value;

    // Kiểm tra email có hợp lệ không (đơn giản)
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return false;
    }

    // Kiểm tra sdt và code có là số không (đơn giản)
    if (isNaN(sdt) || isNaN(code)) {
        alert("Vui lòng nhập số cho SĐT và Mã khách hàng.");
        return false;
    }

    // Kiểm tra các điều kiện khác tùy ý

    return true;
}

function submit_form() {
    // Thêm logic gửi form ở đây
    // Bạn có thể sử dụng AJAX để gửi form mà không làm tải lại trang
    alert("Form đã được gửi thành công!");
}