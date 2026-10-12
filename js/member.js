// Xử lý khi bấm Đăng nhập / Đăng ký
function dangNhap() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    
    if (email === "" || !email.includes("@")) {
        alert("Vui lòng nhập địa chỉ email hợp lệ!");
        return;
    }
    if (pass === "") {
        alert("Vui lòng nhập mật khẩu!");
        return;
    }
    
    // Ẩn khu vực khách, hiện khu vực hội viên
    document.getElementById("khu-khach").style.display = "none";
    document.getElementById("khu-hoivien").style.display = "block";
    alert("Đăng nhập thành công! Chào mừng hội viên quay lại MiniMart.");
}

// Xử lý khi bấm Đăng xuất
function dangXuat() {
    document.getElementById("khu-hoivien").style.display = "none";
    document.getElementById("khu-khach").style.display = "block";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    alert("Đã đăng xuất tài khoản.");
}