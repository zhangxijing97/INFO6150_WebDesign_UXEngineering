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

## Week 3: Design Principles

### 1. Visual Hierarchy
* **Definition**: The arrangement or presentation of elements in a way that implies importance.
* **Goal**: To guide the user's eye to the most important information first.
* **Signals of Importance**:
    * **Size**: Larger elements attract more attention.
    * **Color & Contrast**: Bright colors or high contrast stand out against muted backgrounds.
    * **Typography**: Bold or unique fonts signal hierarchy.
    * **Whitespace**: Providing room around an element makes it the focal point.
    * **Texture & Style**: Complex textures can draw the eye compared to flat areas.

### 2. Scanning Patterns
* **F-Pattern**: Users scan the top, then move down and scan horizontally again, eventually scanning vertically down the left side. Common for text-heavy pages like articles.
* **Z-Pattern**: The eye moves from top-left to top-right, then diagonally to bottom-left, and finishes at bottom-right. Common for landing pages with less text.

### 3. Gestalt Principles of Perception
* **Definition**: A set of laws describing how humans naturally organize individual visual elements into groups or unified wholes.
* **Proximity**: Elements close to each other are perceived as a group.
* **Similarity**: Elements that look alike (shape, color, size) are perceived as related.
* **Continuity**: The eye is compelled to move through one object and continue to another.
* **Closure**: The mind fills in missing information to create a complete image.
* **Figure/Ground**: The ability to separate the foreground (figure) from the background (ground).
* **Common Fate**: Elements moving in the same direction are perceived as more related than those staying still or moving elsewhere.

### 4. Color Theory and Accessibility
* **Contrast**: Text must have sufficient contrast against its background to be readable, especially for users with visual impairments.
* **Color as Meaning**: Never use color as the *only* way to convey information (e.g., "click the red button") because colorblind users may not distinguish it.
* **Brand Identity**: Color conveys emotion and brand personality.

### 5. Typography Principles
* **Readability**: How easy it is to read words/sentences; affected by line height, letter spacing, and font size.
* **Legibility**: How easily individual characters can be distinguished from one another.
* **Serif vs. Sans Serif**:
    * **Serif**: Fonts with small decorative strokes (feet) at the ends of characters.
    * **Sans Serif**: Fonts without those strokes; often preferred for digital screens due to better legibility at lower resolutions.

### 6. Design Best Practices
* **Consistency**: Use the same styles for similar elements (buttons, headings) across the entire site to reduce cognitive load.
* **Affordance**: The design of an object should suggest how it is used (e.g., a button should look clickable).
* **Feedback**: The system should always inform users about what is happening (e.g., a loading spinner or a "success" message).

## Week 4: CSS Basics

### 1. The CSS Box Model
* **Definition**: Every element in a web page is represented as a rectangular box.
* **Content**: The innermost part containing text or images.
* **Padding**: Transparent area around the content, inside the border.
* **Border**: A line that goes around the padding and content.
* **Margin**: Transparent area outside the border that separates the element from others.
* **Box-Sizing**: Use `box-sizing: border-box;` to ensure padding and borders are included in the element's total width and height.

### 2. CSS Selectors
* **Type Selector**: Targets elements by their tag name (e.g., `h1 { color: red; }`).
* **Class Selector**: Targets elements with a specific class attribute, prefixed with a dot (e.g., `.highlight { background: yellow; }`).
* **ID Selector**: Targets a unique element with a specific ID, prefixed with a hash (e.g., `#main-header { font-size: 20px; }`).
* **Attribute Selector**: Targets elements based on an attribute or its value (e.g., `input[type="text"]`).
* **Pseudo-classes**: Target elements in a specific state, such as `:hover`, `:active`, or `:focus`.

### 3. Cascade, Specificity, and Inheritance
* **The Cascade**: The rules that determine which CSS styles apply when multiple rules target the same element, based on source order and importance.
* **Specificity**: A weight assigned to a given selector; IDs (highest) > Classes/Attributes > Elements (lowest).
* **Inheritance**: Some properties (like `color` or `font-family`) are passed from parent elements to their children unless overridden.

### 4. Layout Basics: Display and Position
* **Display Property**:
    * `block`: Elements take up the full width available and start on a new line.
    * `inline`: Elements take up only as much width as necessary and do not start on a new line.
    * `inline-block`: Elements flow like inline elements but can have a custom width, height, and padding.
    * `none`: Removes the element from the page layout entirely.
* **Position Property**:
    * `static`: The default flow of the document.
    * `relative`: Positioned relative to its normal position without affecting other elements.
    * `absolute`: Positioned relative to its nearest positioned ancestor.
    * `fixed`: Positioned relative to the browser viewport; stays in place during scrolling.

### 5. Units of Measurement
* **Absolute Units**: `px` (pixels) are fixed and do not change based on other settings.
* **Relative Units**:
    * `em`: Relative to the font size of the element's parent.
    * `rem`: Relative to the font size of the root element (`<html>`).
    * `%`: Relative to the size of the parent element.
    * `vw`/`vh`: Relative to 1% of the viewport width or height.

### 6. Colors and Backgrounds
* **Color Formats**: Colors can be defined using Names, Hex codes (`#ffffff`), RGB (`rgb(255, 255, 255)`), or HSL.
* **Backgrounds**: Properties like `background-color`, `background-image`, and `background-size` control the element's backdrop.

## Week 5: CSS Layouts

### 1. Modern Layout Engines
* **Flexbox (Flexible Box Layout)**: Designed for one-dimensional layouts (either a row or a column). It excels at distributing space and aligning items within a container.
* **CSS Grid**: Designed for two-dimensional layouts (both rows and columns simultaneously). It is the most powerful layout system available in CSS for complex web designs.

### 2. Flexbox Core Concepts
* **Flex Container**: The parent element where `display: flex;` or `display: inline-flex;` is applied.
* **Main Axis vs. Cross Axis**: The main axis is defined by `flex-direction` (default is horizontal/row); the cross axis is perpendicular to it.
* **Alignment Properties**:
    * `justify-content`: Aligns items along the **main axis** (e.g., `center`, `space-between`, `flex-start`).
    * `align-items`: Aligns items along the **cross axis** (e.g., `center`, `stretch`, `flex-end`).
    * `flex-wrap`: Determines if items should wrap to a new line if they exceed the container width.
* **Flex Items**: The direct children of a flex container. Properties include `flex-grow`, `flex-shrink`, and `flex-basis`.

### 3. CSS Grid Core Concepts
* **Grid Container**: The parent element where `display: grid;` is applied.
* **Terminology**:
    * **Grid Lines**: The horizontal and vertical lines that divide the grid.
    * **Grid Tracks**: The space between two adjacent grid lines (rows or columns).
    * **Grid Cells**: The smallest unit of the grid (the intersection of a row and a column).
    * **Grid Areas**: A rectangular area composed of one or more grid cells.
* **Defining the Grid**:
    * `grid-template-columns` and `grid-template-rows`: Define the size and number of tracks.
    * **The `fr` Unit**: A fractional unit representing a portion of the available space in the grid container.
    * `gap` (or `grid-gap`): Defines the spacing between rows and columns.

### 4. Responsive Design & Media Queries
* **Viewport Meta Tag**: Essential for responsive design; tells the browser how to control the page's dimensions and scaling.
* **Media Queries**: A CSS technique used to apply styles based on device characteristics, primarily screen width.
    * **Syntax**: `@media (max-width: 768px) { ... }` applies styles only when the screen is 768px wide or less.
* **Mobile-First Approach**: Writing base styles for mobile screens first and using media queries to add complexity for larger screens (using `min-width`).

### 5. Common Layout Patterns
* **Centering**: Using Flexbox (`justify-content: center; align-items: center;`) is the modern standard for perfectly centering elements.
* **Holy Grail Layout**: A classic layout featuring a header, footer, and three columns (sidebar-main-sidebar), easily achieved with CSS Grid.
* **Sticky Footer**: Ensuring the footer stays at the bottom of the page regardless of content height.

### 6. Floats and Legacy Layouts
* **Floats**: Originally intended for wrapping text around images; previously used for entire page layouts before Flexbox/Grid.
* **Clearing**: Using `clear: both;` or a "clearfix" hack to prevent parent containers from collapsing when children are floated.
* **Note**: Floats should generally be avoided for structural layouts in modern development.

## Week 6: JavaScript Basics

### 1. Variables and Constants
* **`const`**: The modern standard for declaring variables that will not be reassigned.
* **`let`**: Used for variables that need to be reassigned later in the code.
* **Naming**: Use descriptive names; constants are for values that stay the same throughout the script.

### 2. Data Types
* **String**: Textual data, such as the output from a `prompt()`.
* **Number**: Numeric data used for calculations; can be integers or floats.
* **Boolean**: Logical values representing `true` or `false`.
* **Type Conversion**: Use `Number.parseInt()` to convert a string into a number for logical comparisons.

### 3. Operators and Comparators
* **Arithmetic Operators**: Basic math symbols like `+`, `-`, `*`, `/` used for calculations.
* **Comparison Operators**: Used to compare values, such as `>` (greater than), `<` (less than), or `===` (strict equality).
* **Logical Operators**: Symbols like `&&` (AND) and `||` (OR) used to combine multiple conditions.

### 4. Control Flow: The "if" Statement
* **Logic**: Executes a block of code only if a specific condition evaluates to true.
* **Application**: Used for "Challenge Time" tasks, such as displaying a warning message if a user's age is below a certain limit.
* **Structure**: Can be extended with `else` to provide an alternative path if the condition is false.

### 5. Interacting with the User
* **`window.alert()`**: Creates a simple popup box to display information to the user.
* **`window.prompt()`**: Opens a dialog box that accepts text input from the user.
* **`console.log()`**: Prints messages to the browser's Developer Tools console for debugging purposes.

### 6. DOM Manipulation with JavaScript
* **`document` Object**: A global object representing the entire web page.
* **`querySelector()`**: A method used to "grab" or select a specific HTML node (like an `<h1>`) from the page.
* **`textContent`**: A property that represents the text inside a node; it can be read or modified to update the page dynamically.

### 7. Frontend vs. Backend Concepts
* **Frontend**: Code that runs in the client program (the browser), involving HTML, CSS, and JS.
* **Backend**: Code that runs on server programs; can involve many different languages and services.
* **APIs**: The structure or protocol through which two programs communicate (e.g., REST, GraphQL).

## Week 7: Functions and DOM Manipulation

### 1. DOM Manipulation: Creating Content
* **Creating Elements**: Use `document.createElement('tagName')` to create a new HTML element node in memory.
* **Adding to the Page**: Use `parentElement.appendChild(newElement)` to attach the newly created element as the last child of a parent node.
* **Modifying Content**: 
    * `textContent`: Sets or returns the plain text content of a node.
    * `innerHTML`: Allows you to get or set the HTML markup contained within an element. Use with caution to avoid security risks like XSS.
* **Removing Elements**: Use `element.remove()` to delete an element from the DOM.


### 2. HTML Forms and Inputs
* **Accessing Input Values**: Use the `.value` property of an input element (e.g., `document.querySelector('input').value`) to retrieve what the user typed.
* **Common Input Types**: 
    * `text`, `password`, `number`, `checkbox`, `radio`.
* **The `<form>` Element**: Used to collect user input. Often paired with a "submit" event to process data.

### 3. Events and Event Handlers
* **Event Listeners**: The modern way to handle events is `element.addEventListener('event', function)`.
    * **Common Events**: `click`, `submit`, `input`, `change`, `mouseover`.
* **Event Object**: Automatically passed to the handler function (often named `e` or `event`). 
    * `e.preventDefault()`: Crucial for `submit` events to prevent the browser from refreshing the page.
    * `e.target`: Refers to the specific element that triggered the event.

### 4. Advanced Function Principles (SRP & DRY)
* **Single Responsibility Principle (SRP)**: A function should do only **one** thing. If a function handles data calculation, UI updates, and logging, it should be split.
* **DRY (Don't Repeat Yourself)**: Avoid redundant code. If you find yourself writing the same logic multiple times, move it into a shared function.
* **Idempotent Functions**: A function that can be called multiple times without changing the result beyond the initial application.

### 5. Best Practices for Function Design
* **Input Validation**: Always check if user inputs are valid (e.g., checking if a value is a number using `isNaN()`) before processing.
* **Edge Cases**: Consider unusual scenarios, such as empty inputs, zero values, or very large numbers, to ensure the program doesn't crash.
* **Naming**: Use "verb-noun" pairs for function names (e.g., `calculateTotal`, `updateUI`) to clearly state the function's purpose.

### 6. Testing and Debugging
* **Developer Responsibility**: The author of the code is responsible for thorough testing.
* **User Testing**: Letting others interact with your app is a primary way to discover unexpected bugs.
* **Cleanup**: Always remove `console.log()` statements and debugging code before final deployment to the client.

## Week 8: React Fundamentals

### 1. What is React

-   **Definition**: React is a JavaScript library for building UI using
    components.
-   **Core Idea**: UI is broken into reusable, self-contained
    components.
-   **Data Flow**: Unidirectional (data flows from JS → UI).
-   **Key Concept**: Re-render UI when data changes.

### 2. JSX and Rendering

-   **JSX**: JavaScript syntax that looks like HTML.
-   **Rules**:
    -   Use `className` instead of `class`
    -   Use camelCase for attributes
    -   Must have **one root element**
-   **Rendering**:
    -   `ReactDOM.createRoot()`
    -   `root.render(<Component />)`

### 3. Components

-   **Definition**: Functions that return JSX.
-   **Structure**:
    -   Logic + return JSX
-   **Example**:
    -   `const Component = () => { return <h1>Hello</h1>; }`
-   **Composition**:
    -   Components can contain other components

### 4. Props

-   **Definition**: Inputs passed into components
-   **Usage**:
    -   `<Component propName="value" />`
    -   Access via `props.propName`
-   **Destructuring**:
    -   `const Component = ({ propName }) => {}`
-   **Default Values**:
    -   `({ propName = "default" })`

### 5. Rendering Data

-   **Insert Variables**:
    -   `{variable}`
-   **Arrays**:
    -   Use `.map()`
    -   Must include `key`
-   **Example**:
    -   `{items.map((item, index) => <li key={index}>{item}</li>)}`

### 6. Component Behavior (Re-rendering)

-   **Trigger**:
    -   State or props change
-   **Effect**:
    -   Entire component function runs again
-   **Important**:
    -   Avoid heavy computation inside render

### 7. useState (State Management)

-   **Syntax**:
    -   `const [state, setState] = useState(initialValue)`
-   **Rules**:
    -   Do NOT modify state directly
    -   Use setter function
-   **Update Patterns**:
    -   `setState(newValue)`
    -   `setState(old => old + 1)`
-   **Key Idea**:
    -   State persists across re-renders

### 8. useEffect (Side Effects)

-   **Purpose**:
    -   Handle external effects (API calls, DOM updates)
-   **Syntax**:
    -   `useEffect(() => {}, [dependencies])`
-   **Behavior**:
    -   Runs after render
-   **Dependency Array**:
    -   Controls when effect runs
-   **Common Pitfall**:
    -   Infinite loop if updating state inside effect

### 9. React Principles

-   **Immutability**:
    -   Do not modify objects/arrays directly
    -   Use copies (`...spread`)
-   **Pure Functions**:
    -   Same input → same output
-   **Avoid Side Effects**:
    -   Keep render logic clean

### 10. Next.js Basics

-   **Purpose**:
    -   React framework for real apps
-   **Setup**:
    -   `npm install react react-dom next`
-   **Structure**:
    -   `app/page.jsx`
-   **Run App**:
    -   `npm run dev`
-   **Routing**:
    -   File-based routing system

    ## Week 9: APIs

### 1. What is an API

-   **Definition**: API = Application Programming Interface
-   **Purpose**: Allows frontend to communicate with backend services
-   **Common Usage**: Web APIs use HTTP to send/receive data
-   **Key Idea**: Client sends request → Server sends response

### 2. Types of APIs

-   **REST**:
    -   Most common, uses HTTP
-   **SOAP**:
    -   Uses XML, more strict
-   **GraphQL**:
    -   Query-based, flexible
-   **gRPC**:
    -   High performance, complex fileciteturn2file0

### 3. Requests and Responses

-   **Request**:
    -   Sent by client (browser)
-   **Response**:
    -   Sent by server
-   **Structure**:
    -   URL + method + headers + body
-   **Example**:
    -   `GET /api/data`

### 4. REST API Concepts

-   **Endpoint**:
    -   URL that returns data instead of HTML
-   **Example**:
    -   `/api/symbols`
-   **Purpose**:
    -   Get, create, update, or delete data fileciteturn2file0

### 5. HTTP Methods

-   **GET**:
    -   Retrieve data
-   **POST**:
    -   Send/create data
-   **PUT**:
    -   Update data
-   **DELETE**:
    -   Remove data

### 6. Status Codes

-   **200**:
    -   Success
-   **300s**:
    -   Redirects
-   **400s**:
    -   Client errors (e.g., 404)
-   **500s**:
    -   Server errors fileciteturn2file0

### 7. API Keys

-   **Purpose**:
    -   Identify user making requests
-   **Usage**:
    -   Passed in request URL or headers
-   **Important**:
    -   APIs may limit usage (quota)

### 8. Testing APIs (curl)

-   **Tool**:
    -   Command-line HTTP requests
-   **Usage**:
    -   `curl <url>`
-   **Purpose**:
    -   Test APIs without browser fileciteturn2file0

### 9. fetch (JavaScript)

-   **Purpose**:
    -   Make HTTP requests in JS
-   **Syntax**:
    -   `fetch(url)`
-   **Returns**:
    -   Promise

### 10. Asynchronous Programming

-   **Async Functions**:
    -   Do not block execution
-   **Reason**:
    -   Server responses take time
-   **Behavior**:
    -   Code continues while waiting fileciteturn2file0

### 11. Promises

-   **Definition**:
    -   Object representing future result
-   **Methods**:
    -   `.then()` → success
    -   `.catch()` → error

### 12. Handling Responses

-   **JSON Parsing**:
    -   `response.json()`
-   **Note**:
    -   Also async (returns promise)

### 13. Chaining

-   **Purpose**:
    -   Simplify promise handling
-   **Example**:
    -   `fetch().then().then()`

### 14. Callbacks

-   **Definition**:
    -   Function passed into another function
-   **Modern Usage**:
    -   Arrow functions

### 15. Error Handling

-   **Promise Style**:
    -   `.catch(err => {})`
-   **Async/Await Style**:
    -   `try { } catch (err) { }`

### 16. Async/Await

-   **Purpose**:
    -   Cleaner syntax for async code
-   **Syntax**:
    -   `const res = await fetch()`
-   **Rule**:
    -   Must be inside `async` function

### 17. Working with JSON Data

-   **Format**:
    -   Similar to JavaScript objects
-   **Usage**:
    -   Access with `json.key`
-   **Looping Objects**:
    -   `Object.keys()`

### 18. Updating the DOM with API Data

-   **Select Element**:
    -   `document.querySelector()`
-   **Insert HTML**:
    -   `insertAdjacentHTML()`
-   **Example**:
    -   Create `<option>` dynamically fileciteturn2file0

### 19. Full App Flow (API App)

-   **Steps**:
    -   Get requirements
    -   Call API
    -   Process data
    -   Update UI
-   **Example App**:
    -   Currency converter

### 20. Key Pitfalls

-   **Forgetting async handling**
-   **Not parsing JSON**
-   **API limit exceeded**
-   **Wrong endpoint or method**
-   **Missing API key**

## Week 10: TypeScript

### 1. Why Types Matter

-   **Problem in JS**:
    -   Dynamic typing can cause bugs (e.g., "1" + 2 → "12")
-   **Goal**:
    -   Make code predictable and safer
-   **Key Idea**:
    -   Types catch errors before runtime fileciteturn3file0

### 2. What is TypeScript

-   **Definition**:
    -   Superset of JavaScript with static typing
-   **Feature**:
    -   Type checking at development time
-   **Important**:
    -   Must be compiled to JavaScript (transpiled)

### 3. Basic Types

-   **Primitive Types**:
    -   `number`, `string`, `boolean`
-   **Syntax**:
    -   `const a: number = 1`
-   **Type Inference**:
    -   TypeScript can infer types automatically

### 4. Objects

-   **Inference**:
    -   TS understands object structure automatically
-   **Strict Checking**:
    -   Prevents assigning wrong types

### 5. Interfaces

-   **Purpose**:
    -   Define object structure
-   **Syntax**:
    -   `interface Book { title: string; pages: number }`
-   **Usage**:
    -   Enforces consistent shape

### 6. Types (type keyword)

-   **Alternative to Interface**:
    -   `type Book = { ... }`
-   **Difference**:
    -   Uses `=` instead of keyword block

### 7. Classes

-   **Definition**:
    -   Same as JS but with types
-   **Constructor Types**:
    -   Must define parameter types

### 8. Arrays

-   **Syntax**:
    -   `Book[]`
-   **Behavior**:
    -   Only allows defined type elements

### 9. Functions

-   **Parameter Types**:
    -   `function add(book: Book)`
-   **Return Type**:
    -   `(): Book`
-   **Arrow Functions**:
    -   Same typing rules apply

### 10. Optional Parameters

-   **Syntax**:
    -   `param?: type`
-   **Behavior**:
    -   May be undefined

### 11. Union Types

-   **Definition**:
    -   Multiple possible types
-   **Syntax**:
    -   `number | null`
-   **Use Case**:
    -   Functions returning different values

### 12. Type Extension

-   **Types**:
    -   `type Car = Vehicle & { ... }`
-   **Interfaces**:
    -   `interface Car extends Vehicle`
-   **Purpose**:
    -   Build on existing structures

### 13. any Type

-   **Meaning**:
    -   Disable type checking
-   **Usage**:
    -   Temporary only
-   **Warning**:
    -   Removes TypeScript benefits

### 14. unknown Type

-   **Meaning**:
    -   Type is unknown
-   **Rule**:
    -   Must be checked before use

### 15. Type Assertion

-   **Purpose**:
    -   Tell TS a specific type
-   **Syntax**:
    -   `value as Type`
-   **Warning**:
    -   Can cause runtime errors if wrong

### 16. typeof

-   **Usage**:
    -   Detect primitive type at runtime
-   **Example**:
    -   `typeof value === "string"`

### 17. Type Guards

-   **Definition**:
    -   Functions that check types
-   **Syntax**:
    -   `item is Type`
-   **Purpose**:
    -   Safe handling of union types

### 18. Type Narrowing

-   **Concept**:
    -   Reduce possible types
-   **Example**:
    -   `HTMLElement | null`
-   **Benefit**:
    -   Avoid runtime errors

### 19. DOM with TypeScript

-   **Problem**:
    -   Generic DOM types too broad
-   **Solution**:
    -   Specify exact type (e.g., `HTMLButtonElement`)
-   **Benefit**:
    -   Better autocomplete + safety

### 20. Real-world Usage

-   **Install**:
    -   `npm install typescript`
-   **Compile**:
    -   `tsc`
-   **React Support**:
    -   Built-in in modern frameworks

### 21. Key Pitfalls

-   **Using any too much**
-   **Wrong type assertions**
-   **Forgetting null cases**
-   **Mixing types incorrectly**

## Week 11: Modern Apps & Business Modeling

### 1. Modern JS Environment

-   **Goal**:
    -   Improve development speed and reliability
-   **Features**:
    -   Run JS outside browser (Node.js)
    -   Live reload, tooling, package systems
-   **Key Idea**:
    -   Modern apps rely on many tools working together

### 2. Node.js

-   **Definition**:
    -   JavaScript runtime outside the browser
-   **Uses**:
    -   Web servers
    -   Running scripts
-   **Important**:
    -   No `window` / `document`, uses `process`

### 3. Package Management (npm)

-   **Purpose**:
    -   Install and manage dependencies
-   **Concepts**:
    -   Packages = reusable modules
    -   Dependencies = packages used by other packages
-   **Alternatives**:
    -   Yarn, pnpm

### 4. Module Systems

-   **Types**:
    -   CommonJS (`require`)
    -   AMD
    -   ES Modules (`import/export`)
-   **Standard**:
    -   ES Modules (modern JS)

### 5. Development Process

-   **Stages**:
    -   Initialize → Develop/Test → Deploy
-   **Tools**:
    -   Scaffolders, build tools, dev tools

### 6. Scaffolding

-   **Purpose**:
    -   Auto-create project structure
-   **Examples**:
    -   `create-next-app`
-   **Benefit**:
    -   Saves setup time

### 7. Build Process

-   **Goal**:
    -   Convert source code → browser-ready JS

### 8. Transpilers

-   **Definition**:
    -   Convert code (e.g., JSX → JS)
-   **Example**:
    -   Babel

### 9. Bundlers

-   **Definition**:
    -   Combine modules into one file
-   **Example**:
    -   Webpack
-   **Key Idea**:
    -   Resolve dependencies

### 10. Minifiers

-   **Purpose**:
    -   Reduce file size
    -   Obfuscate code

### 11. Packagers

-   **Purpose**:
    -   Prepare final `/dist` folder for deployment

### 12. Development Tools

-   **Web Server**:
    -   Local development server
-   **Live Reload**:
    -   Auto refresh on changes
-   **Linters**:
    -   Enforce code quality
-   **Test Tools**:
    -   Run automated tests

### 13. Testing Overview

-   **Purpose**:
    -   Ensure correctness
    -   Prevent regressions

### 14. Testing Types

-   **Unit Tests**:
    -   Test small pieces of code
-   **Integration Tests**:
    -   Test interactions
-   **End-to-End Tests**:
    -   Test full user flow

### 15. Deployment

-   **Definition**:
    -   Upload app to server (host)
-   **Considerations**:
    -   Cost, scalability, framework support

### 16. CI/CD

-   **Definition**:
    -   Automate build + deployment
-   **Flow**:
    -   Code change → build → test → deploy

### 17. Agile & Scrum

-   **Agile**:
    -   Iterative development
-   **Scrum**:
    -   Sprints, tasks, retrospectives

### 18. Use Case Modeling

-   **User**:
    -   Role (e.g., Client, Manager)
-   **Use Case**:
    -   Action performed by user
-   **Goal**:
    -   Define system behavior

### 19. Use Case Structure

-   **Format**:
    -   User action → system response
-   **Focus**:
    -   "Golden path" (normal flow)

### 20. Business Modeling

-   **Goal**:
    -   Define system data and relationships
-   **Concepts**:
    -   Entities (objects)
    -   Relationships

### 21. CRUD Operations

-   **Meaning**:
    -   Create, Read, Update, Delete
-   **Usage**:
    -   Basic app operations

### 22. Data Modeling

-   **Approach**:
    -   Identify nouns → objects
    -   Identify actions → methods

### 23. Object Relationships

-   **Inheritance**:
    -   One type extends another
-   **Composition**:
    -   One object contains another

### 24. From Model to API

-   **Mapping**:
    -   CRUD → REST endpoints
-   **Example**:
    -   GET /books
    -   POST /book
    -   PUT /book/id
    -   DELETE /book/id

### 25. Key Pitfalls

-   **Ignoring modeling phase**
-   **Overcomplicating architecture**
-   **Poor dependency management**
-   **Skipping testing**
