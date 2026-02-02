"use client";
import React from 'react';

const LocationSection = () => {
  return (
    <section className="w-full h-[50vh]">
      <iframe 
        title="Location of Parc du Vélodrome on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.606445074074!2d-7.6480697245042055!3d33.589566173334596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e0!3m2!1sfr!2sma!4v1738774075758!5m2!1sfr!2sma" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </section>
  );
};

export default LocationSection;