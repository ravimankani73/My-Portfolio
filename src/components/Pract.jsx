import { forwardRef } from "react";

function pract({text}, ref) {
    return <h2 ref={ref}>{text}</h2>;
}

export default forwardRef(pract);