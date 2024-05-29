### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  - React Router allows React application to navigate between different pages or views based on the URL.

- What is a single page application?

  - A single page application is a web app that loads one HTML page and updates its content dynamically without reloading the page.

- What are some differences between client side and server side routing?
- Client-side routing updates the content on the web page without reloading, while server-side routing reloads the whole page from the server.

- What are two ways of handling redirects with React Router? When would you use each?

  - Two ways of handling redirects with React Router are using the Navigate component and the useNavigate hook. Use Navigate for automatic redirects based on conditions, and use useNavigate for redirecting in response to user actions or events.

- What are two different ways to handle page-not-found user experiences using React Router?

  - Two ways to handle page-not-found in React Router are using a Route with the path "\*" to show a 404 component, and using useLocation to check for an invalid path and render a 404 component accordingly.

- How do you grab URL parameters from within a component using React Router?

  - You grab URL parameters in a React Router component using the useParams hook.

- What is context in React? When would you use it?

  - Context in React is a way to share values like state or functions between components without passing props manually. You use it when you need to provide data to far to reach components.

- Describe some differences between class-based components and function
  components in React.

  - Class-based components use classes and methods, while function components hooks.

- What are some of the problems that hooks were designed to solve?
  - Hooks were designed to make it easier to store data, handle side effects, and to avoid writing complicated class components.
