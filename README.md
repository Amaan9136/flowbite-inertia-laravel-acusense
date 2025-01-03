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

---
vite renders js codes and sends it to laravel
so we need to run vite (only renders jsx)
```
npm run dev
```

actual output will be laravel
```
php artisan serve
```


CONST PRODUCTS:

INSERT INTO products (name, image, price, specs)
VALUES 
("Hikvision DS-2CD2143G0-I", "https://tse4.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api", 5999, '["4 MP", "Infrared Night Vision", "Weatherproof", "Wide Dynamic Range"]'),
("Dahua IPC-HFW1431S", "https://tse1.mm.bing.net/th?id=OIP.x7qenAWmOYZJwkxG2PJuCgHaGT&pid=Api", 6899, '["4 MP", "30m IR Distance", "Smart Motion Detection", "H.265 Compression"]'),
("TP-Link Tapo C200", "https://tse2.mm.bing.net/th?id=OIP._SEGUu7a8p8NUUonk4G5DAHaFc&pid=Api", 2499, '["Full HD", "Pan/Tilt", "Two-Way Audio", "Motion Detection"]'),
("CP PLUS CP-UNC-T41L3", "https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api", 7999, '["4 MP", "30m IR Range", "PoE Support", "ONVIF Compatible"]'),
("Zmodo Outdoor Wireless Camera", "https://tse1.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api", 4599, '["720p HD", "Wi-Fi Connectivity", "Motion Alerts", "Weatherproof Design"]'),
("Reolink Argus 2", "https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api", 8999, '["1080p Full HD", "Solar Powered", "Two-Way Audio", "Starlight Night Vision"]');
