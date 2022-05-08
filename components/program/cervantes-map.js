import Image from 'next/image';

const CervantesMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.911215610666!2d-4.425277384850915!3d36.72469347996414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7be83f3cefd%3A0x9e61e826897f09a3!2sUnicaja%20Concert%20Hall%20Mar%C3%ADa%20Cristina!5e0!3m2!1sen!2sno!4v1649336135958!5m2!1sen!2sno"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  );
};

export default CervantesMap;
