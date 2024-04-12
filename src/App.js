import './App.css';

import ShopItemFunc from './ShopItemFunc.js';


function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
      <ShopItemFunc/>
      </div>
    </div>
  )
}

export default App;

// Реализуйте полноценный проект с помощью create-react-app.
//  Для item можете использовать либо тип object,
//   либо вынести item в класс и использовать instanceOf.