import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {

    findAll() {
        return Promise.resolve(brokers);
    }

}