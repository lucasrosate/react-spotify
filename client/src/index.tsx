import ReactDOM from 'react-dom';
import "@/styles/index.css";
import store from '@/redux/store/store';
import { Provider } from 'react-redux';
import App from './App'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);