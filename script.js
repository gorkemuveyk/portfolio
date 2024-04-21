let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Sayfa scroll olduğunda
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // Sayfanın üstünden ne kadar scroll edildiğini al
    let offset = sec.offsetTop - 150; // Bölümün sayfanın üstünden ne kadar uzakta olduğunu al (150 piksel azalt)
    let height = sec.offsetHeight; // Bölümün yüksekliğini al
    let id = sec.getAttribute("id"); // Bölümün ID'sini al (Fix: ID özniteliğini al)

    // Eğer sayfanın belirli bir kısmına ulaşıldıysa
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        const linkId = links.getAttribute("href").substring(1); // Bağlantıların href özniteliğinden bölüm ID'sini al (Fix: href özniteliğinden bölüm ID'sini al)
        links.classList.remove("active"); // Tüm bağlantılardan "active" sınıfını kaldır
        // Bağlantının ID'si bölümün ID'siyle eşleşiyorsa
        if (linkId === id) {
          // Bölüm ID'si ile bağlantı ID'sini karşılaştır
          links.classList.add("active"); // Sadece doğru bağlantıya "active" sınıfını ekle
        }
      });
    }
  });
};

// Menü ikonuna tıklandığında
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Menü ikonuna "bx-x" sınıfını ekle veya kaldır
  navbar.classList.toggle("active"); // Menüye "active" sınıfını ekle veya kaldır
};

document.getElementById("myForm").addEventListener("submit", function (event) {
  var form = event.target;
  var inputs = form.querySelectorAll("input, textarea");

  var isFormEmpty = Array.from(inputs).some(function (input) {
    return !input.value.trim(); // Check if any input is empty
  });

  if (isFormEmpty) {
    alert("Please fill out all fields!");
    event.preventDefault(); // Prevent form submission
  } else {
    alert("Message sent successfully!");
    setTimeout(function () {
      location.reload(); // Refresh the page after 1 second
    }, 10);
  }
});
