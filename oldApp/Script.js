// Test log
    console.log(
        "Cette fonction est ex�cut�e une fois quand la page est charg�e.",
    );



if (window.matchMedia("(orientation: portrait)").matches) {

    //mobile
    window.addEventListener('DOMContentLoaded', function () {
        console.log("format mobile detect�");

        //#region Barre de navigation
        document.querySelector('.navbar-toggle').addEventListener('click', function () {

            // Toggle la classe active sur le bouton
            this.classList.toggle('active');

            // Toggle la classe active sur le menu d�roulant pour l'animer
            document.querySelector('.navbar-links').classList.toggle('active');
        });
        //#endregion Barre de navigation

        //#region Carrousel partenaires
        const carousel = document.querySelector('.Acc_carousel');
        const dots = document.querySelectorAll('.Acc_dot');
        let currentIndex = 0;
        const totalItems = document.querySelectorAll('.Acc_carousel-item').length;
        const itemsPerView = 3;  // Nombre d'�l�ments visibles en m�me temps

        // Calculer la largeur totale du carrousel (en fonction du nombre d'�l�ments)
        carousel.style.width = `${(totalItems / itemsPerView) * 100}%`;

        function showNextSlide() {
            currentIndex++;

            // Si on atteint la fin du carrousel, on revient au d�but
            if (currentIndex >= totalItems / itemsPerView) {
                currentIndex = 0;
            }

            // Calculer l'offset en pourcentage (chaque "slide" repr�sente itemsPerView �l�ments)
            const offset = -(currentIndex * (100 / (totalItems / itemsPerView)));

            // Appliquer la transformation pour le d�filement
            carousel.style.transform = `translateX(${offset}%)`;

            // Mettre � jour les points
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Faire d�filer toutes les 3 secondes
        setInterval(showNextSlide, 3000);

    });
    //#endregion Carrousel partenaires

    //#region carrousel annonces
    // Gestion scroll carrousel
    function scrollCarousel(slideIndex, carouselIndex) {
        const carousel = document.querySelector(`.Ann_carousel-items[data-carousel="${carouselIndex}"]`);
        const dots = document.querySelectorAll(`.Ann_carousel-dots[data-carousel="${carouselIndex}"] .Ann_dot`);

        // Appliquer la transformation uniquement au carrousel cibl�
        carousel.style.transform = `translateX(-${slideIndex * 85}vw)`;

        // Mettre � jour les points du carrousel cibl�
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }

    // JavaScript pour g�rer l'overlay
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
    // verifier au chargement de chaque page si l'animation d'apparition de la navbar � �t� jou� ou non
    // si non -> jouer l'animation
    // si oui -> ne pas la jouer
    window.addEventListener('DOMContentLoaded', function () {
        console.log("format PC detect�");

        //#region Barre de navigation
        const navbar = document.querySelector('.navbar');

        // V�rifier si l'animation a d�j� �t� jou�e
        const animationPlayed = localStorage.getItem('navbarAnimationPlayed');

        // Si l'animation n'a pas encore �t� jou�e
        if (!animationPlayed) {
            // Ajouter la classe pour d�clencher l'animation
            navbar.classList.add('slide');


            // Marquer que l'animation a �t� jou�e
            localStorage.setItem('navbarAnimationPlayed', 'true');
        } else {
            // Si l'animation a d�j� �t� jou�e, afficher la navbar sans animation
            navbar.style.top = '0';

        }
        //#endregion Barre de navigation

        //#region carrousel partenaires
        // gestion carrousel page accueil partenaires
        if (document.body.id === 'accueil-page') {
            console.log("Page accueil detect�e");

            const carousel = document.querySelector('.Acc_carousel');
            const dots = document.querySelectorAll('.Acc_dot');
            let currentIndex = 0;
            const totalItems = document.querySelectorAll('.Acc_carousel-item').length;
            const itemsPerView = 3;  // Nombre d'�l�ments visibles en m�me temps

            // Calculer la largeur totale du carrousel (en fonction du nombre d'�l�ments)
            carousel.style.width = `${(totalItems / itemsPerView) * 100}%`;

            function showNextSlide() {
                currentIndex++;

                // Si on atteint la fin du carrousel, on revient au d�but
                if (currentIndex >= totalItems / itemsPerView) {
                    currentIndex = 0;
                }

                // Calculer l'offset en pourcentage (chaque "slide" repr�sente itemsPerView �l�ments)
                const offset = -(currentIndex * (100 / (totalItems / itemsPerView)));

                // Appliquer la transformation pour le d�filement
                carousel.style.transform = `translateX(${offset}%)`;

                // Mettre � jour les points
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }

            // Faire d�filer toutes les 3 secondes
            setInterval(showNextSlide, 3000);
        }


    });
    //#endregion carrousel partenaires

    //#region carrousel annonces
    // Gestion scroll carrousel
    function scrollCarousel(slideIndex, carouselIndex) {
        const carousel = document.querySelector(`.Ann_carousel-items[data-carousel="${carouselIndex}"]`);
        const dots = document.querySelectorAll(`.Ann_carousel-dots[data-carousel="${carouselIndex}"] .Ann_dot`);

        // Appliquer la transformation uniquement au carrousel cibl�
        carousel.style.transform = `translateX(-${slideIndex * 30}vw)`;

        // Mettre � jour les points du carrousel cibl�
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
    }
        // JavaScript pour g�rer l'overlay
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





