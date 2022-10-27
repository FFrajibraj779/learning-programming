import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h1 className='text-center text-capitalize'>Important question on react js </h1>
            <div>
                <h4>1.What is 'cors'?</h4>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
            </div>
            <div>
                <h4>2 Why are you using `firebase`?</h4>
                <p>Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices</p>

            </div>
            <div>
                <h4>3. What other options do you have to implement authentication?</h4>
                <p>there are many option to implement authentication .some of example
                    <ul>
                        <li>MongoDB</li>
                        <li> Db2.</li>
                        <li> Couchbase Server.</li>
                        <li> Cloudera Enterprise Data Hub.</li>
                        <li>  Redis Enterprise Cloud.</li>
                        <li> DataStax Enterprise.</li>
                        <li> Amazon Redshift.</li>
                        <li> Oracle Database.</li>
                    </ul>
                </p>
            </div>
            <div>
                <h4>4.How does the private route work?</h4>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </div>
            <div>
                <h4>5.What is Node? How does Node work?</h4>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blogs;