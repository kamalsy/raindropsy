$(function () {
    var bar = '';
    bar += '<div class="nav">';
    bar += '<div class="nav-bar">';
    bar += '<ul>';
    bar += '<li><a href="/anime/about.html">حول</a></li>';
    bar += '<li><a href="/anime/contact.html">تواصل معنا</a></li>';
    bar += '<div class="dropdown">';
    bar += '<li onclick="myFunction()" class="dropbtn">القائمة</li>';
    bar += '<div id="myDropdown" class="dropdown-content">';
    bar += '<a href="/index.html">الصفحة الرئيسية</a>';
    bar += '<a href="/anime.html">قائمة الأنمي</a>';
    bar += '<a href="#">قائمة الأفلام</a>';
    bar += '<a href="#">فيديوهات</a>';
    bar += '<a href="#">مقالات</a>';
    bar += '<a href="#">تطبيقات</a>';
    bar += '<a href="#">مدبلج</a>';
    bar += '<a href="#">أوستات</a>';
    bar += '<a href="/blog.html">المدونة</a>';
    bar += '</div>';
    bar += '</div>';
    bar += '</ul>';
    bar += '</div>';
    bar += '<div class="logo"><a href="/anime.html">';
    bar += '<div class="logotext">';
    bar += '<p>قطرة مطر</p>';
    bar += '<div class="logosubtext">أنـمــــــــي</div>';
    bar += '</div>';
    bar += '<div class="logoimg"></div>';
    bar += '</a>';
    bar += '</div>';
    bar += '</div>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}

//menuBtn
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
