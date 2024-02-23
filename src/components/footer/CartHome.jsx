import React from 'react';


const CartHome = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="422"
          height="479" 
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          className='mainCarta'
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=109/1%Turusbekov%st%20Kyrgyzstan%20Bishkek&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: ''}}
        ></iframe>
      </div>
    </section>
  );
}

export default CartHome;