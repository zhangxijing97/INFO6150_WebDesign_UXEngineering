# INFO6150_WebDesign_UXEngineering

## Week 1: Introduction to the Web

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

## Week 2: Requirements, UX, and Information Architecture

### 1. User Experience (UX) vs. User Interface (UI)
* **User Experience (UX)**: Defined as a person's perceptions and responses resulting from the use or anticipated use of a product, system, or service (ISO 9241-210). It is the cohesive, integrated set of all experiences a user has with a company and its products.
* **User Interface (UI)**: Refers specifically to the visual and input components of an app or website that allow user interaction.
* **Key Distinction**: UX is the whole experience (including backend efficiency and delight), while UI is the specific interaction layer. Good UX is achieved through intentional design that meets exact user needs with simplicity and elegance.

### 2. The Website Development Process
* **Discovery and Planning**: Understanding the problem, identifying users, and defining functionality.
* **Development**: The actual implementation of the designs and code.
* **Deployment**: Shipping the product to the live environment.
* **Maintenance**: Success measurement and ongoing updates.

### 3. Discovery: Understanding Users and Context
* **User Identification**: Recognizing that different people (Age, Culture, Tech familiarity, Disabilities) behave differently.
* **Context of Use**: Situational factors such as being in a hurry, having a poor data connection, urgency of the task, or acting on behalf of someone else.
* **Discovery Methods**:
    * **Stakeholder Interviews**: Talking to the "promoters" or clients responsible for the project.
    * **Field Studies & User Interviews**: Talking to actual end-users to find pain points.
    * **Competitive Testing**: Learning from what others in the market have done.

### 4. Persona and User Journey Analysis
* **Personas**: Fictitious characters that embody representations of your target users, including their goals and relationship with technology.
* **User Journey Maps**: A tool to describe the steps a user follows to accomplish a goal.
    * **Components**: The Person, the Environment/Scenario, Journey Phases, Actions/Mindsets/Emotions (often mapped with a "feeling" line), and Opportunities for improvement.

### 5. Information Architecture (IA)
* **Definition**: Organizing data in a way that is relevant, intuitive, and understandable.
* **Data vs. Information**: Data is raw input; Information is useful data that someone cares about.
* **Organization Types**:
    * **Categorical**: Grouping related items together.
    * **Hierarchical**: Organizing levels from general to specific.
    * **Sequential**: Step-by-step processes (e.g., checkout).
    * **Access Restriction**: Separating public info from private/secure data.
* **Information Scent**: Designing a path that gives users the intuition they are moving toward the right result.

### 6. Planning Tools: Maps, Charts, and Mockups
* **Website Maps**: Hierarchical diagrams where **one box equals one page**. It provides a blueprint of the site structure.
* **Box Charts**: Generic diagrams used for app screens or sections of a process.
* **Flowcharts**: Best for representing logic and sequences.
    * **Symbols**: Circle (Start/End), Rectangle (Instruction/Step), Diamond (Decision - Yes/No).
* **Mockups**: Drawings of how the page will look.
    * **Low-fidelity**: Simple sketches/schemes.
    * **High-fidelity**: Accurate, detailed, and sometimes interactive drawings.

### 7. SEO and Semantic HTML
* **SEO (Search Engine Optimization)**: Making content more findable and relevant for search engine spiders/crawlers.
* **Semantic HTML**: Choosing tags that represent the *meaning* of the content rather than just the appearance.
    * **Key Tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
    * **Importance**: Helps screen readers (accessibility), improves SEO, and makes code more maintainable.
* **WAI-ARIA Roles**: Attributes like `role="math"` that provide meaning to tags when standard semantic tags aren't sufficient.

### 8. Image Formats and Optimization
* **Lossy**: High compression but loses some quality (e.g., **JPG** - best for photos).
* **Lossless**: No quality loss but larger files (e.g., **PNG** - best for transparency; **SVG** - best for icons/vectors).
* **Modern Formats**:
    * **WebP**: Better compression than JPG/PNG; supports animation and transparency.
    * **AVIF**: Next-gen compression; even smaller than WebP but requires modern browser support.