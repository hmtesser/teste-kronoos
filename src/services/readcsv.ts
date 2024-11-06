import fs from 'fs';
import csv from 'csv-parser'

export const readCSV = (fileName:string): Promise<any[]> => {
    return new Promise((resolve,reject) => {

        const results:any[] = [];
        fs.createReadStream(fileName).pipe(csv()).on('data', data => {
            results.push(data);
        }) 
        .on('end', () => {
            resolve(results);
        })
        .on('error', (error) => {
            reject(error)
        })
    })
}
