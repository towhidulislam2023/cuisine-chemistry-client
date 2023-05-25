/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
    return (
        <>
            <div className="App">

                <div ref={ref} className='w-[100%] '>
                    <div>
                        <div>
                            <div className="md:w-[75%]  px-7 md:p-0 mx-auto ">
                                <div className="my-5">
                                    <h1 className='text-3xl font-bold '>1. Tell us the differences between uncontrolled and controlled components.</h1>
                                    <p className="text-lg">
                                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                                        <br />
                                        <span className="bg-green-100 text-black p-1">differences between uncontrolled and controlled components</span>:
                                        <div className="overflow-x-auto">
                                            <table className="table table-zebra w-full my-5 z-0">
                                                {/* head */}
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Differences</th>
                                                        <th>controlled</th>
                                                        <th>uncontrolled</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* row 1 */}
                                                    <tr>
                                                        <th>1</th>
                                                        <td>State management:</td>
                                                        <td>the state is managed by React and updated through callbacks</td>
                                                        <td>the state is managed  by the DOM and updated <br /> through direct manipulation of the DOM</td>
                                                    </tr>
                                                    {/* row 2 */}
                                                    <tr>
                                                        <th>2</th>
                                                        <td>Input values:</td>
                                                        <td> the value of an input field is set by the state</td>
                                                        <td>the value is set by the user through direct input</td>
                                                    </tr>
                                                    {/* row 3 */}
                                                    <tr>
                                                        <th>3</th>
                                                        <td>Event handling:</td>
                                                        <td>event handlers are passed down from the parent component</td>
                                                        <td> event handlers are added directly to the DOM</td>
                                                    </tr>
                                                    <tr>
                                                        <th>4</th>
                                                        <td>Form submission:</td>
                                                        <td>The form data is collected by the parent component <br /> through the state</td>
                                                        <td> the form data is collected directly from the DOM</td>
                                                    </tr>
                                                    <tr>
                                                        <th>5</th>
                                                        <td>Validation:</td>
                                                        <td>validation is done through the state and props</td>
                                                        <td> validation is done through the DOM.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </p>
                                </div>

                                <div className="my-5">
                                    <h1 className='text-3xl font-bold '>2.How to validate React props using PropTypes?</h1>
                                    <p className="text-lg">
                                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                                        <br />
                                        <span className="bg-green-100 text-black p-1">Prosses of validate React props using PropTypes</span>:
                                        The process of validating React props using PropTypes involves importing the PropTypes package from the 'prop-types' library, and then defining the expected props for a component. This is done by setting the 'propTypes' property on the component object to an object containing the prop names and their corresponding types. For example, to validate that a prop named 'name' is a string, you would set propTypes:"name: PropTypes.string" . When the component is rendered, React will automatically check the types of the props passed to the component against the defined propTypes and throw a warning if there is a mismatch.
                                    </p>
                                </div>
                                <div className="my-5">
                                    <h1 className='text-3xl font-bold '>3.Tell us the difference between nodejs and express js.?</h1>
                                    <p className="text-lg">
                                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                                        <br />
                                        <span className="bg-green-100 text-black p-1"></span>:
                                        <div className="overflow-x-auto">
                                            <table className="table w-full my-5 z-0">
                                                {/* head */}
                                                <thead>
                                                    <tr>
                                                        <th>Node.js</th>
                                                        <th>Express.js</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* row 1 */}
                                                    <tr>
                                                        <td>Node.js is a runtime environment</td>
                                                        <td> Express.js is a web framework.</td>
                                                    </tr>
                                                    {/* row 2 */}
                                                    <tr>
                                                        <td>Node.js provides a set of built-in modules for building server-side applications.

                                                        </td>
                                                        <td>Express.js provides additional <br />
                                                            functionality for building web applications, <br /> such as routing, middleware, and templating</td>
                                                    </tr>
                                                    {/* row 3 */}
                                                    <tr>
                                                        <td>Node.js is a low-level platform.</td>
                                                        <td>Express.js is built on top of Node.js <br /> and provides a simpler and more streamlined <br /> way to build <br /> web applications compared to using Node.js directly.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </p>
                                </div>
                                <div className="my-5">
                                    <h1 className='text-3xl font-bold '>4.What is a custom hook, and why will you create a custom hook?.</h1>
                                    <p className="text-lg">
                                        <span className="text-red-700 font-semibold text-lg">Ans:</span>
                                        <br />
                                        <span className="bg-green-100 text-black p-1"></span>:
                                        A custom hook is a reusable function in React that allows we to extract and reuse stateful logic from components. It's like a template or a blueprint for a piece of logic that we can use in multiple components.
                                        <br />
                                        we would create a custom hook to avoid repeating the same logic in multiple components, keeping Our code DRY (Don't Repeat Code) and organized. It can also make your code more readable and easier to maintain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pdf targetRef={ref} filename="blog-question.pdf">
                    {({ toPdf }) => <button className='btn btn-warning block mx-auto my-6' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <ScrollRestoration />
            </div>
        </>

    );
};

export default Blog;