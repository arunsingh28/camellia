import { FastifyReply } from "fastify";
import { parse } from "fast-csv";
import type { MultipartFile } from "@fastify/multipart";

class CSV {
  parseCSV<T = {}>(file: MultipartFile, res: FastifyReply): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const data: T[] = [];
      file.file
        .pipe(
          parse({
            headers: true,
            strictColumnHandling: true,
            ignoreEmpty: true,
          })
        )
        .on("error", (err) => {
          res.log.fatal("Error parsing CSV file", err);
          reject(err);
        })
        .on("data", (row: T) => {
          data.push(row);
        })
        .on("end", () => {
          res.log.info("CSV file parsed successfully");
          resolve(data);
        });
    });
  }

  createCSV(data: any[], fileName: string): void {
    // Implementation for creating a CSV file
    
  }
}

export default new CSV();
