
CREATE DATABASE  IF NOT EXISTS `JML`;
USE `JML`;

CREATE TABLE `users`(
  `Id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `e-mail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(50) NOT NULL);
  
 CREATE TABLE `categories`(
   `Id` INT PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL);
   
 INSERT INTO `categories` VALUES (1,"Auriculares"),(2,"Teclados"),(3,"Mouses");  
   
 CREATE TABLE `brands`(
   `Id` INT PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL); 
   
 INSERT INTO `brands` VALUES (1,"Logitech"),(2,"Hyperx"),(3,"Asus"),(4,"Astro"),(5,"Redragon"),(6,"Corsair"),(7,"Turtle Beach");  
  
CREATE TABLE `products`(
  `Id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` INT NOT NULL,
  `categorie_id` INT NOT NULL,
  `brand_id` INT NOT NULL,
  `images` VARCHAR(300),
  FOREIGN KEY (categorie_id) REFERENCES categories(Id),
  
  FOREIGN KEY (brand_id) REFERENCES brands(Id)
  );
  
  INSERT INTO `products` VALUES (1,"Auriculares Logitech G332 Leatherette",6000,1,1,"G432_Gaming_7.1_USB_89da62c6-grn.jpg"),(2,"Auriculares Logitech G432 Gaming 7.1 USB",8400,1,1,"Auriculares_Logitech_G332_Leatherette_c4671f67-grn.jpg"),(3,"Auriculares Microfono Logitech G433 Gaming Black 7.1",10600,1,1,"Auriculares_Microfono_Logitech_G433_Gaming_Black_7.1_PC___PS4___Switch___XBOX_1ee6ebce-grn.jpg"),(4,"Auriculares Logitech PRO Gaming",16000,1,1,"Auriculares_Logitech_PRO_Gaming___Tarjeta_de_Sonido_USB_244d7f99-grn.jpg"),(5,"Auriculares Logitech G635 LightSync 7.1",12000,1,1,"Auriculares_Logitech_G635_LightSync_7.1_da750b51-grn.jpg"),(6,"Auriculares HyperX Cloud Stinger Core",5000,2,1,"Auriculares_HyperX_Cloud_Stinger_Core_PS4___Switch___XBOX_d334de1e-grn.jpg"),(7,"Auriculares HyperX Cloud Core 7.1",10000,2,1,"Auriculares_HyperX_Cloud_Core_7.1_e86a9bcf-grn.jpg"),(8,"Auriculares HyperX Cloud Alpha Gaming",12000,2,1,"Auriculares_HyperX_Cloud_Alpha_Gaming_Red_PC___PS4___Switch___XBOX_9f4d4fa9-grn.jpg"),(9,"Auriculares HyperX Cloud II Pro Gaming Gun Metal",10000,2,1,"Auriculares_HyperX_Cloud_II_Pro_Gaming_Gun_Metal_PC___PS4___Switch___XBOX_9c5b1951-grn.jpg"),(10,"Auriculares HyperX Flight S Black Wireless",16000,2,1,"Auriculares_HyperX_Flight_S_Black_Wireless__fc16b21b-grn.jpg"),(11,"Auriculares Inalambricos ASUS ROG STRIX Fusion 700 ACI FR 7.1 RGB",52000,3,1,"Auriculares_Inalambricos_ASUS_ROG_STRIX_Fusion_700_ACI_FR_7.1_RGB_e8913b73-grn.jpg"),(12,"Auriculares ASUS ROG DELTA CORE Gaming",20000,3,1,"Auriculares_ASUS_ROG_DELTA_CORE_Gaming_72121499-grn.jpg"),(13,"ASUS ROG Strix GO 2.4 Electro Punk USB-C",45000,3,1,"Auriculares_Inalambricos_ASUS_ROG_Strix_GO_2.4_Electro_Punk_USB-C_PC_MAC_PS4_3530269e-grn.jpg"),(14,"Auriculares ASUS ROG Theta 7.1 USB-C Aura Sync RGB",59000,3,1,"Auriculares_ASUS_ROG_Theta_7.1_USB-C_Aura_Sync_RGB_6640fae2-grn.jpg"),(15,"Auriculares ASUS ROG Strix GO Core ",16000,3,1,"Auriculares_ASUS_ROG_Strix_GO_Core_PC_PS4_PS5_XBOX_09190092-grn.jpg"),(16,"Auriculares Logitech Astro A10 White Blue",8000,4,1,"Auriculares Logitech Astro A10 White Blue"),(17,"Auriculares Logitech Astro A20",17000,4,1,"Auriculares_Logitech_Astro_A20_White_Blue_PS4_PC_MAC_b580335d-grn.jpg"),(18,"Auriculares Logitech Astro A40 7.1 ",32000,4,1,"Auriculares_Logitech_Astro_A40_7.1.jpg"),(19,"Auriculares Inalambricos Logitech Astro A50 ",38000,4,1,"Auriculares_Inalambricos_Logitech_Astro_A50.jpg"),(20,"Auriculares Redragon H120 Ares ",2000,5,1,"Auriculares_Redragon_H120_Ares_PC_978c684a-grn.jpg"),(21,"Auriculares Redragon Pandora 2 H350 RGB USB 3.5mm",5000,5,1,"Auriculares_Redragon_Pandora_2_H350_RGB_USB_3.5mm_62a4f20b-grn.jpg"),(22,"Auriculares Redragon Scylla H901",3000,5,1,"Auriculares_Redragon_Scylla_H901_PC___PS4___Switch___XBOX_d52354ae-grn.jpg"),(23,"Auriculares Redragon Zeus H510-1 Surround 7.1 ",8000,5,1,"Auriculares_Redragon_Zeus_H510-1_Surround_7.1_5b55219a-grn.jpg"),(24,"Auriculares Redragon H320 Lamia RGB 7.1  ",5500,5,1,"Auriculares_Redragon_H320_Lamia_RGB_7.1_49c998dc-grn.jpg"),(25,"Auriculares Corsair HS35 ",6500,6,1,"Auriculares_Corsair_HS35_Blue_34cc292a-grn.jpg"),(26,"Auriculares Turtle Beach Recon 50P",5000,7,1,"Recon-50P_3.png"),(27,"Mouse Logitech G300S Gaming 2500dpi | 9 botones",4000,1,3,"Mouse_Logitech_G300S_Gaming_2500dpi___9_botones_4702c29a-grn.jpg"),(28,"Mouse Logitech G PRO Hero Gaming 16000DPI RGB",3800,1,3,"Mouse_Logitech_G_PRO_Hero_Gaming_16000DPI_RGB_2934063c-grn.jpg"),(29,"Mouse Inalambrico Logitech G604 LIGHTSPEED Hero 16K",8000,1,3,"Mouse_Inalambrico_Logitech_G604_LIGHTSPEED_Hero_16K_bf38b95a-grn.jpg"),(30,"Mouse Logitech G903 Lightspeed Wireless Gaming 16.000dpi",12000,1,3,"Mouse_Logitech_G903_Lightspeed_Wireless_Gaming_16.000dpi_86c5e07e-grn.jpg"),(31,"Mouse HyperX Pulsefire CORE RGB",2000,2,3,"Mouse_HyperX_Pulsefire_CORE_RGB_1179a734-grn.jpg"),(32,"Mouse HyperX Pulsefire Surge RGB 16,000 DPI",5000,2,3,"Mouse_HyperX_Pulsefire_Surge_RGB_16_000_DPI_12744384-grn.jpg"),(33,"Mouse HyperX Pulsefire Dart Wireless RGB ",9000,2,3,"Mouse_HyperX_Pulsefire_Dart_Wireless_RGB_76b921c3-grn.jpg"),(34,"Mouse ASUS ROG STRIX Evolve RGB",10000,3,3,"Mouse_ASUS_ROG_STRIX_Evolve_RGB_99814b07-grn.jpg"),(35,"Mouse ASUS ROG Gladius II Wireless RGB",22000,3,3,"Mouse_ASUS_ROG_Gladius_II_Wireless_RGB_161344dc-grn.jpg"),(36,"Mouse ASUS ROG CHAKRAM Core USB RGB 16K DPI",10000,3,3,"Mouse_ASUS_ROG_CHAKRAM_Core_USB_RGB_16K_DPI_ed665baf-grn.jpg"),(37,"Mouse ASUS ROG STRIX Impact II Inalambrico 16K DPI",30000,3,3,"Mouse_ASUS_ROG_STRIX_Impact_II_Inalambrico_16K_DPI_94ce89f1-grn.jpg"),(38,"Mouse Redragon Cobra M711-FPS RGB 24.000 dpi ",4000,5,3,"Mouse_Redragon_Cobra_M711-FPS_RGB_24.000_dpi_02b2b49d-grn.jpg"),(39,"Mouse Redragon Gainer M610",1300,5,3,"Mouse_Redragon_Gainer_M610_56ddacc6-grn.jpg"),(40,"Mouse Redragon Centrophorus M601-RGB",1600,5,3,"Mouse_Redragon_Centrophorus_M601-RGB_9805d92c-grn.jpg"),(41,"Mouse Corsair DARK CORE RGB PRO Wireless Gaming Mouse",24000,6,3,"DARK-CORE-RGB-PRO-01.png"),(42,"Teclado Logitech Wireless K230",2000,1,2,"Teclado_Logitech_Wireless_K230__b5b8f076-grn.jpg"),(43,"Teclado Logitech G213 Prodigy RGB Gaming",7000,1,2,"Teclado_Logitech_G213_Prodigy_RGB_Gaming_Espa__ol_ES_6e07b094-grn.jpg"),(44,"Teclado Logitech G815 Mechanical RGB Lightsync",19000,1,2,"Teclado_Logitech_G815_Mechanical_RGB_Lightsync_5ab9b8b1-grn.jpg"),(45,"Teclado Mecanico Logitech G915 TKL RGB Lightspeed Inalambrico",25000,1,2,"Teclado_Mecanico_Logitech_G915_TKL_RGB_Lightspeed_Inalambrico_065f0cec-grn.jpg"),(46,"Teclado HyperX Alloy CORE RGB Gaming",4700,2,2,"Teclado_HyperX_Alloy_CORE_RGB_Gaming_dd3acd58-grn.jpg"),(47,"Teclado Mecanico HyperX Alloy FPS Pro Cherry MX Blue",13000,2,2,"Teclado_Mecanico_HyperX_Alloy_FPS_Pro_Cherry_MX_Blue_5ea0203d-grn.jpg"),(48,"Teclado Mecanico HyperX Alloy Origins Core Switch HyperX Blue",14000,2,2,"Teclado_Mecanico_HyperX_Alloy_Origins_Core_Switch_HyperX_Blue_5dfa8f9a-grn.jpg"),(49,"Teclado Mecanico HyperX Alloy Elite2 RGB HyperX Red",13000,2,2,"Teclado_Mecanico_HyperX_Alloy_Elite2_RGB_HyperX_Red_72df56cb-grn.jpg"),(50,"Teclado Mecanico ASUS TUF Gaming K3 US Red ",16000,3,2,"Teclado_Mecanico_ASUS_TUF_Gaming_K3_US_Red_0a1144ab-grn.jpg"),(51,"Teclado Mecanico ASUS TUF Gaming K7 US Optico Linear",20000,3,2,"Teclado_Mecanico_ASUS_TUF_Gaming_K7_US_Optico_Linear_c10d288a-grn.jpg"),(52,"Teclado Mecanico ASUS ROG STRIX Scope US TKL RGB Cherry MX Red",30000,3,2,"Teclado_Mecanico_ASUS_ROG_STRIX_Scope_US_TKL_RGB_Cherry_MX_Red_ac577937-grn.jpg"),(53,"Teclado Redragon Harpe K503-RGB",3000,5,2,"Teclado_Redragon_Harpe_K503-RGB_Espa__ol_96243639-grn.jpg"),(54,"Teclado Mecanico Redragon Dark Avenger K568RGB",5000,5,2,"Teclado_Mecanico_Redragon_Dark_Avenger_K568RGB_99c1f75a-grn.jpg"),(55,"Teclado Optico Redragon MAGIC-WAND PRO K587-PRO TKL",5800,5,2,"Teclado_Optico_Redragon_MAGIC-WAND_PRO_K587-PRO_TKL_105dd2ae-grn.jpg"),(56,"Teclado Corsair K63 Backlit Red Led Mecanico SP",32000,6,2,"Teclado_Corsair_K63_Backlit_Red_Led_Mecanico_SP_3a8acaea-grn.jpg"),(57,"Teclado Corsair K65 Rapidfire RGB Mechanical MX Speed",23000,6,2,"Teclado_Corsair_K65_Rapidfire_RGB_Mechanical_MX_Speed_c9864a9c-grn.jpg"),(58,"Teclado Corsair K95 Platinum RGB Led MX Speed",45000,6,2,"Teclado_Corsair_K95_Platinum_RGB_Led_MX_Speed_f379296e-grn.jpg");
  
 CREATE TABLE `colors`(
   `Id` INT PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   value VARCHAR(100) NOT NULL);
   
 INSERT INTO `colors` VALUES (1,"Blue","rgb(33, 150, 243)"),(2,"Red","rgb(244, 67, 54)"),(3,"Green","rgb(76, 175, 80)"),(4,"White","rgb(253, 254, 254)"),(5,"Black","rgb(23, 32, 34)"),(6,"Silver","rgb(192,192,192)");  
   
 CREATE TABLE `colors_products`(
    `Id` INT PRIMARY KEY AUTO_INCREMENT,
    `color_id` INT NOT NULL,
    `product_id` INT NOT NULL,
    FOREIGN KEY (color_id) REFERENCES colors(Id),
    FOREIGN KEY (product_id) REFERENCES products(Id)
     
 );  

 INSERT INTO `colors_products` VALUES (1,2,1),(2,4,1),(3,5,1),(4,1,2),(5,5,2),(6,5,3),(7,5,4),(8,1,5),(9,5,5),(10,1,6),(11,5,6),(12,5,7),(13,2,8),(14,5,8),(15,6,9),(16,5,9),(17,5,10),(18,5,11),(19,5,12),(20,6,12),(21,5,13),(22,5,14),(23,5,15),(24,4,16),(25,1,17),(26,4,17),(27,5,18),(28,5,19),(29,2,20),(30,5,20),(31,5,21),(32,5,22),(33,2,23),(34,5,23),(35,5,24),(36,1,25),(37,1,26),(38,5,26),(39,1,27),(40,5,27),(41,5,28),(42,5,29),(43,5,30),(44,5,31),(45,5,32),(46,5,33),(47,5,34),(48,5,35),(49,5,36),(50,5,37),(51,5,38),(52,2,39),(53,5,39),(54,5,40),(55,5,41),(56,5,42),(57,5,43),(58,5,44),(59,5,45),(60,5,46),(61,5,47),(62,5,48),(63,5,48),(64,5,49),(65,5,50),(66,5,51),(67,5,52),(68,5,53),(69,5,54),(70,5,55),(71,5,56),(72,5,57),(73,5,58);

   
