const productsData = {
    "sua": { id: "sua", name: "Sữa tươi Vinamilk 1L", price: 35000, priceFormatted: "35.000 đ", stock: 50, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400", desc: "Sữa tươi 100% nguyên chất từ các trang trại bò sữa tiêu chuẩn." },
    "gao": { id: "gao", name: "Gạo ST25 (5kg)", price: 180000, priceFormatted: "180.000 đ", stock: 30, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400", desc: "Gạo đặc sản ST25 thượng hạng, hạt gạo dài, cơm dẻo mềm và thơm." },
    "coca": { id: "coca", name: "Nước ngọt Coca Cola", price: 10000, priceFormatted: "10.000 đ", stock: 100, image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?w=400", desc: "Giải khát tức thì với hương vị Coca Cola sảng khoái." },
    "dau": { id: "dau", name: "Dầu ăn Tường An 1L", price: 48000, priceFormatted: "48.000 đ", stock: 40, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400", desc: "Dầu ăn tinh luyện chất lượng cao, tốt cho sức khỏe tim mạch." }, 
   "trung": { id: "trung", name: "Trứng gà ta (Hộp 10 quả)", price: 32000,  priceFormatted: "32.000 đ",stock: 25, image: "https://bactom.com/wp-content/uploads/2023/06/7d7b3a273cfeac42d073f152c057e78b.jpg", desc: "Trứng gà ta sạch được tuyển chọn kỹ lưỡng, lòng đỏ đậm giàu dinh dưỡng." 
  },
    "sunlight": { id: "sunlight", name: "Nước rửa chén Sunlight", price: 32000, priceFormatted: "32.000 đ", stock: 60, image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400", desc: "Đánh bay dầu mỡ nhanh chóng với sức mạnh từ chanh tươi." }
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || 'sua'; 
const currentProd = productsData[productId] || productsData['sua'];

document.getElementById("prod-img").src = currentProd.image;
document.getElementById("prod-name").innerText = currentProd.name;
document.getElementById("prod-price").innerText = currentProd.priceFormatted;
document.getElementById("prod-stock").innerText = currentProd.stock;
document.getElementById("prod-desc").innerText = currentProd.desc;

function doiSL(n) {
    var so = Number(document.getElementById("sl").innerText);
    so = so + n;
    if (so < 1) { so = 1; }
    if (so > currentProd.stock) { so = currentProd.stock; }
    document.getElementById("sl").innerText = so;
}

function themGio() {
    var quantity = Number(document.getElementById("sl").innerText);
    let cart = JSON.parse(localStorage.getItem("minimart_cart")) || [];

    let existingItem = cart.find(item => item.id === currentProd.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentProd.id,
            name: currentProd.name,
            price: currentProd.price,
            priceFormatted: currentProd.priceFormatted,
            image: currentProd.image,
            quantity: quantity
        });
    }

    localStorage.setItem("minimart_cart", JSON.stringify(cart));
    alert("Đã thêm " + quantity + " sản phẩm [" + currentProd.name + "] vào giỏ hàng thành công!");
    window.location.href = "cart.html";
}