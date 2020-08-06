import template from 'lodash.template';
import { Endpoint } from '../types/Endpoint';
import { HttpMethod } from '../types/HttpMethod';

export class Api {
  static readonly Host = 'http://localhost:8080/api';
  static readonly Endpoints: {[key: string]: Endpoint} = {
    // Login: {
    //   url: '/login',
    //   method: HttpMethod.Post
    // },
    Rooms: {
      url: `${Api.Host}/rooms`,
      method: HttpMethod.Get
    },
    Room: {
      url: template(`${Api.Host}/rooms/<%= id %>`),
      method: HttpMethod.Get
    },
    Messages: {
      url: template(`${Api.Host}/rooms/<%= id %>/messages`),
      method: HttpMethod.Get
    },
    SendMessage: {
      url: template(`${Api.Host}/rooms/<%= id %>/messages`),
      method: HttpMethod.Post
    },
    SetReaction: {
      url: template(`${Api.Host}/rooms/<%= id %>/messages/<%= messageId %>`),
      method: HttpMethod.Post
    }
  };
}
