"use strict";

var Joi = require('joi');
var _ = require('lodash');

(function (module) {


var _id = {
	params: {
		_id: Joi.string().min(3)	
	}
};

var body = {
	payload: Joi.any()
};

module.get = _.clone(_id);
module.insert = _.clone(body);
module.delete = _.clone(_id);
module.update = _.extend({}, _id, body);

})(module.exports);