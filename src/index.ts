import path from "path";
import { readCSV } from "./services/readCsv";
import { DataProcess } from "./services/csvDataProcess";

async function main() {
    const filePath = path.join(__dirname, '../data/data.csv');
    try {
        const data = await readCSV(filePath);
        
        const processedData = data.map(DataProcess);

        processedData.forEach(item => console.log(item));
    } catch (error) {
        console.error('Erro ao processar o arquivo');
    }
}

main();