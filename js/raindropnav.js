$(function () {
    var bar = '';
    bar += '<div class="nav">';
    bar += '<div class="nav-bar">';
    bar += '<ul>';
    bar += '<li><a href="about.html">حول</a></li>';
    bar += '<li><a href="contact.html">تواصل معنا</a></li>';
    bar += '<div class="dropdown">';
    bar += '<li onclick="myFunction()" class="dropbtn">القائمة</li>';
    bar += '<div id="myDropdown" class="dropdown-content">';
    bar += '<a href="#">الإنتاجات الحصرية</a>';
    bar += '<a href="/anime.html">بوابة الأنمي</a>';
    bar += '<a href="/manga.html">بوابة المانجا</a>';
    bar += '<a href="/tech.html">بوابة التقنية</a>';
    bar += '<a href="/music.html">بوابة الموسيقى</a>';
    bar += '<a href="/cinema.html">بوابة السينما</a>';
    bar += '<a href="/fun.html">بوابة التسلية</a>';
    bar += '<a href="/blog.html">المدونة</a>';
    bar += '</div>';
    bar += '</div>';
    bar += '</ul>';
    bar += '</div>';
    bar += '<div class="logo"><a href="index.html">';
    bar += '<div class="logotext">';
    bar += 'قطرة مطر';
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
