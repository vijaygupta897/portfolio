

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

}

$('body').on('click','#mySidenav *', function() {
  console.log('hi')
})
