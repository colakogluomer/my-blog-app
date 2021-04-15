export default class BaseService {
  async findAll() {
    return this.model.find();
  }
  async add(item) {
    return this.model.create(item);
  }

  async del(itemId) {
    return this.model.findByIdAndRemove(itemId);
  }

  async find(itemId) {
    return this.model.findById(itemId);
  }
  async updateById(itemId, post, options) {
    console.log("geldi.");
    return this.model.findByIdAndUpdate(itemId, post, options);
  }
}
