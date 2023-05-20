import React from 'react';

const Blog = () => {
  const blogData = [
    {
      question: 'What is an access token and refresh token?',
      answer: 'An access token is a credential used to authenticate and authorize a user\'s access to protected resources in a system. It is typically a short-lived token that is issued to a client after successful authentication. The access token is sent with each subsequent request to access protected resources.\n\nA refresh token is a long-lived token used to obtain a new access token without requiring the user to re-authenticate. It is typically used when the access token expires. The refresh token is securely stored on the client-side and sent to the server to request a new access token.\n\nIt is recommended to store the access token in the client-side memory (e.g., JavaScript variable) for easy access during the user\'s session. The refresh token should be securely stored, such as in an HTTP-only cookie, to protect it from cross-site scripting (XSS) attacks.',
    },
    {
      question: 'Compare SQL and NoSQL databases',
      answer: 'SQL (Structured Query Language) databases are relational databases that store data in structured tables with predefined schemas. They use SQL for data manipulation and querying. SQL databases ensure data consistency, enforce referential integrity, and support complex queries.\n\nNoSQL (Not only SQL) databases, on the other hand, store data in a non-tabular format. They are schema-less and provide flexible data models, making them suitable for handling unstructured or semi-structured data. NoSQL databases offer high scalability and availability.\n\nThe choice between SQL and NoSQL databases depends on the specific requirements of the application, such as data structure, scalability needs, and the complexity of the queries to be performed.',
    },
    {
      question: 'What is Express.js? What is Nest.js?',
      answer: 'Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js offers features like routing, middleware support, template rendering, and handling HTTP requests and responses. It is known for its minimalistic and unopinionated approach, allowing developers to have more control over the application structure.\n\nNest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and enhances it with additional features inspired by Angular, such as dependency injection, module-based architecture, and decorators. Nest.js promotes a structured and organized codebase using TypeScript or JavaScript.\n\nBoth Express.js and Nest.js are widely used frameworks for building server-side applications with Node.js. The choice between them depends on the project requirements, developer preferences, and the need for additional features and architectural patterns.',
    },
    {
      question: 'What is MongoDB aggregate and how does it work?',
      answer: 'MongoDB aggregate is a powerful framework for performing data aggregation operations on MongoDB collections. It allows you to process and transform documents using a pipeline of stages. Each stage performs a specific operation on the input documents and passes the results to the next stage.\n\nThe aggregation pipeline consists of multiple stages like $match, $group, $sort, $project, $lookup, and more. These stages can be combined in a sequence to perform complex aggregation tasks, including filtering, grouping, sorting, joining, and calculating aggregated values.\n\nAggregation in MongoDB provides a flexible and efficient way to retrieve and analyze data. It enables complex queries and transformations that go beyond basic CRUD operations. By using aggregation, you can perform computations, generate reports, and derive insights from your data.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Ans are given bellow</h1>
      {blogData.map((blog, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{blog.question}</h2>
          <p>{blog.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
