import AdminModel from "../models/admin.js";
import BaseService from "./BaseService.js";

class AdminService extends BaseService {
  model = AdminModel;
}

export default new AdminService();
