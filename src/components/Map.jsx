import React from 'react';
import './map.css';

const MapComponent = () => {
  return (
    <div className='map'
    style={{
        width: '100%',
        height: '100vh', /* set the height to 100% of the viewport */
      }}
      dangerouslySetInnerHTML={{
        __html: `
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.8423452121376!2d2.073053439021259!3d49.41486823783805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e70139039df0e1%3A0xe08fb0c5da218d31!2s26%20Rue%20Ronsard%2C%2060000%20Beauvais!5e0!3m2!1sfr!2sfr!4v1720783622507!5m2!1sfr!2sfr"
            width="600"
            height="600"
            style="border:0; "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        `,
      }}
    />
  );
};

export default MapComponent;