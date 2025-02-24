import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (
        <div className='border'>
          <Parallax
        blur={{ min: -50, max:30 }}
        bgImage={img}
        bgImageAlt="Food Hub"
        strength={-100}

  className="hero min-h-screen -mb-16"
  >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
  <div className="bg-black opacity-50 w-full  max-w-screen-lg p-6 sm:p-8 md:p-10 lg:py-12 rounded-lg">
    <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">{title}</h1>
    <p className="mb-5 uppercase px-4 sm:px-6 md:px-10">
    whould you like to try a dish
    </p>
  </div>
</div>

    </Parallax>
        </div>
       
    );
};

export default Cover;