window.onload = function() {
    renderCart();
};

function renderCart() {
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
    let tbody = document.getElementById("cart-row");
    tbody.innerHTML = "";

    if (cart.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center;">Giỏ hàng của bạn đang trống!</td></tr>`;
        document.getElementById("tongtien").innerText = "0 đ";
        return;
    }

    let tongTien = 0;

    cart.forEach((item) => {
        let thanhTien = item.price * item.quantity;
        tongTien += thanhTien;

        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td style="text-align: center;"><img src="${item.image}" alt="" width="50" height="50" style="object-fit:cover; border-radius:4px;"></td>
            <td>${item.name}</td>
            <td>${item.priceFormatted}</td>
            <td>
                <button class="btn-qty" onclick="doiSLRow('${item.id}', -1)">-</button>
                <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                <button class="btn-qty" onclick="doiSLRow('${item.id}', 1)">+</button>
            </td>
            <td>${thanhTien.toLocaleString()} đ</td>
            <td><button class="btn" style="background:#d9534f;" onclick="xoaSanPham('${item.id}')">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById("tongtien").innerText = tongTien.toLocaleString() + " đ";
}

function doiSLRow(id, n) {
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
    let item = cart.find(i => i.id === id);

    if (item) {
        item.quantity += n;
        if (item.quantity < 1) item.quantity = 1;
        localStorage.setItem("minimart_cart", JSON.stringify(cart));
        renderCart();
    }
}

function xoaSanPham(id) {
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("minimart_cart", JSON.stringify(cart));
    renderCart();
}

function datHang() {
    var ten = document.getElementById("ten").value;
    var sdt = document.getElementById("sdt").value;
    var dc = document.getElementById("diachi").value;
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];
    
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    if (ten === "" || dc === "") { 
        alert("Vui lòng nhập đầy đủ thông tin nhận hàng!"); 
        return; 
    }
    if (sdt.length !== 10) { 
        alert("Số điện thoại phải có đúng 10 chữ số!"); 
        return; 
    }

    alert("Đặt hàng thành công! Cảm ơn bạn " + ten + " đã mua sắm tại MiniMart.");
    localStorage.removeItem("minimart_cart");
    renderCart();
    document.getElementById("ten").value = "";
    document.getElementById("sdt").value = "";
    document.getElementById("diachi").value = "";
}