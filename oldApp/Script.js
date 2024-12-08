// Test log
    console.log(
        "Cette fonction est exécutée une fois quand la page est chargée.",
    );



if (window.matchMedia("(orientation: portrait)").matches) {

    //mobile
    window.addEventListener('DOMContentLoaded', function () {
        console.log("format mobile detecté");

        //#region Barre de navigation
        document.querySelector('.navbar-toggle').addEventListener('click', function () {

            // Toggle la classe active sur le bouton
            this.classList.toggle('active');

            // Toggle la classe active sur le menu déroulant pour l'animer
            document.querySelector('.navbar-links').classList.toggle('active');
        });
        //#endregion Barre de navigation

        //#region Carrousel partenaires
        const carousel = document.querySelector('.Acc_carousel');
        const dots = document.querySelectorAll('.Acc_dot');
        let currentIndex = 0;
        const totalItems = document.querySelectorAll('.Acc_carousel-item').length;
        const itemsPerView = 3;  // Nombre d'éléments visibles en même temps

        // Calculer la largeur totale du carrousel (en fonction du nombre d'éléments)
        carousel.style.width = `${(totalItems / itemsPerView) * 100}%`;

        function showNextSlide() {
            currentIndex++;

            // Si on atteint la fin du carrousel, on revient au début
            if (currentIndex >= totalItems / itemsPerView) {
                currentIndex = 0;
            }

            // Calculer l'offset en pourcentage (chaque "slide" représente itemsPerView éléments)
            const offset = -(currentIndex * (100 / (totalItems / itemsPerView)));

            // Appliquer la transformation pour le défilement
            carousel.style.transform = `translateX(${offset}%)`;

            // Mettre à jour les points
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Faire défiler toutes les 3 secondes
        setInterval(showNextSlide, 3000);

    });
    //#endregion Carrousel partenaires

    //#region carrousel annonces
    // Gestion scroll carrousel
    function scrollCarousel(slideIndex, carouselIndex) {
        const carousel = document.querySelector(`.Ann_carousel-items[data-carousel="${carouselIndex}"]`);
        const dots = document.querySelectorAll(`.Ann_carousel-dots[data-carousel="${carouselIndex}"] .Ann_dot`);

        // Appliquer la transformation uniquement au carrousel ciblé
        carousel.style.transform = `translateX(-${slideIndex * 85}vw)`;

        // Mettre à jour les points du carrousel ciblé
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }

    // JavaScript pour gérer l'overlay
    function openOverlayHotel(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Hotel001.png", "Img/ANNONCES_Hotel002.png", "Img/ANNONCES_Hotel003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

    function openOverlayRestau(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Restau001.png", "Img/ANNONCES_Restau002.png", "Img/ANNONCES_Restau003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

    function openOverlayTerrain(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Terrain001.png", "Img/ANNONCES_Terrain002.png", "ANNONCES_Terrain003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

    function closeOverlay() {
        document.getElementById('Ann_overlay').style.display = 'none';
    }
    //#endregion carrousel annonces

    //*#region Contact Overlay
    function Contact_openOverlay() {
        document.getElementById("confirmation-overlay").style.display = "flex";
    }

    function Contact_closeOverlay() {
        document.getElementById("confirmation-overlay").style.display = "none";
    }
    //*#endregion Contact Overlay
}

else {
    // verifier au chargement de chaque page si l'animation d'apparition de la navbar à été joué ou non
    // si non -> jouer l'animation
    // si oui -> ne pas la jouer
    window.addEventListener('DOMContentLoaded', function () {
        console.log("format PC detecté");

        //#region Barre de navigation
        const navbar = document.querySelector('.navbar');

        // Vérifier si l'animation a déjà été jouée
        const animationPlayed = localStorage.getItem('navbarAnimationPlayed');

        // Si l'animation n'a pas encore été jouée
        if (!animationPlayed) {
            // Ajouter la classe pour déclencher l'animation
            navbar.classList.add('slide');


            // Marquer que l'animation a été jouée
            localStorage.setItem('navbarAnimationPlayed', 'true');
        } else {
            // Si l'animation a déjà été jouée, afficher la navbar sans animation
            navbar.style.top = '0';

        }
        //#endregion Barre de navigation

        //#region carrousel partenaires
        // gestion carrousel page accueil partenaires
        if (document.body.id === 'accueil-page') {
            console.log("Page accueil detectée");

            const carousel = document.querySelector('.Acc_carousel');
            const dots = document.querySelectorAll('.Acc_dot');
            let currentIndex = 0;
            const totalItems = document.querySelectorAll('.Acc_carousel-item').length;
            const itemsPerView = 3;  // Nombre d'éléments visibles en même temps

            // Calculer la largeur totale du carrousel (en fonction du nombre d'éléments)
            carousel.style.width = `${(totalItems / itemsPerView) * 100}%`;

            function showNextSlide() {
                currentIndex++;

                // Si on atteint la fin du carrousel, on revient au début
                if (currentIndex >= totalItems / itemsPerView) {
                    currentIndex = 0;
                }

                // Calculer l'offset en pourcentage (chaque "slide" représente itemsPerView éléments)
                const offset = -(currentIndex * (100 / (totalItems / itemsPerView)));

                // Appliquer la transformation pour le défilement
                carousel.style.transform = `translateX(${offset}%)`;

                // Mettre à jour les points
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }

            // Faire défiler toutes les 3 secondes
            setInterval(showNextSlide, 3000);
        }


    });
    //#endregion carrousel partenaires

    //#region carrousel annonces
    // Gestion scroll carrousel
    function scrollCarousel(slideIndex, carouselIndex) {
        const carousel = document.querySelector(`.Ann_carousel-items[data-carousel="${carouselIndex}"]`);
        const dots = document.querySelectorAll(`.Ann_carousel-dots[data-carousel="${carouselIndex}"] .Ann_dot`);

        // Appliquer la transformation uniquement au carrousel ciblé
        carousel.style.transform = `translateX(-${slideIndex * 30}vw)`;

        // Mettre à jour les points du carrousel ciblé
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }
        // JavaScript pour gérer l'overlay
    function openOverlayHotel(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Hotel001.png", "Img/ANNONCES_Hotel002.png", "Img/ANNONCES_Hotel003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

    function openOverlayRestau(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Restau001.png", "Img/ANNONCES_Restau002.png", "Img/ANNONCES_Restau003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

    function openOverlayTerrain(itemIndex) {
        const overlay = document.getElementById('Ann_overlay');
        const titles = ["Titre 1", "Titre 2", "Titre 3"]; // Exemple de titres
        const descriptions = [
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Courte description : Lorem ipsum dolor sit amet, consectetur adipiscing", "Detail 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Detail 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Detail 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
        ]; // Exemple de descriptions
        const images = ["Img/ANNONCES_Terrain001.png", "Img/ANNONCES_Terrain002.png", "Img/ANNONCES_Terrain003.png"]; // Exemple d'images

        document.getElementById('Ann_overlay-title').textContent = titles[itemIndex];
        document.getElementById('Ann_overlay-desc1').textContent = descriptions[itemIndex][0];
        document.getElementById('Ann_overlay-desc2').textContent = descriptions[itemIndex][1];
        document.getElementById('Ann_overlay-desc3').textContent = descriptions[itemIndex][2];
        document.getElementById('Ann_overlay-desc4').textContent = descriptions[itemIndex][3];
        document.getElementById('Ann_overlay-image').src = images[itemIndex];

        overlay.style.display = 'flex';
    }

        function closeOverlay() {
            document.getElementById('Ann_overlay').style.display = 'none';
        }
    //#endregion carrousel annonces

    //#region Contact Overlay
    function Contact_openOverlay() {
        document.getElementById("confirmation-overlay").style.display = "flex";
    }

    function Contact_closeOverlay() {
        document.getElementById("confirmation-overlay").style.display = "none";
    }
    //#endregion Contact Overlay
}





