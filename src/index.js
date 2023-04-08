import ReactDOM from 'react-dom/client';
import App from './components/App'; // js확장자 생략 가능

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>, root);


if(module.hot){
  module.hot.accept();
}