# **To-Do List App**

An intuitive and interactive web application designed to help users manage their daily tasks effectively. This app supports task creation, viewing, editing, and deletion, with an elegant and responsive design.

---

## **Features**
- **Dynamic To-Do List**:
  - Single "Today" list to organize daily tasks.
  - Tasks can be added, edited, or deleted seamlessly.
- **Task Management**:
  - Visual representation of tasks with checkboxes for easy tracking.
  - Inline editing of tasks for quick updates.
- **Date Integration**:
  - Displays the current date dynamically in the header of the "Today" list.
- **Responsive Design**:
  - Optimized for different devices with a clean and minimal layout.
- **Dynamic Footer Year**:
  - Footer always displays the current year using EJS for dynamic updates.

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: To run the server-side code.
- **PostgreSQL**: To store task data persistently.

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

3. Configure the database:
   - Create a PostgreSQL database and update the `.env` file with your credentials:
     ```plaintext
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_HOST=your_host
     DB_NAME=your_database
     DB_PORT=5432
     ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Open your browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

---

## **How to Use**
1. **View Tasks**:
   - Access the "Today" list on the homepage, dynamically updated with the current date.
2. **Add a Task**:
   - Enter a new task in the input field and press the "+" button.
   - The task will be added to the "Today" list.
3. **Edit a Task**:
   - Click the pencil icon next to the task, update the text, and save changes using the tick icon.
4. **Delete a Task**:
   - Use the checkboxes to track completed tasks visually and delete them from the database.

---

## **Dynamic Footer Year**
The application includes a footer that displays the current year dynamically. Here’s the code snippet used for this functionality:

```html
<footer>
  Copyright © <%= new Date().getFullYear() %>
</footer>
```

This code, written in EJS (Embedded JavaScript Templates), ensures the footer remains up-to-date by fetching the current year programmatically.

---

## **Technologies Used**
### **Backend**:
- **Node.js**: Runtime environment for server-side functionality.
- **Express.js**: Framework for routing and middleware.
- **PostgreSQL**: Relational database for storing tasks securely.

### **Frontend**:
- **EJS (Embedded JavaScript Templates)**: For rendering dynamic and reusable HTML pages.
- **CSS**:
  - Enhances the app's visual appeal.
  - Provides a responsive design for various devices.
- **Font Awesome**: Icons for user interactions like editing or adding tasks.

---

## **Project Structure**
### **Server-Side (`app.js`)**:
- **GET `/`**: Fetches tasks from the database and displays the "Today" list.
- **POST `/add`**: Adds a new task to the "Today" list.
- **POST `/edit`**: Updates an existing task in the database.
- **POST `/delete`**: Deletes a task from the database.

### **Database (`list` table)**:
| Column | Type         | Description             |
|--------|--------------|-------------------------|
| id     | SERIAL       | Unique ID for each task |
| title  | VARCHAR(255) | Title of the task       |

### **Frontend (`index.ejs`)**:
- Dynamic rendering of tasks, including inline editing and deletion functionality.

### **Partials (`header.ejs` and `footer.ejs`)**:
- **header.ejs**: Contains the navigation bar.
- **footer.ejs**: Displays the current year dynamically.

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
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
5. Submit a pull request.

---

## **License**
This project is licensed under the **MIT License**, allowing modification and redistribution with proper attribution.

---

## **Acknowledgments**
- Inspired by the need for simple task management tools.
- Grateful to the open-source libraries and frameworks that supported development.
