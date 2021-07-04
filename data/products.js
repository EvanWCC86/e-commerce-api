const products = [
    // clothes
    {
        countInStock:10,
        category:"clothes",
        image:"../../images/clothes/clothes1.jpg",
        title:"Levi's Men's 505 Regular - Fit Jeans",
        price:37,
        info:"100% Cotton Machine wash jeans inside out with like colors using liquid detergent These men's jeans have extra room through seat and thigh  ",


    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes2.jpg",
        title:"Levi's Women's 721 High Rise Skinny Jeans",
        price:35,
        info: "71% Cotton, 21% Viscose, 6% Elastomultiester, 2% Elastane Wash And Dry Inside Out With Like Colors; Liquid Detergent Is Recommended. These Skinny Jeans for Women Come With a Zipper Closure"

    },
    {
        countInStock:13,
        category:"clothes",
        image:"../../images/clothes/clothes3.jpg",
        title:"Levi's Baby Boys' Straight Fit Jeans",
        price:48,
        info:"72% Cotton, 27% Polyester, 1% Elastane. International distressing throughout. Classic 5-pocket styling with iconic arcuate back ",

    },
    {
        countInStock:14,
        category:"clothes",
        image:"../../images/clothes/clothes4.jpg",
        title:"Hanes Men’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt",
        price:18,
        info:"90% Cotton / 10% Polyester.10-ounce, 90/10 cotton/poly PrintPro  XP low , high-stitch density fabric; 100% cotton face. Two-ply hood with grommets and dyed-to-match drawcord",

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes5.jpg",
        title:"LONGYUAN Women's Summer Sleeveless Casual Dresses Swing Cover Up Elastic Sundress with Pockets",
        price:38,
        info:'95% Rayon+5% Spandex, soft comfy and elastic. The "White" and "Floral White" dress looks a little bit see through, suggest wear a nude or lighter color bra or underwear, and the "White" dress is a little heavier than the other colors, please notice it before placing an order. Attention 2: About the floral dress, the is random, we couldnt ensure the position of floral print on each dress, but they are definitely made of same pattern fabric.'

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes6.jpg",
        title:"Women's Tunics Summer Short Sleeve Pleated Blouse Loose Flowy Tops and Blouses",
        price:28,
        info:"Premium Fabric: Polyester+Spandex, Soft and Comfortable , Wash Well- Without Shrinking. Features:Loose and Flowy, without looking sloppy.Short Sleeves, Floral Print Pattern, Basic t-shirts, Casual Floral Tunic Shirts,Floral Tee Shirt,This Women Blouses is Pretty with Pleated Design,Could Hide The Tummy Well. ",

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes7.jpg",
        title:"Levi's Women's 501 Original Shorts",
        price:58,
        info:"99% Cotton, 1% Elastane. High Rise: Sits above waist. Fitted through hip and thigh",

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes8.jpg",
        title:"rrhss Funny Printed Tops Tee Kids Short Sleeve Graphic T Shirts for Teen Boys Clothes",
        price:15,
        info:"Material of kids t-shirt:high quality cotton blend,comfort and softness for kids teen youth. Details of Crewneck Tee:crew neck,a perfect option for beautiful basic casual wear; can be work as an undershirt or t-shirt ",

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes9.jpg",
        title:"Hanes Men's Full-Zip Eco-Smart Hoodie",
        price:18,
        info:"50% Cotton, 50% Polyester. Cozy 7.8-ounce fleece made with up to 5 percent polyester created from recycled plastic.Pill-resistant fabric with high-stitch density for durability",

    },
    {
        countInStock:12,
        category:"clothes",
        image:"../../images/clothes/clothes10.jpg",
        title:"Sieanear Tshirts for Womens Short Sleeve Crewneck Striped Tops Summer",
        price:38,
        info:"Materials: 60% Polyester&35%rayon&5%spandex, casual and soft, breathable and comfy to wear.Note: Please double check the size chart in the pictures before purchasing, do not use the size chart from others on amazon. Thanks for your understanding",

    },
    // // shoes
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes1.jpg",
        title:"Skechers Women's Go Walk Joy Walking Shoe",
        price:25,
        info:"Shaft measures approximately low-top from arch. Lightweight and flexible. Responsive 5Gen cushioning. Skechers Goga Max high rebound insole",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes2.jpg",
        title:"Lamincoa Women's Tennis Shoes Slip On Lightweight Athletic Comfort Casual Memory Foam Sneakers for Walking Work Gym",
        price:30,
        info:"Lightweight & Breathable Upper: Made of mesh knit upper with good breathability and flexibility.Let each step of your move all relaxed.Easy to Slip On & Take Off: Slip on tennis shoes tongue with integrated collar offer exceptional fit and all-day comfort in a sleek.Low cut silhouette,slip-on construction with back pull-tab,easy to put on and take off,make you move much freely.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes3.jpg",
        title:"GKV Walking Shoes Slip On Sock Shoes Loafers Easy Sneakers for Women Men",
        price:27,
        info:"SUPER LIGHTWEIGHT DESIGN make sure we can walk and stand for a long while but our feet won't feel pain and sore anymore.PU CUSHIONING INSOLES will provide maximum shock absorption effect and comfort your feet all-day long.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes4.jpg",
        title:"Wonesion Womens Walking Running Shoes Athletic Blade Non Slip Tennis Fashion Sneakers",
        price:35,
        info:"【UPPER】Fashion knitted mesh material and lightweight support maximizes the upper and let your foot always keeps dry and cool.OUTSOLES】The sole Is made of hollow carved technology, providing stable support and optimal shock absorption for sport.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes5.jpg",
        title:"Women Air Athletic Running Shoes - Air Cushion Shoes for Womens Mesh Sneakers Fashion Tennis Breathable Walking Gym Work Shoes",
        price:55,
        info:"Shock Absorption Cushion：Special air cushion design makes your feet comfortable, maximum shock absorption, protect your ankle and will make you feel like walking on a cushion all day.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes6.jpg",
        title:"Hawkwell Women's Air Cushion Breathable Athletic Running Shoes",
        price:65,
        info:"Featuring airy mesh, gradient coloring, brings you style, comfort and big attitude.It delivers comfort and support every time you lace up.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes7.jpg",
        title:"Akk Womens Athletic Walking Shoes - Slip On Memory Foam Lightweight Work Casual Tennis Running Shoes Sneakers for Indoor Outdoor Gym Travel",
        price:75,
        info:"Design for Easy-Life:Akk Womens Walking Tennis Shoes design for maximum comfort, perfect for walking, hiking, bike riding, working, shopping, indoor, outdoor, casual, sports, travel, exercise, vacation, and etc.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes8.jpg",
        title:"INZCOU Running Shoes Lightweight Tennis Shoes Non Slip Resistant Gym Workout Shoes Breathable Mesh Sneakers",
        price:65,
        info:"【Lightweight and Breathable】The upper of running shoes is made of highly elastic flying woven fabric, which is light and breathable. The densely woven net builds a three-dimensional upper surface that comfortably wraps the ankle. The soft fabric will expand and expand with the feet, maximizing the breathability and keeping the feet dry.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes9.jpg",
        title:"TIAMOU Running Shoes Women Walking Athletic Tennis Non Slip Blade Type Sneakers",
        price:85,
        info:"Rubber Outsole——The rubber outsole offers impact cushioning, anti-twist, abrasion-resistant and anti-slip performance for prolonging the wearing time of our shoes.",

    },
    {
        countInStock:12,
        category:"shoes",
        image:"../../images/clothes/shoes10.jpg",
        title:"Akk Womens Walking Running Shoes - Jogging Athletic Shoes Comfortable Breathable Mesh Knited Sports Tennis Sneakers for Gym Workout Casual",
        price:65,
        info:"Breathable mesh upper: The mesh upper of these road running tennis shoe is made of breathable and lightweight knitted material.The ultra lightweight knitted upper and breathable mesh will keep your feet away from the wet condition, and create a dry environment for your feet during moving.",

    },
    // // computer
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer1.jpg",
        title:"Akk Womens Walking Running Shoes - Jogging Athletic Shoes Comfortable Breathable Mesh Knited Sports Tennis Sneakers for Gym",
        price:228,
        info:"Akk Womens Walking Running Shoes - Jogging Athletic Shoes Comfortable Breathable Mesh Knited Sports Tennis Sneakers for GymBreathable mesh upper: The mesh upper of these road running tennis shoe is made of breathable and lightweight knitted material.The ultra lightweight knitted upper and breathable mesh will keep your feet away from the wet condition, and create a dry environment for your feet during moving.",
        

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer2.jpg",
        title:"HP Elite Desktop PC Computer Intel Core i5 3.1-GHz, 8 gb Ram, 1 TB Hard Drive, DVDRW, 19 Inch LCD Monitor, Keyboard, Mouse, Wireless WiFi, Windows 10 (Renewed)",
        price:228,
        info:"This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers. Accessories may not be original, but will be compatible and fully functional. Product may come in generic box."
        
             
    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer3.jpg",
        title:"2021 Newest Dell Inspiron 3000 Laptop, 15.6 HD LED-Backlit Display, Intel Celeron Processor N4020, 16GB DDR4 RAM, 512GB PCIe Solid State Drive, Online Meeting Ready, Webcam, HDMI, Win10 Home, Black",
        price:559,
        info:"【Dell Inspiron Laptop】16GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once; 512GB PCIe NVME M.2 Solid State Drive for ample storage space.",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer4.jpg",
        title:"HP 24-inch All-in-One Desktop Computer, AMD Athlon Silver 3050U Processor, 8 GB RAM, 256 GB SSD, Windows 10 Home (24-dd0010, White)",
        price:600,
        info:"Windows 10 Home: Do great things confidently with the familiar feel of Windows – only better. Memory and internal storage: 8 GB DDR4-2400 SDRAM (upgradable to 16 GB), 256 GB PCIe NVMe M.2 Solid State Drive",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer5.jpg",
        title:"Dell Optiplex 990 Desktop Computer Package - Intel Quad Core i5 3.1-GHz, 16GB RAM, 2 TB, DVD-RW Drive, 20 Inch LCD Monitor, Keyboard, Mouse, WiFi, Bluetooth, Windows 10 (Renewed)",
        price:285,
        info:"This pre-owned product has been professionally inspected, tested and cleaned by Amazon-qualified suppliers. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied under the Amazon Renewed Guarantee",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer6.jpg",
        title:'ASUS TUF 15.6" FHD 144Hz 5ms Gaming Laptop Computer, Intel Hexa-Core i7-9750H up to 4.5GHz, 32GB DDR4 RAM, 1TB PCIe SSD, NVIDIA GeForce GTX 1650, RGB Backlit KB, Windows 10, BROAGE 64GB Flash Drive',
        price:768,
        info:"15.6-inch Full HD (1920 x 1080) LED IPS, 144Hz Refresh rate, 5ms response time display and NVIDIA GeForce GTX 1650 4GB GDDR5 graphics. This electronic gift, holiday gift offers a good experience for watching videos, browsing the web, remote work, or study from home.",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer7.jpg",
        title:"DELL Optiplex 790 Core i5 3.1GHz, 1TB Hard Drive, 16GB Memory, Windows 10 x64, Dual 19 Monitors (Renewed)']",
        price:310,
        info:"Dell 790 Intel I5 Quad-Core 3.1 GHz Processor.What's Inside: 16GB RAM, 1TB Hard Drive, DVD Optical Drive.Includes: USB Keyboard and Mouse, WiFi Adapter, 19 Inch Monitor (Brand May Vary) x2 ",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer8.jpg",
        title:'Lenovo IdeaCentre AIO 3, 24" All-in-One Computer, AMD Ryzen 3 4300U Mobile Processor, Integrated Graphics, 8GB DDR4, 256GB M.2 Name SSD, DVD RW Drive, Windows 10, F0EW005TUS, Business Black',
        price:549,
        info:"Accelerate everything you do with the IdeaCentre AIO 3. Powered by AMD Ryzen 3 4300U mobile processors with Radeon graphics, this all-in-one computer makes multitasking a breeze.The FHD display gives you an outstanding viewing experience, from wide angles, too. The narrow bezels are just 9.5 mm at their thinnest for a huge 90% screen-to-body ratio for more screen and fewer distractions. Work, entertainment, or video calls the eye-catching IdeaCentre AIO 3 will look and perform great anywhere. With its stylish stand and base, this all-in-one desktop computer will save much-needed desk space",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer9.jpg",
        title:"All in One Computer Nexsmart with Intel I7 and Pre-Installed Windows 10 All-in-One Computer, 8gb Ddr3 480 Ssd Support WiFi and 23.8 Inches 1920x1080 Fhd (Non-Touch Screen)",
        price:680,
        info:"【Much Processing Power】Preedip All in One Computer comes with Intel Core i5-4310M is very powerful and works incredibly well.Base Frequency 2.70 GHz,Burst Frequency up to 3.40 GHz.The all in one pc will bring a reliable experience for you that is very adequate for Internet browsing,basic multi-tasking for daily work, projector, surveillance camera, monitor or printer.",

    },
    {
        countInStock:12,
        category:"computers",
        image:"../../images/clothes/computer10.jpg",
        title:'Acer Aspire 5 Slim Laptop, 15.6" Full HD IPS Display, 10th Gen Intel Core i5-10210U, 8GB DDR4, 256GB PCIe NVMe SSD, Intel Wi-Fi 6 AX201 802.11ax, Fingerprint Reader, Backlit KB, A515-54-59W2, Silver',
        price:658,
        info:"【Memory & Storage】Memory is 12GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 512GB PCIe NVMe M.2 Solid State Drive which allows to fast bootup and data transfer",

    },
    
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch1.jpg",
        title:'Mens Watches Ultra-Thin Minimalist Waterproof - Fashion Wrist Watch for Men Unisex Dress with Stainless Steel Mesh Band',
        price:35,
        info:"Minimalist watches design with a unique texture of dial. This classic simple gent's wrist watch will be greatly suitable for any occasion. Perfect watches for all kind of business, casual, indoor activities or daily use .",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch2.jpg",
        title:'Burxoe Smart Watch,Smartwatch for Android Phones,Smart Watches Touchscreen with Camera Bluetooth Watch Cell Phone with Sim Card Slot Compatible Samsung iOS Phone 12 12 Pro 11 10 Men Women',
        price:25,
        info:"Multi-Function Smartwatch Android】:Dial via watch SIM or Bluetooth optional, Pedometer, Sedentary remind, Sleep monitoring, Remote photos, Music playing, Alarm clock, Two-way anti lost remind, muti-language, daylight saving time and notification push including facebook,twitter, calls,texts,etc.For ANDROID,all functions can be used. For iOS, the bluetooth smart watch supports Partial Functions.(Please See the Function Chart before placing order)",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch3.jpg",
        title:'SAMSUNG Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long lasting Battery, Silver (US Version)',
        price:199,
        info:"Keep your beat: You can see if your heart rate is where you want it with Galaxy Watch Active2; Get automatically alerted if your watch detects a high or a low heart rate 4 this device and related software are not intended for use in the diagnosis of disease or other conditions, or in the cure, Mitigation, treatment or prevention of disease",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch4.jpg",
        title:'Smart Watch, KALINCO Fitness Tracker with Heart Rate Monitor, Blood Pressure, Blood Oxygen Tracking, 1.4 Inch Touch Screen Smartwatch Fitness Watch for Women Men Compatible with Android iPhone iOS',
        price:26,
        info:"Sleep and Blood Oxygen Saturation: The smart watch for android phones can monitor your Heart Rate, Blood Pressure, Blood Oxygen (SpO2) and your deep, light sleep state which can help you better understand your health. (NOTE: the data cannot be used as a medical-grade test)",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch5.jpg",
        title:'SAMSUNG Galaxy Watch Active (40MM, GPS, Bluetooth) Smart Watch with Fitness Tracking, and Sleep Analysis - Rose Gold (US Version)',
        price:139,
        info:"Track your way to real results: Automatically detects up to 6 exercises, while tracking up to 39 more, right from your wrist.Resolve to rest better: Helps you analyze your sleep patterns and encourages you to wind down to keep you refreshed and at your best",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch6.jpg",
        title:"Fossil Men's Nate Stainless Steel Quartz Chronograph Watch",
        price:99,
        info:"Fossil is inspired by American creativity and ingenuity. Bringing new life into the watch and leathers industry by making quality, fashionable accessories that are both fun and accessible.",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch7.jpg",
        title:'Fossil Gen 5 Carlyle Stainless Steel Touchscreen Smartwatch with Speaker, Heart Rate, GPS, Contactless Payments, and Smartphone Notifications',
        price:199,
        info:"Battery: 24 Hr+ multi day extended mode. Varies based on usage and after updates install. USB cable with magnetic charger snaps to rings on watch caseback and spins 360 degrees for ease of use. Charge up to 80% in under an hour",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch8.jpg",
        title:"Smart Watch for Men Women, Fitness Tracker 1.69'' Full Touch Screen Smartwatch with Heart Rate Monitor, Sleep Monitor, Stopwatch, Pedometer, IP68 Waterproof Activity Tracker Compatible for Android IOS",
        price:50,
        info:"Heart Rate Monitor and Sleep Tracker: Motast Fitness Tracker is equipped with a new generation of optical sensors, which can monitor your heart rate in real time throughout the day. The high efficiency sleep sensor can monitor sleep status (deep sleep, light sleep and wake up time), and provide comprehensive sleep quality analysis (one day, one week, one month), and you can formulate scientific work and rest time based on accurate data.",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch9.jpg",
        title:'Apple Watch Series 3 (GPS + Cellular, 38MM) - Silver Aluminum Case with White Sport Band (Renewed)',
        price:199,
        info:"Displays notifications and runs apps, accelerometer and gyroscope, heart rate sensor. Water-resistant to 164 feet (50 meters), heart rate monitor, built-in GPS, barometric altimeter",

    },
    {
        countInStock:12,
        category:"watches",
        image:"../../images/clothes/watch10.jpg",
        title:'Bluetooth Call Smartwatch for Men Women Fitness Tracker Watch with Heart Rate and Sleep Monitor IP67 Waterproof Activity Tracker Pedometer Watches Compatible with iPhone Android Phones (Pink)',
        price:54,
        info:"【Fashionable Dials & Customized Watch Face】This women smartwatch with 1.28 inch larger color screen offers excellent image quality, the full touch screen operation design brings you a better use experience. The smart watch contains 3 main dials readily available to choose from along with another 15 more dials in the Lufitcode app. You can also customize the watch faces via your phone. It can be any photo, such as your selfie, family, pet, scenery, etc.",

    },
]

module.exports = products;