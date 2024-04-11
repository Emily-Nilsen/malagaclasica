import Image from 'next/image';

const CatedralMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.099655946869!2d-4.421890887336422!3d36.72016777215449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79511cea98d%3A0xfcc3c279b06f19fa!2sCatedral%20de%20la%20Encarnaci%C3%B3n%20de%20M%C3%A1laga!5e0!3m2!1sen!2sno!4v1707310349790!5m2!1sen!2sno"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  );
};

export default CatedralMap;
