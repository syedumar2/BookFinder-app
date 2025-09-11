
# Book Finder

Book Finder is a web application designed for college students like Alex who want to quickly search for books. Users can search by title, author, subject, or publisher and view detailed information, including covers, descriptions, and authors.

The app uses the Open Library Search API
 to fetch book data and displays results in a clean, responsive interface.



---

## Table of Contents
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Installation / Usage](#installation--usage) 
5. [Video Demonstration](#video-demo) 
6. [Deployment](#deployment)
  

---
## Overview

**Book Finder** is a web application designed to help users quickly search for books and explore detailed information. It is built for college students like Alex who want an intuitive and fast way to discover books by title, author, subject, or publisher.

The application integrates with the **Open Library Search API** to fetch comprehensive book data, including covers, descriptions, authors, subjects, and ratings. Users can perform general, advanced, or filtered searches, sort results, navigate through paginated lists, and view detailed information about each book.

---
## Tech Stack

### **Frontend**
- **React** – Framework for building the user interface.  
- **Tailwind CSS** – Utility-first CSS framework for responsive and modern styling.  
- **shadcn/ui** – Prebuilt React components for fast and consistent UI development.  
- **React Router** – For client-side routing between search and book details pages.  
- **React Hooks** (`useState`, `useEffect`, `useReducer`) – For state management and side effects.  

### **Data Fetching**
- **Fetch API** – For making HTTP requests to the Open Library API.  
- Handles **optional query parameters** to include only defined search filters.  

### **APIs**
- **Open Library Search API** – Provides book information including title, authors, covers, subjects, and descriptions.  

---

### **Other Tools**
- **ESLint / Prettier** – For code formatting and linting.  
- **Vite / Create React App** – Project scaffolding and development server.  
- **Deployment** – Hosted on GitHub pages 



---

## Features

### **Search & Browsing**
- **General search** by book title.  
- **Advanced search** supporting chaining of multiple categories (title, author, subject, publisher).  
- **Filtered search** with sorting options (e.g., relevance, publish date).  
- Pagination for large result sets.  
- Search results display essential book details: title, authors, cover image, and subjects.  

### **Book Details**
- Dedicated **book details page** showing:
  - Full title and author(s)  
  - Description (if available)  
  - Subjects and links  
  - Ratings (if available)  
- Smooth navigation between search results and book details.  

### **User Experience**
- Responsive design for desktop and mobile.  
- Graceful **error handling** for network errors or no results.  
- Clean, user-friendly UI with intuitive interactions.  

## Setup & Installation

1. **Clone the repository:**
```
git clone https://github.com/syedumar2/bookFinder.git
cd bookFinder
```

2. **Install dependencies:**

    ```
    npm install
   ```

3. **Start the development server:**

   ```
   npm run dev
   ```
4. **Open the Application**

    Open your browser and go to: http://localhost:5173

---
# Video Demonstatration

A short video walkthrough of the **Book Finder** application, covering:  
- General search by title.  
- Advanced search (multiple filters).  
- Filtered search with pagination and sorting.  
- Book details page with description, authors, subjects, and ratings.  
- Responsive design on desktop and mobile.  
- Error handling (e.g., no results found). 

Video is available on Drive Link:
 https://drive.google.com/drive/folders/1v6MvBL2bAihhPamNm9GAr-PHf6Ec2f3f?usp=sharing

---
## Deployment

- WebApp has been deployed to StackBlitz.

Link is as follows: https://stackblitz.com/~/github.com/syedumar2/BookFinder-app 

---





