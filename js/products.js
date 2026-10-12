function loc(loai) {
    var cacThe = document.getElementsByClassName("the");
    for (var i = 0; i < cacThe.length; i++) {
        if (loai === "tatca" || cacThe[i].dataset.category === loai) {
            cacThe[i].style.display = "block";
        } else {
            cacThe[i].style.display = "none";
        }
    }
}

function timKiemTen() {
    var tu = document.getElementById("timkiem").value.toLowerCase();
    var cacThe = document.getElementsByClassName("the");
    for (var i = 0; i < cacThe.length; i++) {
        var ten = cacThe[i].innerText.toLowerCase();
        if (ten.includes(tu)) {
            cacThe[i].style.display = "block";
        } else {
            cacThe[i].style.display = "none";
        }
    }
}

// Hàm thêm nhanh sản phẩm từ trang danh sách vào giỏ hàng
function themNhanh(id, name, price, priceFormatted, image) {
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
    let existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, priceFormatted, image, quantity: 1 });
    }
    
    localStorage.setItem("minimart_cart", JSON.stringify(cart));
    alert("Đã thêm [" + name + "] vào giỏ hàng thành công!");
}