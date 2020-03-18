/* ================================= 
[Component Pattern / Template]
Used for creating new components
 ================================= */

 class CustomComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Hello World"
        }
    }

    foo = (param) => {
        console.log("Example of", param); 
    }
    componentDidMount() {
       this.foo("Passing foo after load"); 
       
       // Loads after Dom 

    }
    render() {
        return ( 
            React.createElement("strong", { class: "hello-foo" }, this.state.test)
       )
       
    }

}
manywho.component.register('custom-component', CustomComponent);