import useBoop from "./useBoop";
import { animated } from "@react-spring/web";
import classes from "./theme/theme.module.css"

const Boop = ({ cls, children, ...boopConfig}) => {


    const [style, trigger] = useBoop(boopConfig);
    return (
      <animated.span onMouseEnter={trigger} style={style} className={`${classes.span} ${cls}`}>
        {children}
      </animated.span>
    );
  };

export default Boop;

