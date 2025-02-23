import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class FileService {
  private readonly dataDir = path.resolve(__dirname, '../../../data'); // Ensures it's outside dist/

  constructor() {
    this.ensureDataDirExists();
  }

  // Ensure data directory exists
  private async ensureDataDirExists(): Promise<void> {
    try {
      await fs.mkdir(this.dataDir, { recursive: true });
    } catch (error) {
      console.error('Error creating data directory:', error);
    }
  }

  // Read JSON file
  async readJsonFile<T>(filename: string): Promise<T | null> {
    const filePath = path.join(this.dataDir, filename);
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading file ${filename}:`, error);
      return null;
    }
  }

  // Write JSON file
  async writeJsonFile(filename: string, data: unknown): Promise<void> {
    const filePath = path.join(this.dataDir, filename);
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
      console.error(`Error writing file ${filename}:`, error);
    }
  }
}
