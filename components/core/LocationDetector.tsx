"use client"
import { useEffect, useState } from 'react';

const GeoLocation = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isp, setISP] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGeoData = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setIpAddress(data.ip);
                setCity(data.city);
                setCountry(data.country_name);
                setISP(data.org);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching geo data:', error);
            }
        };

        fetchGeoData();
    }, []);

    return (
        <section>
           {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                   <p>
                        {city}, {country}.
                   </p>
                </div>
            )}
        </section>
    );
};

export default GeoLocation;
