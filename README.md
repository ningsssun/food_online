## 🥘 foodOnline - A Fully-featured Restaurant Marketplace

foodOnline is a Django web application designed for 3 roles: customer can search nearby restaurants and order meals, restaurant can manage their restaurant online, and admin can manage the entire website.

### ⚙️ Technical Stack

- Framework: Django
- Frontend: HTML, CSS, Bootstrap
- Database: PostgreSQL
- Authentication: Login with Facebook, Login with Google
- Email Service: 
- Deployment: 
- Other: 

### ⚙️ Features

- Registration, login and logout of customer and restaurant
- working on more features...

### ➰ Flowchart
![foodOnline-Flowchart drawio](https://github.com/user-attachments/assets/cbe0499e-cd6e-4968-b31b-24559a522ef9)

### 👩‍💻 Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ningsssun/food_online
   cd food_online
2. Setup virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
4. Database setup:
   ```bash
   python manage.py migrate
5. Run the development server:
   ```bash
   python manage.py runserver
