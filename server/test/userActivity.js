require('dotenv');

const chai = require('chai');
const chaiHttp = require('chai-http');
const cors = require('cors');

const app = require('../app');

const expect = chai.expect();

const user_id = "611cebabbf525f601247c85c"

chai.use(chaiHttp);
chai.should();

describe("User Activities", () => {
  describe("Upload Image", () => {
    it("Should Upload an Image", (done) => {
      chai
      .request(app)
      .post('/api/upload/:user_id')
      .send(user_id)
      .end((err, res) => {
        expect(res.body.statusCode).to.equal(200);
        expect(res.body.data).to.have.property("userId");
        expect(res.body.data.userId).to.be.a('string');
        expect(res.body.data).to.have.property('images');
        expect(res.body.data.images).to.be.a("string");
        expect(res.body.data).to.have.property('_id');
        expect(res.body.data._id).to.be.a("string");

        done();
      });
    });
  });
  describe("Get All Posts", () => {
    it("Should Return All Urls", (done) => {
      chai
      .request(app)
      .post("/api/posts/:user_id")
      .send(user_id)
      .end((err, res) => {
        expect(res.body.statusCode).to.equal(200);
        expect(res.body.data).to.have.property("images");
        expect(res.body.data.images).to.be.a('string');
        expect(res.body.data).to.be.an("array");

        done();
      });
    });
  });
});

