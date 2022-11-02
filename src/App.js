import styles from './App.module.css';
import Ref from './component/use-ref';
import UseReducer from './component/use-reducer';

function App() {
  return (
    <div className={styles}>
      <div className="App">
        <h4>{process.env.NODE_ENV}</h4>
        <p>{process.env.REACT_APP_API_URL}</p>
        {process.env.NODE_ENV === 'production' && (
          <>
            <img src='../build/logo512.png' alt='' />
          </>
        )}
      </div>
      <div>
        <Ref />
      </div>
      <div>
        <UseReducer />
      </div>
    </div>
  );
}
export default App;
