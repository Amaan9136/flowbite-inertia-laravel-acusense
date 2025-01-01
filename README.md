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

1. Install Laravel Globally

```sh
composer global require laravel/installer
```

2. Create a New Project Using Laravel CLI

```sh
laravel new <project-name>
```

For this project, following Options are Configured:

- Starter-kit: Breeze
- Breeze Stack: Inertia with React
- Additional Features: Dark Mode, SSR and Prettier
- Testing Framework: Pest
- Database: SQLite

3. If Cloning the Project, then run the following command after cloning

```sh
cp .env.example .env
```

4. Generate App Key

```sh
php artisan key:generate
or
npm run php:key
```

5. Sync with the DB Migration

```sh
php artisan migrate
or
npm run php:migrate
```

6. Start the Server

```
npm run dev
```