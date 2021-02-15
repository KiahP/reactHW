const JSX = <h1>Hello JSX!</h1>;

const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>;

const JSX = (
    <div>
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
       {/*comment */} 
      </div>
    );

    const JSX = (
        <div>
          <h1>Hello World</h1>
          <p>Lets render this to the DOM</p>
        </div>
      );
      // Change code below this line
      ReactDOM.render(JSX, document.getElementById("challenge-node"));

      const JSX = (
        <div className='myDiv'>
          <h1>Add a class to this div</h1>
        </div>
      );

      const JSX = (
        <div>
          <h2>Welcome to React!</h2> <br />
          <p>Be sure to close all tags!</p>
          <hr />
        </div>
      );

      const MyComponent = function() {
        // Change code below this line
      
      return(
          <div>Completed challenge!</div>
      );
      
        // Change code above this line
      }

      class MyComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          // Change code below this line
       return (
            <div>
             <h1>Hello React!</h1>
            </div>
          );
      
      
          // Change code above this line
        }
      };

      const ChildComponent = () => {
        return (
          <div>
            <p>I am the child</p>
          </div>
        );
      };
      
      class ParentComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>I am the parent</h1>
              { /* Change code below this line */ }
      <ChildComponent />
      
              { /* Change code above this line */ }
            </div>
          );
        }
      };

      const TypesOfFruit = () => {
        return (
          <div>
            <h2>Fruits:</h2>
            <ul>
              <li>Apples</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Bananas</li>
            </ul>
          </div>
        );
      };
      
      const Fruits = () => {
        return (
          <div>
            { /* Change code below this line */ }
      <TypesOfFruit/>
            { /* Change code above this line */ }
          </div>
        );
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
          super(props);
        }
      
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Change code below this line */ }
      <Fruits/>
              { /* Change code above this line */ }
            </div>
          );
        }
      };


      class Fruits extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h2>Fruits:</h2>
              { /* Change code below this line */ }
      <NonCitrus />
              <Citrus />
              { /* Change code above this line */ }
            </div>
          );
        }
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
           super(props);
        }
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Change code below this line */ }
      <Fruits />
              <Vegetables />
              { /* Change code above this line */ }
              <Vegetables />
            </div>
          );
        }
      };


      class TypesOfFood extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              {/* Change code below this line */}
      <Fruits />
              <Vegetables />
              {/* Change code above this line */}
            </div>
          );
        }
      };
      
      // Change code below this line
      
      
      ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))


      // Change code below this line

class MyComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
            <div id="challenge-node">
                   <h1>My First React Component!</h1>
            </div>
      );
    }
  };
  ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));


  const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };

  
  const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>;
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
           <List tasks={["Walk", "Cook", "Bake"]} />
          <h2>Tomorrow</h2>
          <List tasks={["Study", "Code", "Eat"]} />
          { /* Change code above this line */ }
        </div>
      );
    }
  };

  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line
  
  
  
  ShoppingCart.defaultProps = {
    items: 0
  };


  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10} />
      { /* Change code above this line */ }
    }
  };

  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

  

