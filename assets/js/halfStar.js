function ratingStar(settings, rating) {
    var defaults = {
        "starLeftColor": "#ffff00",
        "starRightColor": "#ffffd2",
        "starHoverColor": "#f2f200",
        "starWidth": 50,
        "starCount": 5,
        "tenOrfive": 5,
        "transition": "fill 1s cubic-bezier(0.4, 0, 1, 1)"
    };

    var containerID = 'halfStarRatingAPI';
    var currentRating = -1;

    if (settings == undefined)
        settings = defaults;

    $.each(defaults, function (key, val) {
        if (settings.key == undefined)
            settings[key] = val;
    });

    var container = document.createElement('div');
    container.id = containerID;
    container.onmouseout = function (e) {
        if (e.relatedTarget != null && this.id != e.relatedTarget.parentNode.id)
            normalizeAll(this.id, settings, currentRating);
    };

    container.appendChild(createRect(0, settings));
    for (var i = 1; i < settings.starCount + 1; i++) {
        container.appendChild(createStar(i, settings));
    }
    document.body.appendChild(container);

    function createRect(starCounter, settings) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cursor = "pointer";
        svg.style.transition = settings.transition;
        svg.style.webkitTransition = settings.transition;
        svg.setAttribute('viewBox', "0 0 10 50");
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
            highligtLeft((starCounter * 2 - 2), settings);
            //this.style.fill = settings.starHoverColor;
        };
        rect.onclick = function (e) {
            console.log((starCounter * 2) / (10 / settings.tenOrfive));
            currentRating = starCounter * 2 - 2;
        };

        $(rect).appendTo(svg);
        return svg;
    }

    function createStar(starCounter, settings) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cursor = "pointer";
        svg.style.transition = settings.transition;
        svg.style.webkitTransition = settings.transition;
        svg.setAttribute('viewBox', "0 0 110 110");
        svg.setAttribute('id', 'star' + starCounter);
        svg.setAttribute('width', 50);
        svg.setAttribute('version', '1.0');
        svg.setAttribute('xmlns:dc', 'http://purl.org/dc/elements/1.1/');
        svg.setAttribute('xmlns:cc', 'http://web.resource.org/cc/');
        svg.setAttribute('xmlns:rdf', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#');
        svg.setAttribute('xmlns:svg', 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', 'transform');
        g.setAttribute('transform', 'translate(-108.19401,2.5e-5)');

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('id', "halfStar" + (starCounter * 2 - 1));
        path.setAttribute('d', 'M 162.194,4.99999 L 174.60317,43.19888 L 214.76712,43.1966 L 182.27246,66.802524 L 194.68597,105.00001 L 162.194,81.390382 L 129.70202,105.00001 L 142.11554,66.80253 L 109.62088,43.1966 L 149.78483,43.19888 L 162.194,4.99999 z');
        path.style.fill = settings.starRightColor;
        path.style.fillOpacity = 1;
        path.style.fillRule = "evenodd";
        path.style.stroke = "none";
        path.style.strokeWidth = "10";
        path.style.strokeLinecap = "round";
        path.style.strokeLinejoin = "round";
        path.style.strokeMiterlimit = 4;
        path.style.strokeDasharray = "none";
        path.style.strokeOpacity = 1;
        path.onmouseover = function (e) {
            highligtLeft((starCounter * 2 - 2), settings);
            //this.style.fill = settings.starHoverColor;
        };
        path.onclick = function (e) {
            console.log((starCounter * 2 - 1) / (10 / settings.tenOrfive));
            currentRating = starCounter * 2 - 2;
        };

        var path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('id', "halfStar" + (starCounter * 2));
        path2.setAttribute('d', 'M 162.20464,81.37494 L 194.70464,104.99995 L 182.29839,66.81244 L 214.76714,43.18744 L 174.61089,43.18744 L 162.20464,4.99994 L 162.20464,81.37494 z');
        path2.style.fill = settings.starRightColor;
        path2.style.fillOpacity = 1;
        path2.style.fillRule = "evenodd";
        path2.style.stroke = "none";
        path2.style.strokeWidth = "10";
        path2.style.strokeLinecap = "round";
        path2.style.strokeLinejoin = "round";
        path2.style.strokeMiterlimit = 4;
        path2.style.strokeDasharray = "none";
        path2.style.strokeOpacity = 1;
        path2.onmouseover = function (e) {
            highligtLeft((starCounter * 2 - 1), settings);
            //this.style.fill = settings.starHoverColor;
        };
        path2.onclick = function (e) {
            console.log(starCounter * 2 / (10 / settings.tenOrfive));
            currentRating = starCounter * 2 - 1;
            rating = currentRating;
        };

        $(path).appendTo(g);
        $(path2).appendTo(g);
        $(g).appendTo(svg);
        return svg;
    }

    function highligtLeft(starCounter, settings) {
        var leftQuery = "";
        var rightQuery = "";
        for (var i = 1; i < 11; i++) {
            if (i < starCounter + 2)
                document.getElementById("halfStar" + i).style.fill = settings.starHoverColor;
            else
                document.getElementById("halfStar" + i).style.fill = settings.starRightColor;
        }
    }

    function normalizeAll(containerId, settings, currentRating) {
        for (var i = 1; i < 11; i++) {
            if (i < currentRating + 2)
                document.getElementById("halfStar" + i).style.fill = settings.starHoverColor;
            else
                document.getElementById("halfStar" + i).style.fill = settings.starRightColor;
        }
    }

}