import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'connection string: ' + process.env.TEST_CONNECTION_STRING;
  }
}
