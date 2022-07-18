const { signin, validToken } = require("./auth/conrollers")
const { getAllCustomers } = require("./get-all-customes/conrollers")
const { getOneCustomer } = require("./one-customer/conrollers")
const { createNewCustomer } = require("./new-customer/conrollers")
const { updateCustomer } = require("./update-customer/conrollers")
const { deleteOneCustomer } = require("./delete-customer/conrollers")

exports.initial_router = (app) => {
    app.post("/signin/:id", signin);
    app.get("/", validToken, getAllCustomers);
    app.get("/:id", validToken, getOneCustomer);
    app.post("/", validToken, createNewCustomer);
    app.put("/:id/:scope/:status", validToken, updateCustomer);
    app.delete("/:id", validToken, deleteOneCustomer);
};

