<h1>Dental Website</h1>

<h2>Tech Stack</h2>
<p>ReactJS, Bootstrap using reactstrap, formik </p>

<h2>Set Up</h2>
<ul>
    <li><code>npm create vite@latest . -- --template react  </code></li>
    <!-- <li><code>npm install bootstrap font-awesome@4.7.0 formik@2.2.9 react-router-dom@6.2.1 react-spring@9.4.5-beta.1 reactstrap@9.0.1 redux-logger@3.0.6 typeface-open-sans@1.1.13 react-redux</code></li> -->
    <li>Testing this instead<code>npm install bootstrap font-awesome@4.7.0 formik yup react-router-dom react-spring react-spring/web reactstrap redux-logger typeface-montserrat typeface-open-sans@1.1.13 redux react-redux @reduxjs/toolkit   node-sass framer-motion redux-thunk redux-persist </code></li>
    <li>Any changes made to custom-theme.scss will update custom-theme.css<code>sass --watch ./src/custom-theme.scss:./src/custom-theme.css</code></li>
    <li> npm install -g json-server</li>
    <li>run command where you have json-server folder <code>json-server -H 0.0.0.0 --watch db.json -p 3031 -d 2000</code> Needs to match port number in shared/baseUrl.js</li>
</ul>
