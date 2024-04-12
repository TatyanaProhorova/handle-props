import {item} from './data.js';
import React from 'react'; // Для классового компонента

function ShopItemFunc() {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
      {item.descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{item.currency + (item.price.toFixed(2))}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}


// class ShopItemFunc extends React.Component {
// render() {
//   return (
//   <div className="main-content">
//     <h2>{item.brand}</h2>
//     <h1>{item.title}</h1>
//     <h3>{item.description}</h3>
//     <div className="description">
//     {item.descriptionFull}
//     </div>
//     <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
//     <div className="divider"></div>
//     <div className="purchase-info">
//       <div className="price">{item.currency + (item.price.toFixed(2))}</div>
//       <button>Добавить в корзину</button>
//     </div>
//   </div>
//   )     
// }
// }
export default ShopItemFunc;
// Компонент должен иметь один props item, в котором он ожидает объект с информацией
//  о товаре со следующими свойствами:
