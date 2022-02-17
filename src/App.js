//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
    <form id="Form1">
        <h3>Създай акаунт</h3>
        <input type="text" placeholder ="E-mail" required/>
        <input type="password" placeholder ="Парола" required/>
        <input type="password" placeholder ="Потвърди паролата" required/>
        <div className="btn-box">
          <a href="loginForm.html" className="button" >Имам акаунт</a>

          <button type="button" id="Next1">Напред</button>
   </div>
      </form>
      <form id="Form2">
          <h3>Лична информация</h3>
          <input type="text" placeholder ="Име" required/>
          <input type="text" placeholder ="Прякор" required/>
          <div className = "pre">Пол</div>
          <label id = "man" htmlFor="indoor"><input id="indoor" type="radio" name="мъж-жена" value="мъж" checked/>мъж</label>
          <label id = "woman" htmlFor="outdoor"><input id="outdoor" type="radio" name="мъж-жена" value="жена"/>жена</label>
      
          <div className="btn-box">
            <button type="button" id="Back1">Назад</button>
            <button type="button" id="Next2">Напред</button>
        </div>
        </form>
        <form id="Form3">
          <h3>Лична информация</h3>
          <input type="text" placeholder ="Височина(см)" required/>
          <input type="text" placeholder ="Тегло(кг)" required/>
          <div className = "pre">Цел</div>
          <label id = "gain" htmlFor="indoor"><input id="indoor" type="radio" name="покачване-сваляне" value="покачване" checked/>покачване</label>
          <label id = "lose" htmlFor="outdoor"><input id="outdoor" type="radio" name="покачване-сваляне" value="сваляне"/>сваляне</label>

          <div className="btn-box">
            <button type="button" id="Back2">Назад</button>
            <button type="submit" id="Next3">Готово</button>
        </div>
        </form>
       

       <div className ="step-row">    
           <div id="progress"></div>        
            <div className="step-col"><small>Стъпка 1</small></div>
            <div className="step-col"><small>Стъпка 2</small></div>
            <div className="step-col"><small>Стъпка 3</small></div>
            
            

       </div>
       </div>
  );
}
  export default App;
