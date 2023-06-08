import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={'7vw'}
      width={'7vw'}
      color="#c21212"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#c21212"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export { Loader };
