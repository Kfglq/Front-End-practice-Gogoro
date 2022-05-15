window.onload = function() {
    window.addEventListener("scroll", (event) => {
        let scrollY = this.scrollY;
        console.log(scrollY);
        let z = scrollY / 300;
        console.log(z);
        let header = document.getElementById('header');
        header.style.backgroundColor = `rgba(0,0,0,${z})`;
    });
}