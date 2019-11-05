// import { Injectable } from '@nestjs/common';
// import * as jwt from 'jsonwebtoken';
// import { Config } from '../RoleGuard/Config';

// @Injectable()
// export class JwtService {
//   constructor(
//   ) { }

//   /**
//    * Создает token на основе переданного payload
//    * @param {object} payload
//    * @returns {Promise<string>}
//    */
//   async createToken(payload): Promise<string> {
//     const plainObject: string = JSON.parse(JSON.stringify(payload));
//     return jwt.sign({ payload: plainObject, },
//       Config.auth.secret,
//       { expiresIn: Config.auth.expiresIn });
//   }

//   /**
//    * Проверяет на валидность
//    * и в случае если токен валидный - возвращает промис с payload,
//    * если не валидный - исключение
//    * @param {string} token
//    * @returns {Promise<object>}
//    */
//   async verify(token: string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       if (token == null || typeof token !== 'string') {
//         reject('error token');
//       }

//       token = token.replace('Bearer ', '');


//       jwt.verify(token, Config.auth.secret,
//         (err, tokenPayload: any) => {
//           if (err) {
//             console.error(err.message);
//             reject(err);
//           } else {
//             resolve(tokenPayload.payload);
//           }
//         },
//       );
//     });
//   }
// }
