<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## MY NOTES LOL

### PHP SHOULD BE A SYSTEM ENV CMD

1. **XAMPP**: You should have XAMPP installed, which includes PHP, MySQL, and Apache server.
2. **Composer**: Ensure that Composer is installed on your system (we'll guide you to install it if necessary).

### **Step 1: Install Composer (if not installed)**

If Composer is not installed, follow these steps:

1. **Download Composer Installer**:
   Open your command prompt and run the following command:
   ```bash
   php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
   ```

2. **Install Composer**:
   Run the following command:
   ```bash
   php composer-setup.php
   ```

3. **Remove Installer**:
   Once installation completes, remove the installer:
   ```bash
   del composer-setup.php
   ```

4. **Verify Installation**:
   To verify Composer is correctly installed, run:
   ```bash
   php composer.phar --version
   ```

---

### **Step 2: Enable PHP Extensions**
1. **Enable `zip` Extension**:
   - Open your `php.ini` file located at `D:\xampp\php\php.ini`.
   - Find the line `;extension=zip` and remove the semicolon (`;`) to uncomment it.
   - Save the file.
   
2. **Restart XAMPP**:
   Restart the XAMPP control panel to apply changes.

---

### **Step 3: Create a New Laravel Project**

1. **Navigate to the Directory**:
   Open the command prompt and navigate to the directory where you want to create the Laravel project. For example:
   ```bash
   cd D:\xampp\htdocs
   ```

2. **Create Laravel Project**:
   Run the following Composer command to create a new Laravel project named `flowbite-inertia-crud`:
   ```bash
   php composer.phar create-project laravel/laravel flowbite-inertia-crud
   ```

   This will install Laravel and its dependencies.

---

### **Step 4: Install Dependencies for Flowbite and Inertia**

1. **Navigate to the Laravel Project**:
   After the project is created, go into the `flowbite-inertia-crud` directory:
   ```bash
   cd flowbite-inertia-crud
   ```

2. **Install NPM Dependencies**:
   Run the following command to install the required npm dependencies for Flowbite, Inertia, and Laravel Mix:
   ```bash
   npm install
   ```

3. **Install Flowbite**:
   To install Flowbite for Laravel and Inertia, you need to add it manually:
   ```bash
   npm install flowbite
   ```

4. **Install Inertia.js**:
   Run the following command to install the necessary dependencies for Inertia.js:
   ```bash
   npm install @inertiajs/inertia @inertiajs/inertia-react
   ```

---

### **Step 5: Set Up the `.env` File**

1. **Configure the Environment**:
   Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. **Generate the App Key**:
   Run the following command to generate the application key:
   ```bash
   php artisan key:generate
   ```

---

### **Step 6: Set Up Database (if applicable)**

1. **Configure the Database Connection**:
   Open the `.env` and `.env.example` file and set the database connection to match your MySQL settings in XAMPP. For example:
   ```plaintext
   DB_CONNECTION=sqlite
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=root
   DB_PASSWORD=
   ```

2. **Create the Database**:
   Use phpMyAdmin or the MySQL command line to create the database you referenced in the `.env` file.

---

### **Step 7: Start the Development Server**

Run the Laravel development server to see your application in action:
```bash
php artisan serve
```

The server will start, and you should be able to access the app at `http://127.0.0.1:8000`.

---

### **Step 8: Verify Flowbite and Inertia Setup**

1. **Create a Route for Inertia**:
   In your `routes/web.php`, add a route for Inertia:
   ```php
   use Inertia\Inertia;

   Route::get('/', function () {
       return Inertia::render('Welcome');
   });
   ```

2. **Create the Inertia Page**:
   In your `resources/js/Pages`, create a `Welcome.js` file to render the page:
   ```js
   import React from 'react';

   const Welcome = () => {
       return (
           <div>
               <h1>Welcome to Laravel with Flowbite and Inertia!</h1>
           </div>
       );
   };

   export default Welcome;
   ```

3. **Compile Assets**:
   Run the following command to compile your assets with Laravel Mix:
   ```bash
   npm run dev
   ```

4. **Test Flowbite**:
   Add a Flowbite component to test if it works. For example, in your `Welcome.js`, you can add a Flowbite button:
   ```js
   import 'flowbite';

   const Welcome = () => {
       return (
           <div>
               <h1>Welcome to Laravel with Flowbite and Inertia!</h1>
               <button className="btn btn-primary">Click me</button>
           </div>
       );
   };
   ```

---

### **Step 9: Final Setup and Running**

After following these steps, your Laravel project should be fully set up with Flowbite, Inertia, and necessary dependencies. You can now develop your application, create CRUD operations, and integrate Inertia and Flowbite components into your project.

---

### **Summary**

1. Install **Composer** and enable the `zip` extension in PHP.
2. Create a new Laravel project using Composer.
3. Install required npm dependencies for **Flowbite** and **Inertia**.
4. Set up your **`.env` file** and **database connection**.
5. Start the **Laravel development server** with `php artisan serve`.
