import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangles-wrapper"
      />
    </div>
  );
};

export default Loader;
