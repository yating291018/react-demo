import React, { useState } from "react";

const Fn = (Component) => (props) => {
  return <Component {...props} autoname="yatinghu"></Component>;
};

const App = (prop) => {
  console.log("props", prop);
  return (
    <div>
      <div>tilte</div>
    </div>
  );
};
export default Fn(App);

// 这是一个高阶组建，所有还有出啊怒props的， 装饰器模式只能在类组建使用。还是在走吧，不然还是感觉听不好的，我也没有信息，太累类，我没有必要非要
// 吧时间浪费在这个地方，我需要学习更深入的和node, webgl才是王道，没有必要在把时间浪费的学习另一门课上班，还是去学习新的东西，研究更深入的知识为好
// 这个算法还是有的吗？？？ 我不太愿意去的算法地方释放房贷首付codd的方法是的怎么不说话了，我觉得还会挺不好的。
