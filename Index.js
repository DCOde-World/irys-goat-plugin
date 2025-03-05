import { Irys } from '@irys/sdk';
import { GOAT } from '@goat/sdk';

type Config = {
  wallet: string;
  rpcUrl: string;
  network: string;
};

class IrysPlugin {
  constructor(private config: Config) {
    this.irys = new Irys({
      wallet: config.wallet,
      rpcUrl: config.rpcUrl,
      network: config.network,
    });
  }

  async uploadData(data: Buffer, contentType: string) {
    try {
      const response = await this.irys.upload(data, { contentType });
      console.log('Data uploaded successfully:', response.id);
      return response.id;
    } catch (error) {
      console.error('Error uploading data to Irys:', error);
      throw error;
    }
  }

  async getData(id: string) {
    try {
      const data = await this.irys.download(id);
      console.log('Data retrieved:', data);
      return data;
    } catch (error) {
      console.error('Error retrieving data from Irys:', error);
      throw error;
    }
  }
}

export default function registerIrysPlugin(goat: GOAT, config: Config) {
  const irysPlugin = new IrysPlugin(config);

  goat.registerPlugin('irys', {
    upload: irysPlugin.uploadData.bind(irysPlugin),
    download: irysPlugin.getData.bind(irysPlugin),
  });

  console.log('Irys plugin registered successfully in GOAT.');
}

// Demo script to test the plugin
(async () => {
  const goat = new GOAT();
  const config: Config = {
    wallet: 'your-wallet-key',
    rpcUrl: 'https://your-rpc-url',
    network: 'mainnet',
  };

  registerIrysPlugin(goat, config);

  // Upload sample data
  const sampleData = Buffer.from('Hello, Irys!');
  const contentType = 'text/plain';
  const uploadedId = await goat.plugins.irys.upload(sampleData, contentType);
  console.log('Uploaded Data ID:', uploadedId);

  // Retrieve the uploaded data
  const retrievedData = await goat.plugins.irys.download(uploadedId);
  console.log('Retrieved Data:', retrievedData.toString());
})();
