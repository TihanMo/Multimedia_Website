import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const ParallaxComponent = ({ bgImage, strength, children }) => {
  return (
    <Parallax bgImage={bgImage} strength={strength}>
      {children}
    </Parallax>
  );
};

ParallaxComponent.propTypes = {
  bgImage: PropTypes.any.isRequired,
  strength: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default ParallaxComponent;
