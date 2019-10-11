// import { TestService } from './test.service';
// import { Observable, of } from 'rxjs';

// fdescribe('TestService', () => {
//   let service: any;
//   const todos = [];
//   const http: any = {
//     get: (): Observable<{}> => of({}),
//   };

//   beforeEach(() => {
//     service = new TestService(http);
//   });

//   it('should add ten', () => {
//     expect(service.addTen(3)).toBe(13);
//   });
//   it('return bigger number', () => {
//     const a = 4;
//     const b = 3;
//     expect(service.getBiggerNumber(a, b)).toBe(a);
//     expect(service.getBiggerNumber(a, b)).not.toBe(b);
//   });
//   it('should return object value', () => {
//     const obj = {a : 1};
//     expect(service.getObject('a', 1)).toEqual(obj);
//   });

//   describe('getArrayOfNumbers', () => {
//     it('should return array', () => {
//       const result = service.getArrayOfNumbers(3);
//       expect(Array.isArray(result)).toBe(true);
//     });
//     it('should return correct length of array', () => {
//       const result = service.getArrayOfNumbers(3);
//       expect(result.length).toBe(4);
//     });
//     it('should contain number', () => {
//       const a = 3;
//       const result = service.getArrayOfNumbers(a);
//       expect(result).toContain(a);
//     });
//   });

//   describe('getToDos', () => {
//     it('should call htpp method', () => {
//       spyOn(http, 'get');
//       console.log(service);
//       service.getToDos();
//       expect(http.get).toHaveBeenCalled();
//     });
//     it('should get todos array', () => {
//       spyOn(http, 'get').and.returnValue(of(todos));
//       service.getToDos().subscribe((data) => {
//         expect(data).toEqual(todos);
//       });
//     });
//   });
// });
