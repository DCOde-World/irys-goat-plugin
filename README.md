# irys-goat-plugin
### **Irys Plugin for GOAT SDK**  

This project provides an **Irys plugin** for the **GOAT SDK**, allowing agents to store and retrieve data using **Irys (formerly Bundlr)**.  

---

## **Features**  
✅ **Deploys an Irys Plugin on GOAT**  
✅ **Enables GOAT Agents to Upload & Retrieve Data**  
✅ **Demo Script Included for Testing**  

---

## **Installation & Setup**  

### **1. Clone the Repository**  
```sh
git clone https://github.com/YOUR-USERNAME/irys-goat-plugin.git
cd irys-goat-plugin
```

### **2. Install Dependencies**  
```sh
npm install @irys/sdk @goat/sdk
```

### **3. Update Configuration**  
Modify `index.js` to include your Irys wallet and RPC URL:  
```js
const config = {
  wallet: 'your-wallet-key',
  rpcUrl: 'https://your-rpc-url',
  network: 'mainnet',
};
```

### **4. Run the Script**  
```sh
node index.js
```
This will **upload sample data to Irys** and **retrieve it**.

---

## **How It Works**  
1. Registers an **Irys plugin** in the **GOAT SDK**.  
2. Allows GOAT agents to **upload data** to Irys.  
3. Enables agents to **retrieve stored data**.  
4. Includes a **demo script** that tests the plugin.  

---

## **Contributing**  
Feel free to fork this repository and contribute! If you have suggestions or need modifications, open an issue or PR.  

---

## **License**  
MIT  

---
