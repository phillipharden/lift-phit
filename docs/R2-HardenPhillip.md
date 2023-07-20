# Final Project 

* **RESEARCH - Planning - Week 1"**
* **Phillip Harden**
* **Due Sun May 14 @ 11:59 pm**

<br>

## Key Concepts - Handling Errors

**Error Codes/Status Codes**: APIs typically use standardized HTTP status codes to indicate the outcome of a request. These status codes provide information about the success or failure of the request. Common status codes include 200 (OK), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), and 500 (Internal Server Error). Understanding and interpreting these codes is essential for error handling.

* [HTTP Status Codes](https://www.webfx.com/web-development/glossary/http-status-codes/)
* [MDN Web Docs on HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)



**Error Responses**: When an error occurs, APIs often respond with error messages or error objects in the response body. These messages provide additional details about the error and can help in troubleshooting or informing the client about the issue. The response format can vary based on the API, such as JSON, XML, or plain text.

* [Error Handling](https://docs.devland.is/technical-overview/api-design-guide/errors)
* [REST API response codes and error messages](https://www.ibm.com/docs/en/odm/8.8.0?topic=api-rest-response-codes-error-messages)


**Error Handling Mechanisms**: APIs should provide clear and consistent error handling mechanisms to facilitate communication between the client and server. This may involve using specific HTTP headers, error response formats, or error code conventions. Well-documented APIs typically specify the expected error formats and how to handle them.

* [Error Handling](https://www.techopedia.com/definition/16626/error-handling#:~:text=Error%20handling%20helps%20in%20handling,tools%20to%20handle%20the%20errors.)
* [Google Cloud API Design Guide on Error Handling](https://cloud.google.com/apis/design/errors)


**Error Logging and Monitoring**: Logging errors that occur within your API is crucial for troubleshooting and maintaining the overall system health. By implementing error logging and monitoring, you can track and analyze errors, identify patterns, and proactively resolve issues to improve the API's reliability.

* [9 Best Practices for Application Logging that You Must Know](https://www.atatus.com/blog/9-best-practice-for-application-logging-that-you-must-know/)
* [Best Practices and Standards for Logging and Monitoring](https://www.dnsstuff.com/logging-monitoring-best-practices)
* [How to Log API Errors on Your Server](https://nordicapis.com/how-to-log-api-errors-on-your-server/)


**Graceful Error Handling**: When encountering an error, APIs should strive to provide meaningful and informative error messages to the client. This helps developers understand the issue and take appropriate actions. Avoid exposing sensitive information in error messages to maintain security.

* [Graceful Error Handling In React Recap](https://blog.logrocket.com/tech-meetups/graceful-error-handling-in-react-recap/)
* [JavaScript Weekly: Graceful Error Handling](https://medium.com/launch-school/javascript-weekly-graceful-error-handling-2f4045262df)
* [Don't just check errors, handle them gracefully](https://dave.cheney.net/2016/04/27/dont-just-check-errors-handle-them-gracefully)


**Rate Limiting and Throttling**: To protect your API from abuse or excessive usage, implementing rate limiting and throttling mechanisms is essential. These techniques restrict the number of requests a client can make within a given time period, preventing potential issues like Denial of Service (DoS) attacks and ensuring fair usage for all clients.

* [API Rate Limiting vs. API Throttling: How Are They Different?](https://nordicapis.com/api-rate-limiting-vs-api-throttling-how-are-they-different/)
* [Rate Limiting and Throttling for RESTful API Security](https://www.linkedin.com/advice/1/how-do-you-rate-limit-throttle-restful-api-requests)



**Exception Handling**: In your API's backend code, proper exception handling should be implemented. This involves catching and appropriately handling exceptions or errors that occur during the processing of requests. Exception handling helps prevent unexpected crashes and provides the opportunity to return appropriate error responses.

* [Exception Handling for API Calls](https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/exception-handling-for-api-calls)
* [Handling Exceptions Returned from the Web API](https://www.codemag.com/article/1603031/Handling-Exceptions-Returned-from-the-Web-API)


**Documentation and Error Reference**: Well-documented APIs provide clear guidance on how to handle errors. It's important to document the possible error codes, their meanings, and any additional information that can assist developers in troubleshooting. A comprehensive error reference allows clients to handle errors effectively and reduces support requests. 

* [API Documentation - Error handling](https://www.rev.com/api/responsecodes)
* [How do you document and communicate your API error handling policies and expectations to your API consumers?](https://www.linkedin.com/advice/0/how-do-you-document-communicate-your-api-error)


<br>

### Additional course resources:


* [API Guidelines](https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md)

<br>

* [[Tutorial] Many-to-many Relationships](https://community.dbdiagram.io/t/tutorial-many-to-many-relationships/412)
* [Many to Many Example](https://condor.depaul.edu/gandrus/240IT/accesspages/many_to_many_example.html)
* [A Guide To Error Handling](https://scoutapm.com/blog/express-error-handling)

<br>

## Complex Sequelize

**Many-to-many relationships** can be tricky because they require a junction table to connect two other tables. This tutorial walks through an opinionated way to do just that.

* [Many-to-Many Relationships in Sequelize](https://khalilstemmler.com/articles/sequelize-tags-junction-pattern/) 
* [Advanced M:N Associations](https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/)
* [Sequelize Many-to-Many Association example – Node.js & MySQL](https://www.bezkoder.com/sequelize-associate-many-to-many/)

**Validation & Constraints**: How to create validation rules for your models and how to add custom validation.

* [Validation & Constraints](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#validators) 
* 

**Sequelize Aggregate Functions**: There are times when you want to make complex queries with Sequelize, this article shows how to perform some of the different aggregate functions to simplify the process.

* [Sequelize Aggregate Functions](https://www.woolha.com/tutorials/sequelize-aggregate-functions-sum-count-min-max-etc-examples) 


**Error Handling In Node/Express**: Handling all the different types of errors can get repetitive and tiresome. This article describes different ways to approach errors and how this has evolved over time.

* [Error Handling In Node/Express](https://codeburst.io/node-express-async-code-and-error-handling-121b1f0e44ba) 
* [Error handling in node.js](https://medium.com/backenders-club/error-handling-in-node-js-ef5cbfa59992)
* [Error Handling in NodeJS (Complete Guide) | Node Tutorial](https://www.youtube.com/watch?v=mGPj-pCGS2c)


**Querying Data**: This tutorial demonstrates some of the basics when it comes to querying data.

* [Querying Data](https://egghead.io/lessons/node-js-sequelize-querying-basics-using-findall) This tutorial demonstrates some of the basics when it comes to querying data.

## Planning
 

* [Confirmshaming](https://medium.com/misusability/confirmshaming-the-art-of-insulting-your-target-group-2de35833c966)
> Understand how tone matters to the audience

* [Laws of XU](https://lawsofux.com/aesthetic-usability-effect.html)
> This beautiful site walks through the 20 laws of UX to apply in designs

* [How to Fix 8 Common Design Mistakes](https://www.columnfivemedia.com/8-design-mistakes-ruin-your-visual-content-easy-fixes)
> Learn about mistakes most often made in a design, and how to fix them

* [Dialog Design](https://uxplanet.org/5-essential-ux-rules-for-dialog-design-4de258c22116)
> How to design dialog boxes that are great for users

* [15 Rules for Creating Web Apps](https://www.designforfounders.com/web-app-ux/)
> A fantastic guide to 15 things we should do during site design

* [Design Process](https://medium.com/hinderlingvolkart/why-you-dont-need-wireframes-in-your-design-process-c0566b2f871d)
> The process of designing from nothing to beautiful designs. Each step has a purpose and can help us get started if we are feeling stuck

* [Space in Design](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)
> Understand the importance of whitespace and how to effectively layout applications

<br>

## Designing an API


* [How to Design an API](https://hackernoon.com/restful-api-design-step-by-step-guide-2f2c9f9fcdbf)
> This guide helps us avoid common errors when designing an API.

* [Documentation Driven Development](https://opensource.com/article/17/8/doc-driven-development)
> Learn how writing documentation before writing code can be beneficial.

* [Breaking Your Designs Down](https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262)
> Atomic design is a large trend in the industry and this article takes that design pattern and brings it to the React world.





<br>