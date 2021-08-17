import React from "react";

// class Test extends Component {
//   render() {
//     return <div>11111111</div>;
//   }
// }
const Test = React.forwardRef((props, ref) => {
  return <div ref={ref}>1111111forwardref</div>;
});
export default Test;
