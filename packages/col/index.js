/**
 * @author tonylinx
 * Date: 18/01/23
 */
import Col from './src/col';

/* istanbul ignore next */
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

