 /* ================================= 
 Theme Switcher using localStorage 
    - Add above var manywho = {
 ================================= */
let theme="https://files-manywho-com.s3.amazonaws.com/55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf/default-theme-v2.css";
let themeName = 'Default Theme';
let themeStorage = localStorage.getItem('theme');


 if ( themeStorage === 'default-theme' || themeStorage === null ) {
     
     theme =  "https://files-manywho-com.s3.amazonaws.com/55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf/default-theme-v2.css"; // insert default theme CSS
     var theme_name = 'Default Theme';
     
 } else if (themeStorage === 'secondary-theme') {
     theme =  "https://files-manywho-com.s3.amazonaws.com/55e9b01a-fc9e-4c66-aaa2-9360aea9eaaf/secondary-theme.css"; // insert secondary theme css
     var theme_name = 'Norton Special Theme';
 }



 /* ================================= 
 Theme Switcher using localStorage
 - Add below  var options = {}; 
 ================================= */
 (function (manywho) {
     class themeSwitch extends React.Component {
         constructor(props) {
             super(props);

         }
         componentDidMount() {

             let btnThemeDefault = document.querySelector('.btn-theme-default'); // Add theme-custom to outcome class that triggers custom theme. 
             let btnThemeSecondary = document.querySelector('.btn-theme-secondary'); // Add theme-default to outcome Class that triggers default theme.


             btnThemeSecondary.addEventListener('click', function () {
                 localStorage.remmoveItem('theme');
             });

             btnThemeDefault.addEventListener('click', function () {
                 localStorage.setItem('theme', 'custom');
             });

         }
         render() {
             return null;
         }

     }
    manywho.component.register('themeSwitch', themeSwitch);


 }(manywho));