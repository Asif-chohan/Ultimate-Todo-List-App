import * as request from "supertest";
import {App} from '../app';


//test v1.0 todo route is working or not
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).get("/todo/api/v1.0/")
        .expect(200);
    });
  });