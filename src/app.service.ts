import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class AppService {
  getHello(): string {
    return process.env.TEST_CONNECTION_STRING;
  }
}
