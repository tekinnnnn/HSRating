function ratingStar(settings) {
    var defaults = {
        "starColor": "#ffffd2", // Yıldızların mouse üzerinde değilkenki rengi | Fill
        "starHoverColor": "#f2f200", // Yıldızların mouse üzerine geldiğinde ve tıklandıldığındaki rengi | Fill
        "backgroundColor": "transparent", // Yıldızların arkaplan rengi | Boşluklar
        "starWidth": 50, // Her bir yıldızın genişliği
        "starCount": 10, // Yıldız sayısı
        "pollingInterval": 10, // Oylama aralığı | [1|2|3|..|10|..|9999|..]
        "percent": true, // Yarım puan oy verebilme | Verememe | [true|false]
        "transition": "fill 1s cubic-bezier(0.4, 0, 1, 1)", // Transition effect
        "appendThis": "body"
    };

    // TODO: tıklamaların returnlerini virgülden sonra ($n) rakam olacak şekilde ver

    var containerID = 'HSRatingSystem';
    var currentRating = -1;

    if (settings == undefined)
        settings = defaults;

    $.each(defaults, function (key, val) {
        if (settings[key] == undefined)
            settings[key] = val;
    });

    var container = document.createElement('div');
    container.id = containerID;
    container.onmouseout = function (e) {
        if (e.relatedTarget != null && this.id != e.relatedTarget.parentNode.id)
        //if (e.relatedTarget.id.substr('0,9') != "halfSpace")
            normalizeAll(this.id, settings, currentRating);
    };

    container.appendChild(createRect(0, settings));
    for (var i = 1; i < settings.starCount + 1; i++) {
        container.appendChild(createStar(i, settings));
    }
    container.appendChild(createRect(i - 1, settings));
    document.querySelector(settings.appendThis).appendChild(container);

    function createRect(starCounter, settings) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cursor = "pointer";
        svg.style.transition = settings.transition;
        svg.style.webkitTransition = settings.transition;
        svg.setAttribute('id', 'star' + starCounter);
        svg.setAttribute('width', 10);
        svg.setAttribute('height', 50);
        svg.setAttribute('version', '1.0');
        svg.setAttribute('xmlns:dc', 'http://purl.org/dc/elements/1.1/');
        svg.setAttribute('xmlns:cc', 'http://web.resource.org/cc/');
        svg.setAttribute('xmlns:rdf', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#');
        svg.setAttribute('xmlns:svg', 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', 10);
        rect.setAttribute('height', 50);
        rect.style.opacity = 0;
        rect.onmouseover = function (e) {
            highligtLeft(settings.starCount == 10 ? (starCounter * 2 * 2 - 1) : starCounter * 2 - 1, settings);
            //this.style.fill = settings.starHoverColor;
        };
        rect.onclick = function (e) {
            console.log("rating : " + (starCounter * 2) * (settings.pollingInterval / (settings.starCount) / 2));
            currentRating = (settings.starCount == 10 ? (((starCounter) * 2 * 2) - 1) : ((starCounter * 2) - 1));
        };

        $(rect).appendTo(svg);
        return svg;
    }

    function createStar(starCounter, settings) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cursor = "pointer";
        svg.style.transition = settings.transition;
        svg.style.webkitTransition = settings.transition;
        //svg.setAttribute('viewBox', "0 0 100 100");
        svg.setAttribute('id', 'star' + starCounter);
        svg.setAttribute('width', 50);
        svg.setAttribute('height', 50);
        svg.setAttribute('version', '1.0');
        svg.setAttribute('xmlns:dc', 'http://purl.org/dc/elements/1.1/');
        svg.setAttribute('xmlns:cc', 'http://web.resource.org/cc/');
        svg.setAttribute('xmlns:rdf', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#');
        svg.setAttribute('xmlns:svg', 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', 'layer1');

        var halfStarLeft = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        halfStarLeft.setAttribute('id', "halfStar" + (starCounter * 2 - 1));
        halfStarLeft.setAttribute('d', 'm 25,2.0244914 c -1e-6,19.5224076 2e-6,27.9245256 0,38.1016496 L 9.5491498,47.975511 12.500001,31.350276 0,19.576207 17.274576,17.150627 z');
        halfStarLeft.style.fill = settings.starColor;
        halfStarLeft.style.fillOpacity = 1;
        halfStarLeft.style.fillRule = "evenodd";
        halfStarLeft.style.stroke = "none";
        halfStarLeft.onmouseover = function (e) {
            highligtLeft(settings.starCount == 10 ? starCounter * 2 - (settings.percent ? 2 : 1) : starCounter * 2 - 2, settings);
            //this.style.fill = settings.starHoverColor;
        };
        halfStarLeft.onclick = function (e) {
            console.log("rating : " + (settings.starCount == 10 ? (starCounter - (settings.percent ? 1 / 2 : 0)) * (settings.pollingInterval / 10) : (starCounter * 2 - 1) * (settings.pollingInterval / (settings.starCount) / 2)));
            currentRating = (settings.starCount == 10 ? ((starCounter) * 2) - (settings.percent ? 2 : 1) : ((starCounter - 1) * 2));
        };

        var halfSpaceLeft = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        halfSpaceLeft.setAttribute('width', 25);
        halfSpaceLeft.setAttribute('height', 50);
        halfSpaceLeft.setAttribute('x', 0);
        halfSpaceLeft.setAttribute('y', 0);
        halfSpaceLeft.id = 'halfSpaceLeft';
        halfSpaceLeft.style.fill = settings.backgroundColor;
        halfSpaceLeft.onmouseover = function (e) {
            highligtLeft(settings.starCount == 10 ? starCounter * 2 - (settings.percent ? 2 : 1) : starCounter * 2 - 2, settings);
            //this.style.fill = settings.starHoverColor;
        };
        halfSpaceLeft.onclick = function (e) {
            console.log("rating : " + (settings.starCount == 10 ? (starCounter - (settings.percent ? 1 / 2 : 0)) * (settings.pollingInterval / 10) : (starCounter * 2 - 1) * (settings.pollingInterval / (settings.starCount) / 2)));
            currentRating = (settings.starCount == 10 ? ((starCounter) * 2) - (settings.percent ? 2 : 1) : ((starCounter * 2) - 2));
        };

        var halfStarRight = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        halfStarRight.setAttribute('id', "halfStar" + (starCounter * 2));
        halfStarRight.setAttribute('d', 'm 25,2.0244894 c 0,19.5224076 -2e-6,27.9245266 0,38.1016506 L 40.450851,47.975511 37.5,31.350275 50,19.576205 32.725424,17.150625 z');
        halfStarRight.style.fill = settings.starColor;
        halfStarRight.style.fillOpacity = 1;
        halfStarRight.style.fillRule = "evenodd";
        halfStarRight.style.stroke = "none";
        halfStarRight.onmouseover = function (e) {
            highligtLeft((starCounter * 2 - 1), settings);
            //this.style.fill = settings.starHoverColor;
        };
        halfStarRight.onclick = function (e) {
            console.log("rating : " + (settings.starCount == 10 ? starCounter * (settings.pollingInterval / 10) : starCounter * (settings.pollingInterval * 2 / (settings.starCount) / 2)));
            currentRating = starCounter * 2 - 1;
        };

        var halfSpaceRight = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        halfSpaceRight.setAttribute('width', 25);
        halfSpaceRight.setAttribute('height', 50);
        halfSpaceRight.setAttribute('x', 25);
        halfSpaceRight.setAttribute('y', 0);
        halfSpaceRight.id = 'halfSpaceRight';
        halfSpaceRight.style.fill = settings.backgroundColor;
        halfSpaceRight.onmouseover = function (e) {
            highligtLeft((starCounter * 2 - 1), settings);
            //this.style.fill = settings.starHoverColor;
        };
        halfSpaceRight.onclick = function (e) {
            console.log("rating : " + (settings.starCount == 10 ? starCounter * (settings.pollingInterval / 10) : starCounter * (settings.pollingInterval * 2 / (settings.starCount) / 2)));
            currentRating = starCounter * 2 - 1;
        };

        $(halfSpaceLeft).appendTo(g);
        $(halfStarLeft).appendTo(g);
        $(halfSpaceRight).appendTo(g);
        $(halfStarRight).appendTo(g);
        $(g).appendTo(svg);
        return svg;
    }

    function highligtLeft(starCounter, settings) {
        for (var i = 1; i < (10 * settings.starCount / 5) + 1; i++) {
            if (i < starCounter + 2)
                document.getElementById("halfStar" + i).style.fill = settings.starHoverColor;
            else
                document.getElementById("halfStar" + i).style.fill = settings.starColor;
        }
    }

    function normalizeAll(containerId, settings, currentRating) {
        for (var i = 1; i < (10 * settings.starCount / 5) + 1; i++) {
            if (i < currentRating + 2)
                document.getElementById("halfStar" + i).style.fill = settings.starHoverColor;
            else
                document.getElementById("halfStar" + i).style.fill = settings.starColor;
        }
    }

}
