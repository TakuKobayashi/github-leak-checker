import { scanFromCurrent } from '../components/scan';

export default async (options: any): Promise<void> => {
  const scannedResult = await scanFromCurrent();
  console.log(scannedResult.length);
};
