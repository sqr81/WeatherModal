import useRequestLocationPermission from "./useRequestLocationPermission"
import Geolocation from "react-native-geolocation-service"
import { useEffect, useState } from "react";

export default () => {
    const {isLoading: requestIsLoading, isAuthorized} = useRequestLocationPermission();
    const [coordonnates, setCoordonnates] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if(!requestIsLoading && isAuthorized){
            Geolocation.getCurrentPosition(
                (location) => {
                    const {coords: { longitude, latitude }} = location;
                    setCoordonnates({ longitude, latitude });
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(false);
                }
            );
        }
    }, [requestIsLoading, isAuthorized]);

    return {isLoading: isLoading || requestIsLoading, isAuthorized, coordonnates}
}