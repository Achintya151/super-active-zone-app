import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Blogs = () => {
    return (
        <div className='container'>
            <div className='text-center py-5'>
                <h1>Question & Answer</h1>
            </div>
            <div>
                <h4>How does React work?</h4>

                <p><span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>  ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. Users can create a representation of a DOM node by declaring the Element function in React. You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript. In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
            </div>
            <div>
                <h4>Difference between Props & State?</h4>

                <p><span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span> Difference between props and state discussed below:

                    <p>State</p>

                    <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>

                    <p>Props</p>

                    <p>
                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                    </p>
                </p>
            </div>
            <div>
                <h4>Use of UseEffect other than API data load?</h4>
                <p><span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span> useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

                    useEffect(callback, dependencies) invokes the callback after initial mounting, and on later renderings, if any value inside dependencies has changed.

                    The next step to mastering useEffect() is to understand and avoid the infinite loop pitfall.</p>

            </div>
        </div>
    );
};

export default Blogs;