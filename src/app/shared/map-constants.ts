import {
	LatLngLiteral,
	LatLngBoundsLiteral
} from "@agm/core/services/google-maps-types";

export class MapSettings {
	public static mapBounds: LatLngBoundsLiteral = {
		//christchurch bounds
		north: -43.492059923038596,
		west: 172.50877262011727,
		south: -43.599926710798904,
		east: 172.7648977421875
	};

	public static mapsKey = "AIzaSyCm1ee9Y1iSjJGzJ-5yTYTESFWJaAk8aKo";

	public static placesAPIURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={LATLNG}&radius=500&type=cafes&keyword=cruise&key=` +
		MapSettings.mapsKey;

	public static initialLocation = { lat: -43.53035, lng: 172.630971 };
	public static baseLocLatLng: LatLngLiteral = {
		lat: -43.53035,
		lng: 172.630971
	};

	public static primaryMarkerIcon = {
		path:
			"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
		fillColor: "#2f2825",
		fillOpacity: 0.9,
		scale: 2.5,
		stroke: "none",
		//rotation: 180,
		anchor: { x: 12, y: 24 },
		animation: "BOUNCE",
		strokeColor: "#1b1e1b",
		strokeWeight: 3,
		strokeOpacity: 0.1
	};

	public static cafeMarkerIcon = {
		path:
			"M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z",
		fillColor: "#651fff",
		fillOpacity: 0.9,
		scale: 2,
		stroke: "none",
		//rotation: 180,
		anchor: { x: 12, y: 24 },
		animation: "BOUNCE",
		strokeColor: "#7c4dff",
		strokeWeight: 1,
		strokeOpacity: 1
	};

	public static cafeMarkerIcon2 = {
		path: "m47.1237,101.08358c-3.07235,-0.22508 -5.72831,-0.66399 -8.38426,-1.37299c-0.55145,-0.1463 -1.19293,-0.31511 -1.40676,-0.37138c-0.48392,-0.11254 -2.19454,-0.6865 -3.03859,-1.01286c-0.33762,-0.13505 -0.74277,-0.28135 -0.90032,-0.33762c-0.66399,-0.21383 -2.86978,-1.21544 -4.22026,-1.91319c-1.9582,-1.01286 -3.21866,-1.75563 -4.88425,-2.9148c-0.76527,-0.52894 -1.49679,-1.04663 -1.63184,-1.13666c-1.23794,-0.85531 -4.76046,-4.05145 -5.89712,-5.34567c-0.32637,-0.37138 -0.74277,-0.85531 -0.93409,-1.06913c-0.18006,-0.21383 -0.45016,-0.51769 -0.59646,-0.67524c-0.54019,-0.60772 -2.4984,-3.28618 -3.07235,-4.23152c-0.95659,-1.55306 -1.32798,-2.19454 -1.89068,-3.28618c-0.51769,-1.02412 -1.40676,-2.9373 -1.40676,-3.04984c0,-0.05627 -0.13505,-0.39389 -0.2926,-0.75402c-0.31511,-0.69775 -0.88907,-2.43087 -1.22669,-3.64631c-0.10129,-0.40515 -0.25884,-0.95659 -0.33762,-1.23794c-0.12379,-0.46142 -0.23633,-0.99036 -0.60772,-2.92605c-0.74277,-3.86014 -0.76527,-9.27333 -0.05627,-13.27977c0.2701,-1.5418 0.50643,-2.72348 0.66399,-3.26367c0.07878,-0.28135 0.23633,-0.8328 0.33762,-1.23794c0.33762,-1.21544 0.91158,-2.94856 1.22669,-3.64631c0.15756,-0.36013 0.2926,-0.69775 0.2926,-0.75402c0,-0.09003 0.81029,-1.84566 1.40676,-3.02734c0.49518,-1.00161 0.88907,-1.68811 1.89068,-3.30869c0.5627,-0.92283 2.61094,-3.73634 2.99358,-4.13023c0.10129,-0.10129 0.30386,-0.32637 0.45016,-0.50643c1.13666,-1.36174 2.73473,-2.99358 4.51287,-4.62541c0.60772,-0.55145 6.29101,-5.41319 7.59648,-6.50484c0.37138,-0.30386 0.69775,-0.58521 0.73151,-0.61897c0.03376,-0.03376 0.8328,-0.72026 1.78939,-1.5193c0.95659,-0.81029 2.45338,-2.07074 3.3312,-2.81351c0.87782,-0.74277 1.94695,-1.63184 2.36335,-1.96946c0.4164,-0.33762 0.82155,-0.67524 0.90032,-0.75402c0.07878,-0.06752 1.85692,-1.55306 3.95017,-3.29743c2.09325,-1.74438 3.93891,-3.28618 4.09647,-3.42123c0.32637,-0.28135 3.56753,-2.97107 4.22026,-3.50001c0.24759,-0.20257 0.66399,-0.55145 0.93409,-0.77653l0.49518,-0.40515l0.36013,0.25884c0.20257,0.13505 0.64148,0.48392 0.9791,0.76527c0.93409,0.79904 3.34245,2.82476 3.7476,3.13988c0.43891,0.34888 6.31352,5.23313 6.70741,5.582c0.39389,0.34888 2.99358,2.52091 3.42123,2.85853c0.19132,0.1463 1.05788,0.88907 1.93569,1.63184c0.86656,0.74277 2.30708,1.9582 3.19615,2.70097c0.88907,0.74277 1.6656,1.40676 1.73312,1.46303c0.06752,0.06752 0.42765,0.37138 0.79904,0.67524c0.85531,0.72026 6.6849,5.7058 7.42767,6.36979c3.12862,2.75724 6.15596,6.2685 8.12542,9.39712c0.9791,1.5418 2.48714,4.41158 3.16239,6.00966c0.09003,0.21383 0.21383,0.48392 0.25884,0.58521c0.1463,0.28135 0.38264,0.9791 0.8328,2.34084c0.61897,1.87942 0.69775,2.14952 0.90032,3.03859c0.10129,0.46142 0.25884,1.1254 0.33762,1.46303c0.16881,0.69775 0.4164,2.23955 0.67524,4.22026c0.22508,1.82315 0.22508,6.27975 0,8.10291c-0.28135,2.17203 -0.50643,3.55628 -0.6865,4.17525c-0.09003,0.31511 -0.15756,0.66399 -0.15756,0.77653c0,0.11254 -0.07878,0.48392 -0.18006,0.8328c-0.10129,0.34888 -0.24759,0.88907 -0.33762,1.19293c-0.33762,1.15917 -1.18167,3.69133 -1.38425,4.08522c-0.04502,0.10129 -0.16881,0.37138 -0.25884,0.58521c-0.67524,1.59807 -2.18328,4.46785 -3.16239,6.00966c-1.59807,2.55467 -3.87139,5.32316 -6.27975,7.664c-2.6447,2.56592 -5.10933,4.4566 -8.37301,6.4148c-1.55306,0.93409 -4.6029,2.44213 -6.13345,3.03859c-0.28135,0.11254 -0.66399,0.2701 -0.86656,0.34888c-0.19132,0.09003 -0.4164,0.15756 -0.50643,0.15756c-0.09003,0 -0.20257,0.04502 -0.25884,0.10129c-0.11254,0.09003 -2.04824,0.72026 -3.31994,1.06913c-2.23955,0.60772 -3.72509,0.91158 -6.4148,1.30547c-1.32798,0.20257 -5.09808,0.45016 -6.52734,0.42765c-0.709,0 -2.12701,-0.06752 -3.15113,-0.1463l0,0l0,0l-0.00003,-0.00002zm7.30387,-12.62703c0.42765,-0.51769 0.43891,-0.86656 0.06752,-1.50804c-0.15756,-0.2701 -0.36013,-0.73151 -0.46142,-1.02412c-0.21383,-0.65273 -0.12379,-1.02412 0.54019,-2.10451c1.42926,-2.31833 1.29421,-4.19776 -0.48392,-7.32638c-0.36013,-0.61897 -0.73151,-0.90032 -1.21544,-0.90032c-0.63023,0 -0.8328,0.20257 -0.82155,0.8328c0.01125,0.39389 0.10129,0.6865 0.34888,1.06913c0.18006,0.28135 0.49518,0.84405 0.69775,1.2492c0.33762,0.67524 0.36013,0.81029 0.37138,1.85692c0,1.18167 -0.01125,1.23794 -0.72026,2.36335c-0.85531,1.35048 -1.00161,3.11737 -0.37138,4.37782c0.31511,0.64148 1.19293,1.53055 1.50804,1.53055c0.10129,0 0.34888,-0.19132 0.54019,-0.4164l0,0l0,0l0.00002,0zm-4.22026,-7.09005c0.6865,-0.6865 0.88907,-1.26045 0.90032,-2.56592c0.01125,-1.20418 -0.16881,-1.91319 -0.66399,-2.58843c-0.88907,-1.21544 -1.05788,-2.61094 -0.48392,-4.10772c0.07878,-0.21383 0.37138,-0.77653 0.63023,-1.23794c0.64148,-1.1029 0.69775,-1.42926 0.30386,-1.89068c-0.24759,-0.2926 -0.38264,-0.36013 -0.73151,-0.36013c-0.37138,0 -0.48392,0.06752 -0.74277,0.39389c-1.06913,1.40676 -1.72187,3.22991 -1.75563,4.873c-0.01125,0.86656 0.03376,1.08039 0.36013,1.87942c0.21383,0.49518 0.50643,1.1254 0.67524,1.40676c0.61897,1.08039 0.63023,2.01447 0.03376,2.92605c-0.30386,0.45016 -0.32637,0.88907 -0.09003,1.35048c0.15756,0.2926 0.23633,0.33762 0.66399,0.33762c0.40515,0 0.54019,-0.06752 0.90032,-0.4164l0,0l0,0zm17.51129,-13.76369c0.31511,-0.16881 0.45016,-0.73151 0.45016,-1.85692c0,-0.84405 0.03376,-1.05788 0.18006,-1.11415c0.10129,-0.03376 1.48553,-0.06752 3.09486,-0.06752c2.90354,0 2.90354,0 3.53377,-0.2926c0.76527,-0.36013 1.5418,-1.20418 1.78939,-1.92444c0.10129,-0.2926 0.18006,-0.8328 0.18006,-1.20418c0,-0.64148 -0.06752,-0.82155 -0.93409,-2.54341c-1.1029,-2.18328 -1.49679,-2.85853 -2.16078,-3.70258c-1.40676,-1.8119 -3.66882,-3.42123 -5.51448,-3.90515c-0.73151,-0.20257 -2.57717,-0.21383 -2.73473,-0.01125c-0.12379,0.1463 -0.02251,0.42765 0.6865,2.02573l0.34888,0.75402l0.49518,0c0.59646,0 2.11576,0.709 2.98232,1.38425c1.53055,1.20418 2.77975,2.85853 3.64631,4.82798c0.2701,0.60772 0.48392,1.18167 0.48392,1.27171c0,0.31511 -0.82155,0.39389 -3.56753,0.37138l-2.67846,-0.03376l-0.18006,-0.61897c-0.22508,-0.77653 -0.43891,-1.60933 -0.5627,-2.19454c-0.12379,-0.59646 -0.38264,-1.68811 -0.52894,-2.25081c-0.06752,-0.24759 -0.20257,-0.79904 -0.30386,-1.23794c-0.10129,-0.42765 -0.25884,-1.09164 -0.36013,-1.46303c-0.2701,-0.95659 -1.74438,-3.7701 -2.57717,-4.89551c-2.56592,-3.44374 -3.36496,-4.164 -6.39229,-5.75082c-0.38264,-0.20257 -0.61897,-0.38264 -0.5627,-0.43891c0.05627,-0.05627 2.40836,-0.12379 5.22187,-0.13505l5.13184,-0.03376l0.48392,-0.36013c0.49518,-0.36013 0.75402,-0.79904 1.08039,-1.76688c0.21383,-0.66399 0.10129,-1.04663 -0.38264,-1.33923c-0.30386,-0.18006 -1.62058,-0.19132 -18.27656,-0.19132l-17.93894,0l-0.30386,0.23633c-0.20257,0.15756 -0.2926,0.33762 -0.2926,0.5627c0,0.48392 0.22508,1.36174 0.40515,1.57557c0.09003,0.09003 0.15756,0.22508 0.15756,0.28135c0,0.16881 0.5627,0.66399 0.9791,0.87782c0.31511,0.15756 1.00161,0.18006 5.59326,0.18006c5.13184,0 5.84085,0.04502 5.05306,0.34888c-1.65434,0.61897 -3.91641,2.17203 -5.26689,3.61255c-0.55145,0.57396 -1.96946,2.38586 -1.96946,2.4984c0,0.03376 -0.15756,0.28135 -0.33762,0.5627c-0.90032,1.31672 -2.18328,4.3103 -2.76849,6.42606c-0.79904,2.84727 -1.1254,4.73795 -1.46303,8.45178c-0.1463,1.63184 -0.15756,2.12701 -0.04502,2.45338c0.25884,0.81029 -1.29421,0.74277 18.26531,0.74277c11.29906,0 17.72511,-0.04502 17.86016,-0.11254l0,0l0,0l0,-0.00002z",
		fillColor: "#440000",
		fillOpacity: 1,
		scale: 0.5,
		
		rotation: 180,
		anchor: { x: 50, y: 0 },
		animation: "BOUNCE"
	};

	public static cafeMarkerIcon3 = "assets/cafe.png";
}



export const mapStyles2 = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
		featureType: "administrative.locality",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#141e32"
			}
		]
	},
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];