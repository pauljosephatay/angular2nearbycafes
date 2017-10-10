import { LatLngLiteral, LatLngBoundsLiteral, LatLngBounds } from "@agm/core/map-types";

export interface PlaceGeometry {
    location: LatLngLiteral;
    viewport: LatLngBounds | LatLngBoundsLiteral;
}

export interface PlaceResult {
    geometry: PlaceGeometry;
    name: string;
    rating: number;
    vicinity: string;
}