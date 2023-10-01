import React from 'react';
import ReactDOM from 'react-dom/client';
//!below is react create element
/*
const heading = React.createElement("h1", { id: "heading" }, "This is React, let's go");
const root = ReactDOM.createRoot(document.getElementById("root"));
*/

const heading = <h1> JSX getting started heading react element🚀</h1>;
const Heading2 = function heading2Get() {
    return (<h1>hello world 🌎 calling like function</h1>);
};

//** creating react component is just a function which returns JSX */

const NewHeading = () => {
    return (
        <>
            <h1>Hello from newheading component 👋</h1>
            <h2>Heading 2</h2>
            {/* we can {} write js code inside the {} braces it will run
            and it will also sanitize whatever code will come */}
            {heading}
            {Heading2()}
            <Heading2></Heading2>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NewHeading />);


//** parcel is just another bundler with lot of benifits  */
/*
some of parcel bundler benifits
-image optimization
-HMR(hot module replacement)
-caching
-local server
-tree shaking
-Hot reloading
-code splitting
*/

