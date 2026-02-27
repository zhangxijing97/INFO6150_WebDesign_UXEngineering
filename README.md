# INFO6150_WebDesign_UXEngineering

## Week 1: Introduction to the Web - Exam Review Notes

### 1. The Internet vs. The Web
* **The Internet**: Conceptually, it is just a bunch of computers connected to each other. They talk the same languages called **protocols**.
* **The Web**: Created in 1989 by Sir Tim Berners-Lee to facilitate hyperlinked documents.
* **Timeline**: The Internet opened to the public in 1991, and the Web entered general use in 1994.
* **Resiliency**: The Internet is designed to be always connected and resilient.

### 2. Client/Server Model & HTTP
* **Role of the Server**: Holds the data and has the ability to operate on it.
* **Role of the Client**: Wants data and asks the server for it.
* **Protocol**: Defined as the language and rules for communication.
* **HTTP Protocol**: Allows servers and clients to send, receive, and work with HTML and other files.
    * **Request**: An example is the command `GET /index.html`.
    * **Response**: An example is the status `200 OK`.

### 3. Core Web Technologies (HTML, CSS, JS)
* **HTML (HyperText Markup Language)**: Defines the **content** (what is on the page) and gives structure.
    * Uses **elements** represented by **tags** (e.g., `<html>`, `<body>`, `<p>`).
    * Tags can have **attributes** to specify details (e.g., `<meta charset="UTF-8">`).
* **CSS (Cascading Style Sheets)**: Defines the **look and feel** (how the content should be rendered).
    * Uses **declarations** consisting of a **Property** and a **Value** separated by a **colon**.
    * Declarations are grouped in curly braces `{}` called a **declaration block**.
* **JavaScript**: A full-fledged programming language that provides **interactivity** (any functionality beyond writing on a page).

### 4. DOM (Document Object Model)
* The DOM is a model created by the browser when a page loads.
* HTML elements are represented as **nodes** within this model.
* **Common JavaScript Methods**:
    * `document`: A global object representing the page.
    * `querySelector()`: Grabs the specific node/element you want to manipulate.
    * `textContent`: Represents the text content of the node; modifying this updates the page dynamically.

### 5. Frontend vs. Backend
* **Frontend**: What happens in the client program (the browser).
* **Backend**: What happens in server programs; involves services collaborating for large applications.
* **Web APIs**: 
    * **Client-side APIs**: Standard libraries available within the browser for JS to manipulate the page.
    * **Server-side APIs**: Protocols for communication between a browser program and a server program.
    * **Common Types**: REST (uses HTML over HTTP), SOAP (uses XML), GraphQL (query language), and gRPC (binary data).

### 6. Version Control with Git & GitHub
* **Git**: A versioning system used to control project versions and improve team collaboration.
* **GitHub**: A provider for Git; currently owned by Microsoft.
* **Key Concepts**:
    * **Repository (Repo)**: Used to store a project.
    * **Branch**: Separate, coexisting copies of a project. 
    * **Commit**: Used to "save" your work changes to a branch.
    * **Pull Request (PR)**: A request to update the **Main** branch with contents of another branch, usually followed by a review process.
    * **Rule**: Never commit directly to your main branch.