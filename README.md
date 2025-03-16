# **To-Do List App**

A simple and interactive web application to help users manage their daily tasks and work-related lists. This app offers an intuitive design and functionality for creating, viewing, and organizing tasks effortlessly.

---

## **Features**
- **Dynamic To-Do Lists**:
  - Separate lists for "Today" and "Work".
  - Add tasks to the respective list based on user selection.
- **Task Management**:
  - Create, view, and organize tasks interactively.
  - Visual representation of tasks with checkboxes for easy tracking.
- **Date Integration**:
  - Displays the current date dynamically for the "Today" list.
- **Responsive Design**:
  - Optimized for different devices with a clean and minimal layout.

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: To run the server-side code.

---

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayu1404/To-Do-List-App.git
   cd To-Do-List-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

---

## **How to Use**
1. **View Tasks**:
   - Navigate to the "Today" or "Work" list using the navigation bar.
2. **Add a Task**:
   - Enter a new task in the input field and press the "+" button.
   - The task will be added to the active list ("Today" or "Work").
3. **Mark Tasks**:
   - Use the checkboxes to track completed tasks visually.

---

## **Technologies Used**
- **Node.js**: Backend runtime for server-side functionality.
- **Express.js**: Framework for routing and middleware.
- **EJS (Embedded JavaScript Templates)**: For rendering dynamic HTML pages.
- **CSS**:
  - Enhances the visual aesthetics of the app.
  - Provides a responsive design for better user experience.
- **Font Awesome**: For stylish icons used in navigation links.

---

## **Project Structure**
### **Server-Side (app.js)**:
- **GET `/`**:
  - Displays the "Today" list with the current date as the header.
- **GET `/work`**:
  - Displays the "Work" list.
- **POST `/`**:
  - Adds a new task to the "Today" list or redirects to `/work` for the "Work" list.

### **Front-End (index.ejs)**:
- **Navigation Bar**:
  - Links to "Today" and "Work" lists for seamless toggling.
- **Task Display**:
  - Lists all tasks dynamically under the current list header.
- **Form**:
  - Input field for adding new tasks.

### **Partials**:
1. **header.ejs**:
   - Contains the navigation bar for switching between "Today" and "Work" lists.
2. **footer.ejs**:
   - Displays the current year dynamically.

---

## **Usage**
1. Open the app in your browser at `http://localhost:3000`.
2. Manage your tasks with separate lists for daily and work-related tasks.
3. Track task completion using the provided checkboxes.

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**
This project is licensed under the MIT License, allowing you to modify and distribute the project with proper attribution.

---

## **Acknowledgments**
- Inspired by the need for simple task management tools.
- Thanks to the open-source libraries that helped build this project.
