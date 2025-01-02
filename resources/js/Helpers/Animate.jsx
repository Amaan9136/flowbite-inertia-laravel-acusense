import { motion } from 'framer-motion';

const Animate = ({
  tag = 'div',
  className,
  x = 0,
  y = 0,
  duration = 1,
  delay = 0,
  ...props
}) => {
  const Component = motion[tag];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x: x, y: y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      {...props}
    >
      {props.children}
    </Component>
  );
};

export default Animate;
